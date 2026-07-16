/**
 * Geotechnical Calculation Engine
 * Formulates and calculates exact values for bearing capacity,
 * settlement, jet grout configurations, and lateral earth pressures.
 */

/**
 * Calculates ultimate and allowable bearing capacity using Terzaghi's method
 * for strip, square, or circular footings.
 */
export function calculateBearingCapacity(input: {
  cohesion: number; // kPa (c)
  phi: number; // degrees (friction angle)
  gamma: number; // kN/m³ (unit weight of soil)
  footingWidth: number; // m (B)
  footingDepth: number; // m (Df)
  shape: "strip" | "square" | "circle";
  safetyFactor: number; // e.g. 3.0
}) {
  const { cohesion, phi, gamma, footingWidth: B, footingDepth: Df, shape, safetyFactor } = input;

  // Convert friction angle to radians
  const phiRad = (phi * Math.PI) / 180;

  // Calculate bearing capacity factors
  // Nq = e^(pi * tan(phi)) * tan^2(45 + phi/2)
  const Nq =
    phi === 0
      ? 1
      : Math.exp(Math.PI * Math.tan(phiRad)) * Math.pow(Math.tan(Math.PI / 4 + phiRad / 2), 2);

  // Nc = (Nq - 1) * cot(phi)
  const Nc = phi === 0 ? 5.7 : (Nq - 1) / Math.tan(phiRad);

  // Ngamma = 2 * (Nq + 1) * tan(phi) (Vesic's approximation)
  const Ngamma = phi === 0 ? 0 : 2 * (Nq + 1) * Math.tan(phiRad);

  // Adjust shape factors (Terzaghi's coefficients)
  let sc = 1.0;
  let sgamma = 1.0;
  if (shape === "square") {
    sc = 1.3;
    sgamma = 0.8;
  } else if (shape === "circle") {
    sc = 1.3;
    sgamma = 0.6;
  }

  // Calculate ultimate capacity components
  const surcharge = gamma * Df; // q = gamma * Df
  const ultimateCohesionPart = cohesion * Nc * sc;
  const ultimateSurchargePart = surcharge * Nq;
  const ultimateUnitWeightPart = 0.5 * gamma * B * Ngamma * sgamma;

  const ultimateCapacity = ultimateCohesionPart + ultimateSurchargePart + ultimateUnitWeightPart;
  const allowableCapacity = ultimateCapacity / safetyFactor;

  return {
    factors: { Nc, Nq, Ngamma },
    components: {
      cohesion: ultimateCohesionPart,
      surcharge: ultimateSurchargePart,
      unitWeight: ultimateUnitWeightPart
    },
    ultimateCapacity,
    allowableCapacity,
    formula: `q_ult = c * Nc * sc + q * Nq + 0.5 * gamma * B * Ngamma * sgamma`,
    steps: [
      `1. Convert friction angle phi = ${phi}° to radians (${phiRad.toFixed(4)} rad).`,
      `2. Calculate factors: Nc = ${Nc.toFixed(2)}, Nq = ${Nq.toFixed(2)}, Ngamma = ${Ngamma.toFixed(2)}.`,
      `3. Calculate footing shape factors sc = ${sc}, sgamma = ${sgamma}.`,
      `4. Surcharge load q = gamma * Df = ${gamma} * ${Df} = ${surcharge} kPa.`,
      `5. Ultimate capacity: (${cohesion} * ${Nc.toFixed(2)} * ${sc}) + (${surcharge} * ${Nq.toFixed(2)}) + (0.5 * ${gamma} * ${B} * ${Ngamma.toFixed(2)} * ${sgamma}) = ${ultimateCapacity.toFixed(2)} kPa.`,
      `6. Allowable capacity: q_all = q_ult / SF = ${ultimateCapacity.toFixed(2)} / ${safetyFactor} = ${allowableCapacity.toFixed(2)} kPa.`
    ]
  };
}

/**
 * Calculates elastic settlement of a shallow foundation.
 */
export function calculateElasticSettlement(input: {
  loadIntensity: number; // kPa (q)
  footingWidth: number; // m (B)
  poissonRatio: number; // v
  elasticModulus: number; // kPa (Es)
  influenceFactor: number; // Ip (typically 0.88 to 1.2)
}) {
  const { loadIntensity: q, footingWidth: B, poissonRatio: v, elasticModulus: Es, influenceFactor: Ip } = input;

  // Se = (q * B * (1 - v^2) * Ip) / Es
  const settlement = (q * B * (1 - Math.pow(v, 2)) * Ip) / Es;
  const settlementMm = settlement * 1000; // Convert to mm

  return {
    settlementMeters: settlement,
    settlementMm,
    formula: `Se = (q * B * (1 - v^2) * Ip) / Es`,
    steps: [
      `1. Calculate structural footing strain term: 1 - v^2 = 1 - ${v}^2 = ${(1 - Math.pow(v, 2)).toFixed(4)}.`,
      `2. Compute numerator: q * B * (1-v^2) * Ip = ${q} * ${B} * ${(1 - Math.pow(v, 2)).toFixed(4)} * ${Ip} = ${(q * B * (1 - Math.pow(v, 2)) * Ip).toFixed(4)}.`,
      `3. Divide by Elastic Modulus Es (${Es} kPa): Se = ${settlement.toFixed(6)} meters.`,
      `4. Convert to mm: Se = ${settlementMm.toFixed(2)} mm.`
    ]
  };
}

