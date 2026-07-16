export type EquipmentRig = {
  manufacturer: string;
  model: string;
  torque: number; // kNm
  maxDepth: number; // m
  maxDiameter: number; // mm
  weight: number; // tonnes
  enginePower: number; // kW
  applications: string[];
  advantages: string[];
  limitations: string[];
};

export const RIG_DATABASE: EquipmentRig[] = [
  {
    manufacturer: "Bauer",
    model: "BG 20 H",
    torque: 200,
    maxDepth: 53,
    maxDiameter: 1500,
    weight: 62.5,
    enginePower: 205,
    applications: ["Bored Piles (Kelly)", "CFA Piles", "Soil Mixing (FDP)"],
    advantages: ["Compact size for tight access", "High engine efficiency", "Easy mobilization"],
    limitations: ["Limited depth for very large diameters", "Not suitable for heavy diaphragm walls"]
  },
  {
    manufacturer: "Bauer",
    model: "BG 36 H",
    torque: 367,
    maxDepth: 115,
    maxDiameter: 3000,
    weight: 127.0,
    enginePower: 354,
    applications: ["Heavy Bored Piles", "Deep CFA Piles", "Diaphragm Walls (Cutter)"],
    advantages: ["Extreme torque", "Very deep capability", "Robust rock drilling"],
    limitations: ["High mobilization cost", "Large working platform required"]
  },
  {
    manufacturer: "Soilmec",
    model: "SR-30",
    torque: 130,
    maxDepth: 49,
    maxDiameter: 1500,
    weight: 38.5,
    enginePower: 164,
    applications: ["Bored Piles", "CFA Piles"],
    advantages: ["Highly agile", "Very lightweight", "Low headroom configurations available"],
    limitations: ["Lower torque limits rock penetration"]
  },
  {
    manufacturer: "Soilmec",
    model: "SR-75",
    torque: 290,
    maxDepth: 77,
    maxDiameter: 2500,
    weight: 76.0,
    enginePower: 328,
    applications: ["Bored Piles", "CFA Piles", "Displacement Piles"],
    advantages: ["Strong torque-to-weight ratio", "Advanced cabin telemetry", "Multi-mode versatility"],
    limitations: ["Requires stable crawler pads"]
  },
  {
    manufacturer: "Casagrande",
    model: "B125",
    torque: 125,
    maxDepth: 50,
    maxDiameter: 1500,
    weight: 36.0,
    enginePower: 119,
    applications: ["Bored Piles", "CFA Piles"],
    advantages: ["Affordable operations", "Simple hydraulic controls", "Compact footprint"],
    limitations: ["Lower power output in hard soil"]
  },
  {
    manufacturer: "Casagrande",
    model: "B300 XP",
    torque: 300,
    maxDepth: 85,
    maxDiameter: 2500,
    weight: 95.0,
    enginePower: 354,
    applications: ["Large Diameter Bored Piles", "CFA Piles", "Casing Oscillators"],
    advantages: ["XP electronic control system", "Excellent stability", "Fast drilling speeds"],
    limitations: ["Requires extensive staging area"]
  },
  {
    manufacturer: "Comacchio",
    model: "MC 15",
    torque: 15,
    maxDepth: 30,
    maxDiameter: 300,
    weight: 15.0,
    enginePower: 115,
    applications: ["Micropiles", "Anchors", "Jet Grouting (Single/Double/Triple)"],
    advantages: ["Highly articulated boom", "Perfect for restricted access/slopes", "Very high rotation speed"],
    limitations: ["Low torque, unsuitable for large diameter piles"]
  },
  {
    manufacturer: "Klemm",
    model: "KR 806-3D",
    torque: 32,
    maxDepth: 45,
    maxDiameter: 400,
    weight: 18.2,
    enginePower: 129,
    applications: ["Micropiles", "Jet Grouting", "Ground Anchors"],
    advantages: ["Exceptional kinematically flexible boom", "Dedicated jet grout extension mast", "Radio remote control"],
    limitations: ["Limited to small diameter execution"]
  },
  {
    manufacturer: "Junttan",
    model: "PMx22",
    torque: 0, // Impact Hammer instead
    maxDepth: 25,
    maxDiameter: 1200,
    weight: 65.0,
    enginePower: 179,
    applications: ["Driven Precast Piles", "Driven Steel Tubes"],
    advantages: ["Purpose-built pile driving efficiency", "Extremely stable telescoping leader", "Strong impact energy"],
    limitations: ["High vibration levels", "No rotary drilling capability"]
  }
];

export function buildEquipmentContextPrompt(): string {
  return [
    "# Geotechnical Equipment Database",
    "Use this official machine specifications database to check machine feasibility, maximum drilling depths, diameters, advantages, and limitations:",
    ...RIG_DATABASE.map((rig) => (
      `- **${rig.manufacturer} ${rig.model}**:` +
      ` Applications: ${rig.applications.join(", ")};` +
      ` Max Torque: ${rig.torque} kNm;` +
      ` Max Depth: ${rig.maxDepth} m;` +
      ` Max Diameter: ${rig.maxDiameter} mm;` +
      ` Weight: ${rig.weight} t;` +
      ` Power: ${rig.enginePower} kW;` +
      ` Advantages: ${rig.advantages.join(", ")};` +
      ` Limitations: ${rig.limitations.join(", ")}.`
    ))
  ].join("\n");
}
