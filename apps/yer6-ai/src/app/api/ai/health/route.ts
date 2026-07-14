import { getAIConfig } from "@/server/ai/config";
import { knowledgeBase } from "@/server/ai/knowledge-base";
import { createProviderChain } from "@/server/ai/providers/registry";
import { getRuntimeBindings } from "@/server/ai/runtime-bindings";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const config = getAIConfig();
  const bindings = await getRuntimeBindings();
  const providers = createProviderChain(config, bindings.AI);
  const knowledgeBaseStatus = await knowledgeBase.status();

  return Response.json({
    status: providers.length > 0 ? "configured" : "unconfigured",
    activeProvider: providers[0]?.name ?? null,
    openAIConfigured: Boolean(config.openAIApiKey),
    cloudflareAIConfigured: Boolean(bindings.AI),
    knowledgeBase: {
      provider: knowledgeBase.name,
      status: knowledgeBaseStatus
    }
  }, {
    headers: { "Cache-Control": "no-store" }
  });
}
