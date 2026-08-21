import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");

if (!fs.existsSync(outDir)) {
  console.error("❌ 'out' directory not found. Please run build first.");
  process.exit(1);
}

console.log("🔍 Running Comprehensive Google Search Console (GSC) Audit...\n");

let errors = [];
let warnings = [];
let totalHtmlFiles = 0;
let totalSchemasChecked = 0;
let allInternalLinks = [];
let allPageUrls = new Set();

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file === "index.html") {
      totalHtmlFiles++;
      checkHtmlFile(fullPath);
    }
  }
}

function checkHtmlFile(filePath) {
  const relPath = path.relative(outDir, filePath);
  const route = "/" + path.dirname(relPath).replace(/^\.$/, "");
  const normalizedRoute = route === "/" ? "/" : route + "/";
  allPageUrls.add(normalizedRoute);

  const html = fs.readFileSync(filePath, "utf-8");

  // 1. Check Title
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    errors.push(`[${normalizedRoute}] Missing or empty <title> tag`);
  }

  // 2. Check Meta Description
  const metaDescMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                        html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    errors.push(`[${normalizedRoute}] Missing or empty meta description`);
  }

  // 3. Check Canonical (skip 404 and _not-found pages)
  const is404 = normalizedRoute === "/404/" || normalizedRoute === "/_not-found/";
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  if (!canonicalMatch && !is404) {
    errors.push(`[${normalizedRoute}] Missing canonical tag`);
  } else if (canonicalMatch) {
    const canonicalUrl = canonicalMatch[1];
    if (!canonicalUrl.startsWith("https://www.yer6zemin.com.tr")) {
      errors.push(`[${normalizedRoute}] Canonical domain mismatch: ${canonicalUrl}`);
    }
    const expectedPath = normalizedRoute;
    const actualPath = new URL(canonicalUrl).pathname;
    if (actualPath !== expectedPath) {
      errors.push(`[${normalizedRoute}] Canonical path mismatch. Expected: ${expectedPath}, Actual: ${actualPath}`);
    }
  }

  // 4. Check Viewport (Mobile Friendly)
  if (!html.includes('name="viewport"') && !html.includes("name='viewport'")) {
    errors.push(`[${normalizedRoute}] Missing viewport meta tag (Mobile Usability issue)`);
  }

  // 5. Check Structured Data (JSON-LD)
  const jsonLdMatches = [...html.matchAll(/<script\s+[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdMatches) {
    totalSchemasChecked++;
    try {
      const data = JSON.parse(match[1]);
      validateSchema(data, normalizedRoute);
    } catch (err) {
      errors.push(`[${normalizedRoute}] Invalid JSON-LD syntax: ${err.message}`);
    }
  }

  // 6. Collect Internal Links
  const linkMatches = [...html.matchAll(/href="([^"#?]+)"/gi)];
  for (const lMatch of linkMatches) {
    const target = lMatch[1];
    const isAsset = /\.(png|ico|jpg|jpeg|webp|avif|svg|xml|webmanifest|txt|pdf|mp4)$/i.test(target);
    if (target.startsWith("/") && !target.startsWith("//") && !target.startsWith("/_next") && !isAsset) {
      const normalizedTarget = target.endsWith("/") ? target : target + "/";
      allInternalLinks.push({ from: normalizedRoute, to: normalizedTarget });
    }
  }
}

function validateSchema(data, route) {
  if (Array.isArray(data)) {
    data.forEach((item) => validateSchema(item, route));
    return;
  }

  const type = data["@type"];
  if (!type) {
    warnings.push(`[${route}] JSON-LD schema missing @type`);
    return;
  }

  // Article schema validation (Google Search Console requirement)
  if (type === "Article" || type === "NewsArticle" || type === "BlogPosting") {
    if (!data.headline) errors.push(`[${route}] Schema ${type} missing 'headline'`);
    if (!data.author) errors.push(`[${route}] Schema ${type} missing 'author'`);
    if (!data.publisher) errors.push(`[${route}] Schema ${type} missing 'publisher'`);
  }

  // VideoObject schema validation (Google Video Search & GSC requirements)
  if (type === "VideoObject") {
    if (!data.name) errors.push(`[${route}] VideoObject missing 'name'`);
    if (!data.description) errors.push(`[${route}] VideoObject missing 'description'`);
    if (!data.thumbnailUrl) errors.push(`[${route}] VideoObject missing 'thumbnailUrl'`);
    if (!data.uploadDate) errors.push(`[${route}] VideoObject missing 'uploadDate'`);
    if (!data.contentUrl && !data.embedUrl) {
      errors.push(`[${route}] VideoObject requires either 'contentUrl' or 'embedUrl'`);
    }
  }

  // BreadcrumbList validation
  if (type === "BreadcrumbList") {
    if (!data.itemListElement || !Array.isArray(data.itemListElement) || data.itemListElement.length === 0) {
      errors.push(`[${route}] BreadcrumbList missing 'itemListElement' items`);
    } else {
      data.itemListElement.forEach((item, idx) => {
        if (!item.name) errors.push(`[${route}] Breadcrumb item #${idx + 1} missing 'name'`);
        if (item.position !== idx + 1) warnings.push(`[${route}] Breadcrumb item position mismatch #${item.position} !== ${idx + 1}`);
      });
    }
  }

  // FAQPage validation
  if (type === "FAQPage") {
    if (!data.mainEntity || !Array.isArray(data.mainEntity) || data.mainEntity.length === 0) {
      errors.push(`[${route}] FAQPage missing 'mainEntity' items`);
    } else {
      data.mainEntity.forEach((q, idx) => {
        if (!q.name) errors.push(`[${route}] FAQ item #${idx + 1} missing 'name' (question text)`);
        if (!q.acceptedAnswer || !q.acceptedAnswer.text) {
          errors.push(`[${route}] FAQ item #${idx + 1} missing 'acceptedAnswer.text'`);
        }
      });
    }
  }
}

walk(outDir);

// 7. Check Internal Link Targets (Broken Links 404s)
let uniqueBroken = new Set();
for (const link of allInternalLinks) {
  if (!allPageUrls.has(link.to)) {
    uniqueBroken.add(`Broken link from '${link.from}' to '${link.to}'`);
  }
}
if (uniqueBroken.size > 0) {
  uniqueBroken.forEach((b) => errors.push(b));
}

// 8. Check Sitemap.xml
const sitemapPath = path.join(outDir, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  errors.push("sitemap.xml not found in output directory");
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const sitemapUrls = [...sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`📑 sitemap.xml contains ${sitemapUrls.length} URLs.`);
  
  for (const sUrl of sitemapUrls) {
    const pathname = new URL(sUrl).pathname;
    if (!allPageUrls.has(pathname)) {
      errors.push(`sitemap.xml contains URL '${sUrl}' that does not exist in generated pages`);
    }
  }

  // Check if any HTML page is missing from sitemap (skip intentional 404 error pages)
  let missingFromSitemap = 0;
  for (const pageUrl of allPageUrls) {
    if (pageUrl === "/_not-found/" || pageUrl === "/404/") continue;
    const fullUrl = `https://www.yer6zemin.com.tr${pageUrl}`;
    if (!sitemapUrls.includes(fullUrl)) {
      warnings.push(`Page '${fullUrl}' is generated but missing from sitemap.xml`);
      missingFromSitemap++;
    }
  }
}

// 9. Check Robots.txt
const robotsPath = path.join(outDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  errors.push("robots.txt not found in output directory");
} else {
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  if (!robotsContent.includes("Sitemap: https://www.yer6zemin.com.tr/sitemap.xml")) {
    errors.push("robots.txt does not contain valid Sitemap directive");
  }
  if (!robotsContent.includes("User-agent: *") && !robotsContent.includes("User-Agent: *")) {
    errors.push("robots.txt missing User-agent directive");
  }
}

console.log(`\n📊 Audit Summary:`);
console.log(`- Total HTML Pages Inspected: ${totalHtmlFiles}`);
console.log(`- Total JSON-LD Schemas Validated: ${totalSchemasChecked}`);
console.log(`- Total Internal Links Checked: ${allInternalLinks.length}`);
console.log(`- Errors: ${errors.length}`);
console.log(`- Warnings: ${warnings.length}\n`);

if (warnings.length > 0) {
  console.log("⚠️ Warnings (" + warnings.length + "):");
  warnings.slice(0, 20).forEach((w) => console.log("  " + w));
  if (warnings.length > 20) console.log(`  ... and ${warnings.length - 20} more warnings`);
}

if (errors.length > 0) {
  console.log("\n❌ Errors (" + errors.length + "):");
  errors.forEach((e) => console.log("  " + e));
  process.exit(1);
} else {
  console.log("✅ Google Search Console Audit PASSED with 0 Errors!");
}
