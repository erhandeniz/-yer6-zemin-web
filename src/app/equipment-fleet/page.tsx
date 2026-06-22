import type { Metadata } from "next";
import { EquipmentContent } from "./EquipmentContent";

export const metadata: Metadata = {
  title: "Makine Parki",
  description: "YER6 agir makine filosu, jet grout, DSM, fore kazik, ankraj ve mini kazik ekipmanlari."
};

export default function EquipmentFleetPage() {
  return <EquipmentContent />;
}
