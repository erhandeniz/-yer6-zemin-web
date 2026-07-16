/**
 * Decision rule persistence. Loads active rules from Postgres and falls back to
 * the built-in DECISION_SEED when the table is empty, so the decision engine is
 * useful before any custom rules are authored.
 */

import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  DECISION_SEED,
  evaluateDecisions,
  type DecisionContext,
  type DecisionCondition,
  type DecisionOutcome,
  type DecisionRuleDefinition
} from "@/server/engine/decisions/engine";

function toDefinition(row: {
  key: string;
  title: string;
  category: string;
  priority: number;
  conditions: Prisma.JsonValue;
  outcome: Prisma.JsonValue;
  references: string[];
}): DecisionRuleDefinition {
  return {
    key: row.key,
    title: row.title,
    category: row.category,
    priority: row.priority,
    conditions: (Array.isArray(row.conditions) ? row.conditions : []) as unknown as DecisionCondition[],
    outcome: (row.outcome ?? {}) as unknown as DecisionOutcome,
    references: row.references
  };
}

export async function loadDecisionRules(): Promise<DecisionRuleDefinition[]> {
  if (!process.env.DATABASE_URL) return DECISION_SEED;
  try {
    const rows = await prisma.decisionRule.findMany({
      where: { active: true },
      orderBy: { priority: "asc" }
    });
    return rows.length > 0 ? rows.map(toDefinition) : DECISION_SEED;
  } catch {
    return DECISION_SEED;
  }
}

export async function evaluateContext(context: DecisionContext) {
  const rules = await loadDecisionRules();
  return evaluateDecisions(rules, context);
}

export async function importDecisionRules(
  rules: DecisionRuleDefinition[]
): Promise<{ received: number; upserted: number; failed: number }> {
  let upserted = 0;
  let failed = 0;
  for (const rule of rules) {
    try {
      const data = {
        key: rule.key,
        title: rule.title,
        category: rule.category,
        priority: rule.priority,
        conditions: rule.conditions as unknown as Prisma.InputJsonValue,
        outcome: rule.outcome as unknown as Prisma.InputJsonValue,
        references: rule.references,
        active: true
      };
      await prisma.decisionRule.upsert({ where: { key: rule.key }, create: data, update: data });
      upserted += 1;
    } catch {
      failed += 1;
    }
  }
  return { received: rules.length, upserted, failed };
}
