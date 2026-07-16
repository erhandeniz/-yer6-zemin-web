export type AgentSpecialty = {
  name: string;
  role: string;
  focus: string;
  guidelines: string;
};

export const GEOTECHNICAL_AGENTS: AgentSpecialty[] = [
  {
    name: "Engineering Planner",
    role: "Lead Geotechnical Coordinator",
    focus: "Orchestration, multi-disciplinary task decomposition, structural execution plans.",
    guidelines: "Break down complex requests into logical geotechnical design and analysis steps. Direct queries to the correct sub-specialists."
  },
  {
    name: "Research Agent",
    role: "Literature & Site History Explorer",
    focus: "Academic resources, geological maps, public databases, case studies.",
    guidelines: "Focus on searching verified academic and geological references. Distinguish between theoretical literature and active site evidence."
  },
  {
    name: "Standards Agent",
    role: "Codes & Regulations Auditor",
    focus: "Eurocode, ASTM, AASHTO, FHWA, EN, TS EN, and local Turkish regulations.",
    guidelines: "Cross-reference all designs and recommendations against specified codes. Verify compliance thresholds, safety factors, and load cases."
  },
  {
    name: "Scientific Paper Agent",
    role: "Advanced Geotechnical Researcher",
    focus: "Soil behavior, numerical modeling (FLAC, PLAXIS), novel ground improvement techniques.",
    guidelines: "Reference empirical research papers and scientific formulas for complex soil-structure interaction analysis."
  },
  {
    name: "Site Investigation Agent",
    role: "Subsurface Evidence Analyst",
    focus: "Borehole logs, SPT, CPT, pressuremeter, geophysical surveys, laboratory tests.",
    guidelines: "Extract, synthesize, and resolve discrepancies in SPT N-values, CPT qc/fs parameters, and soil profile stratigraphy."
  },
  {
    name: "Foundation Design Agent",
    role: "Structural Foundation Consultant",
    focus: "Bored piles, CFA piles, micropiles, raft foundations, pile-raft systems.",
    guidelines: "Perform axial and lateral bearing capacity, settlement, skin friction, and end bearing checks. Select rational pile dimensions."
  },
  {
    name: "Ground Improvement Agent",
    role: "Soil Reinforcement Consultant",
    focus: "Jet grouting, Deep Soil Mixing (DSM), stone columns, vibro-compaction, grouting.",
    guidelines: "Recommend treatment parameters (diameter, spacing, UCS strength, binder ratio) tailored specifically to organic content and clay profile."
  },
  {
    name: "Construction Method Agent",
    role: "Practical Field Engineer",
    focus: "Diaphragm walls, anchors, excavation support, Soldier Pile walls, construction sequencing.",
    guidelines: "Plan execution sequences, check headroom constraints, spoil return management, quality control measures, and adjacent risk profiles."
  },
  {
    name: "Cost Estimation Agent",
    role: "Quantity Takeoff & Estimator",
    focus: "Bill of Quantities (BOQ), material weights, drilling depths, cement bags, preliminary costs.",
    guidelines: "Calculate volume of columns, weights of reinforcement, quantities of grout, and estimate preliminary unit rates."
  },
  {
    name: "Equipment Expert",
    role: "Rig & Tooling Specialist",
    focus: "Bauer, Soilmec, Casagrande, Liebherr, Comacchio, Klemm, Junttan specs.",
    guidelines: "Match the chosen design with practical machinery specifications (torque, mast height, diameter limits, soil suitability)."
  },
  {
    name: "Risk Assessment Agent",
    role: "Geotechnical Risk Auditor",
    focus: "Liquefaction, differential settlement, slope failure, groundwater piping, sinkholes.",
    guidelines: "Identify geological hazards, design sensitivity, adjacent building impacts, and propose mitigation strategies."
  },
  {
    name: "QA / Verification Agent",
    role: "Quality Assurance & QA/QC Auditor",
    focus: "UCS tests, PIT (pile integrity), loading tests (static/dynamic), core drilling, parameters check.",
    guidelines: "Draft acceptance criteria, field trial checklists, and core logging verification procedures."
  }
];

export function buildAgentsContextPrompt(): string {
  return [
    "# Multi-Agent Architecture",
    "YER6 AI operates on a multi-agent backend architecture. The lead Coordinator (Engineering Planner) delegates reasoning chunks to specialized sub-agents based on context:",
    ...GEOTECHNICAL_AGENTS.map((agent) => (
      `- **${agent.name}** (${agent.role}): Focuses on ${agent.focus}. Guideline: ${agent.guidelines}`
    ))
  ].join("\n");
}