/**
 * Calculates volumetric and material requirements for a jet grout column design.
 */
export function calculateJetGroutQuantity(input: {
  diameter: number; // m
  length: number; // m
  count: number;
  cementRatio: number; // kg of cement per m³ of soil-grout mix (typically 350 to 500)
  overlapPercent: number; // % (e.g. 10%)
}) {
  const { diameter, length, count, cementRatio, overlapPercent } = input;

  // Single column area & volume
  const singleArea = (Math.PI * Math.pow(diameter, 2)) / 4;
  const singleVolume = singleArea * length;

  // Account for overlapping efficiency loss (reduced effective area)
  const efficiencyFactor = 1 - overlapPercent / 100;
  const effectiveArea = singleArea * efficiencyFactor;

  const totalVolume = singleVolume * count;
  const totalCementKg = totalVolume * cementRatio;
  const cementBags = totalCementKg / 50; // Standard 50 kg bags

  return {
    singleArea,
    singleVolume,
    effectiveArea,
    totalVolume,
    totalCementKg,
    cementBags,
    steps: [
      `1. Area of single D = ${diameter} m column: A = pi * D^2 / 4 = ${singleArea.toFixed(4)} m².`,
      `2. Volume of single column: V = A * L = ${singleArea.toFixed(4)} * ${length} = ${singleVolume.toFixed(2)} m³.`,
      `3. Total volume of ${count} columns: V_total = V * ${count} = ${totalVolume.toFixed(2)} m³.`,
      `4. Total cement consumption (${cementRatio} kg/m³): Cement = V_total * ${cementRatio} = ${totalCementKg.toFixed(2)} kg.`,
      `5. Convert to 50kg bags: Bags = ${cementBags.toFixed(1)} bags.`
    ]
  };
}

/**
 * Preliminary axial capacity of a single bored/CFA/micropile in one dominant
 * soil behaviour type. Cohesive soils use the α-method (skin) with Nc = 9 base;
 * granular soils use the β-method (skin) with an Nq base factor. This is a
 * single-layer preliminary estimate — layered profiles, negative skin friction
 * and group effects are out of scope and must be checked in design.
 */
