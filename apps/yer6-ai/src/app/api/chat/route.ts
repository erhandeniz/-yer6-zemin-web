import { openai } from "@ai-sdk/openai";
import { streamText, type ModelMessage } from "ai";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const runtime = "nodejs";
export const maxDuration = 60;

const systemPrompt = `You are YER6 AI, an expert geotechnical engineering copilot.
Analyze only the evidence supplied in the conversation and project context.
Separate observations, assumptions, calculations, risks, and recommendations.
Use SI units. Cite source filenames and page or table references when available.
Never claim to replace the responsible geotechnical engineer or issue a final design approval.
When information is missing, identify exactly what is required before a design decision.`;

const responseLanguages = {
  tr: "Turkish",
  en: "English",
  ar: "Arabic"
} as const;

const demoResponses = {
  tr: "Mevcut proje bağlamına göre, değişken dolgu ve gevşek siltli kumun üst 6,5 m boyunca devam ettiği bölgelerde jet grout daha güçlü bir ön seçenek olmaya devam ediyor. Aksı kesinleştirmeden önce (1) tasarım yeraltı suyu kotunu, (2) temsili ince dane oranını ve (3) deneme kolonunun 7 ve 28 günlük UCS değerlerini doğrulayın. Ön değerlendirmede 1,8 m aralıkla 800 mm kolon taranabilir; ardından oturma ve bindirme koşulları deneme sonuçlarıyla doğrulanmalıdır. Bu öneri ön mühendislik değerlendirmesidir ve projeye özel doğrulama gerektirir.",
  en: "Based on the current project context, jet grout remains the stronger preliminary option where variable fill and loose silty sand extend through the upper 6.5 m. Before fixing the grid, confirm: (1) design groundwater elevation, (2) representative fines content, and (3) trial-column UCS at 7 and 28 days. I would screen an 800 mm column at 1.8 m spacing, then validate settlement and overlap using the trial results. This is a preliminary engineering recommendation and requires project-specific verification.",
  ar: "وفقاً لسياق المشروع الحالي، يظل الحقن النفاث الخيار الأولي الأقوى حيث تمتد الردميات المتغيرة والرمال الغرينية المفككة خلال أول 6.5 م. قبل اعتماد الشبكة، تحقق من منسوب المياه الجوفية التصميمي ونسبة المواد الناعمة الممثلة ومقاومة الضغط غير المحصور لعمود الاختبار بعد 7 و28 يوماً. يمكن تقييم عمود بقطر 800 مم وتباعد 1.8 م مبدئياً، ثم التحقق من الهبوط والتداخل باستخدام نتائج الاختبار. هذه توصية هندسية أولية وتتطلب تحققاً خاصاً بالمشروع."
} as const;

export async function POST(request: Request) {
  if (process.env.AUTH_REQUIRED === "true") {
    const session = await getServerSession(authOptions);
    if (!session) return new Response("Unauthorized", { status: 401 });
  }

  const payload = (await request.json()) as { messages?: ModelMessage[]; projectId?: string; locale?: string };
  const locale = payload.locale === "tr" || payload.locale === "ar" ? payload.locale : "en";

  if (!process.env.OPENAI_API_KEY) {
    return new Response(demoResponses[locale], {
      headers: { "Content-Type": "text/plain; charset=utf-8", "X-YER6-Mode": "demo" }
    });
  }

  const result = streamText({
    model: openai("gpt-5-mini"),
    system: `${systemPrompt}\nRespond in ${responseLanguages[locale]}.`,
    messages: payload.messages ?? [],
    temperature: 0.2
  });

  return result.toTextStreamResponse();
}