export function calculatePileAxialCapacity(input: {
  diameter: number; // m
  length: number; // m (embedded length)
  soilType: "cohesive" | "granular";
  safetyFactor: number; // e.g. 2.5
  cohesion?: number; // kPa (cu) — cohesive
  alpha?: number; // adhesion factor — cohesive (default 0.5)
  gamma?: number; // kN/m³ — granular
  phi?: number; // degrees — granular
  beta?: number; // skin factor — granular (default from phi)
  waterTableDepth?: number; // m (informational)
}) {
  const { diameter: D, length: L, soilType, safetyFactor } = input;
  const perimeter = Math.PI * D;
  const baseArea = (Math.PI * D * D) / 4;
  const steps: string[] = [
    `1. Shaft perimeter: p = π·D = π·${D} = ${perimeter.toFixed(3)} m.`,
    `2. Base area: A_b = π·D²/4 = ${baseArea.toFixed(4)} m².`
  ];

  let skinFriction = 0;
  let baseResistance = 0;

  if (soilType === "cohesive") {
    const cu = input.cohesion ?? 0;
    const alpha = input.alpha ?? 0.5;
    const unitSkin = alpha * cu; // kPa
    skinFriction = unitSkin * perimeter * L;
    baseResistance = 9 * cu * baseArea; // Nc = 9 for deep foundations in clay
    steps.push(
      `3. α-method unit skin friction: f_s = α·c_u = ${alpha}·${cu} = ${unitSkin.toFixed(2)} kPa.`,
      `4. Shaft capacity: Q_s = f_s·p·L = ${unitSkin.toFixed(2)}·${perimeter.toFixed(3)}·${L} = ${skinFriction.toFixed(1)} kN.`,
      `5. Base capacity: Q_b = 9·c_u·A_b = 9·${cu}·${baseArea.toFixed(4)} = ${baseResistance.toFixed(1)} kN.`
    );
  } else {
    const gamma = input.gamma ?? 0;
    const phi = input.phi ?? 0;
    const phiRad = (phi * Math.PI) / 180;
    const beta = input.beta ?? Math.min(0.8, (1 - Math.sin(phiRad)) * Math.tan(phiRad));
    const Nq = phi === 0 ? 1 : Math.exp(Math.PI * Math.tan(phiRad)) * Math.pow(Math.tan(Math.PI / 4 + phiRad / 2), 2);
    const sigmaMid = gamma * (L / 2); // mean vertical effective stress along shaft (approx.)
    const sigmaBase = gamma * L;
    const unitSkin = beta * sigmaMid;
    skinFriction = unitSkin * perimeter * L;
    baseResistance = Nq * sigmaBase * baseArea;
    steps.push(
      `3. β-method skin factor: β = ${beta.toFixed(3)}; mean σ'_v ≈ γ·L/2 = ${sigmaMid.toFixed(1)} kPa.`,
      `4. Shaft capacity: Q_s = β·σ'_v·p·L = ${beta.toFixed(3)}·${sigmaMid.toFixed(1)}·${perimeter.toFixed(3)}·${L} = ${skinFriction.toFixed(1)} kN.`,
      `5. Base capacity: Q_b = N_q·σ'_v,base·A_b = ${Nq.toFixed(2)}·${sigmaBase.toFixed(1)}·${baseArea.toFixed(4)} = ${baseResistance.toFixed(1)} kN.`
    );
  }

  const ultimateCapacity = skinFriction + baseResistance;
  const allowableCapacity = ultimateCapacity / safetyFactor;
  steps.push(
    `6. Ultimate axial capacity: Q_ult = Q_s + Q_b = ${ultimateCapacity.toFixed(1)} kN.`,
    `7. Allowable axial capacity: Q_all = Q_ult / SF = ${ultimateCapacity.toFixed(1)} / ${safetyFactor} = ${allowableCapacity.toFixed(1)} kN.`
  );

  return {
    skinFriction,
    baseResistance,
    ultimateCapacity,
    allowableCapacity,
    formula:
      soilType === "cohesive"
        ? "Q_ult = α·c_u·p·L + 9·c_u·A_b"
        : "Q_ult = β·σ'_v·p·L + N_q·σ'_v,base·A_b",
    steps
  };
}

/**
 * Calculates lateral active and passive earth pressure coefficients and forces
 * using Rankine's theory.
 */
export function calculateEarthPressure(input: {
  phi: number; // degrees
  gamma: number; // kN/m³
  height: number; // m
  cohesion?: number; // kPa
}) {
  const { phi, gamma, height, cohesion = 0 } = input;

  const phiRad = (phi * Math.PI) / 180;

  // Ka = tan^2(45 - phi/2)
  const Ka = Math.pow(Math.tan(Math.PI / 4 - phiRad / 2), 2);
  // Kp = tan^2(45 + phi/2)
  const Kp = Math.pow(Math.tan(Math.PI / 4 + phiRad / 2), 2);

  // Active Pressure at base (pa = Ka * gamma * H - 2 * c * sqrt(Ka))
  const pa = Ka * gamma * height - 2 * cohesion * Math.sqrt(Ka);
  // Passive Pressure at base (pp = Kp * gamma * H + 2 * c * sqrt(Kp))
  const pp = Kp * gamma * height + 2 * cohesion * Math.sqrt(Kp);

  // Total Active Force per unit width (Pa = 0.5 * Ka * gamma * H^2 - 2 * c * H * sqrt(Ka))
  const Pa = Math.max(0, 0.5 * Ka * gamma * Math.pow(height, 2) - 2 * cohesion * height * Math.sqrt(Ka));
  // Total Passive Force per unit width (Pp = 0.5 * Kp * gamma * H^2 + 2 * c * H * sqrt(Kp))
  const Pp = 0.5 * Kp * gamma * Math.pow(height, 2) + 2 * cohesion * height * Math.sqrt(Kp);

  return {
    coefficients: { Ka, Kp },
    pressuresAtBase: { pa, pp },
    totalForces: { Pa, Pp },
    steps: [
      `1. Ka coefficient = tan^2(45 - phi/2) = ${Ka.toFixed(3)}.`,
      `2. Kp coefficient = tan^2(45 + phi/2) = ${Kp.toFixed(3)}.`,
      `3. Total Active Force: Pa = 0.5 * Ka * gamma * H^2 - 2 * c * H * sqrt(Ka) = ${Pa.toFixed(2)} kN/m.`,
      `4. Total Passive Force: Pp = 0.5 * Kp * gamma * H^2 + 2 * c * H * sqrt(Kp) = ${Pp.toFixed(2)} kN/m.`
    ]
  };
}
