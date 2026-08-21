"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Activity, RefreshCw, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type LayerInfo = {
  name: string;
  depth: string;
  spt: string;
  color: string;
  density: string;
};

const soilLayers: LayerInfo[] = [
  { name: "Dolgu & Bitkisel Toprak", depth: "0.0m - 1.5m", spt: "N15 = 4", color: "#8B5A2B", density: "Gevşek" },
  { name: "Yüksek Plastisiteli Killi Zemin (CH)", depth: "1.5m - 6.2m", spt: "N30 = 12", color: "#654321", density: "Orta Sert" },
  { name: "Yeraltı Suyu Kotu (GWL)", depth: "-3.50m", spt: "Su Seviyesi", color: "#3B82F6", density: "Doygun" },
  { name: "İnce Kuma Dönüşümlü İnce Çakıl (SP)", depth: "6.2m - 12.8m", spt: "N30 = 28", color: "#D4A373", density: "Sıkı / Sıvılaşma Riski Düşük" },
  { name: "Ayrışmış Kayalık Zemin (Marn / Şist)", depth: "12.8m - 22.0m", spt: "N30 > 50 (Refü)", color: "#4A4E69", density: "Çok Sert / Sağlam Taban" }
];

export function SoilStratigraphyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedLayer, setSelectedLayer] = useState<LayerInfo>(soilLayers[1]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const render = () => {
      angle += 0.008;
      setRotation(Math.floor((angle * 180 / Math.PI) % 360));
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw 3D Ground Grid Lines
      ctx.strokeStyle = "rgba(226, 181, 76, 0.15)";
      ctx.lineWidth = 1;
      for (let i = -180; i <= 180; i += 30) {
        const x1 = centerX + Math.cos(angle + i * 0.02) * 140;
        const y1 = centerY + Math.sin(angle + i * 0.02) * 40 - 70;
        const x2 = centerX + Math.cos(angle + i * 0.02) * 140;
        const y2 = y1 + 180;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw Soil Stratigraphy Layers 3D Cylinders
      const layers = [
        { h: 30, color: "rgba(139, 90, 43, 0.85)", stroke: "#A0522D" },
        { h: 45, color: "rgba(101, 67, 33, 0.9)", stroke: "#8B4513" },
        { h: 55, color: "rgba(212, 163, 115, 0.85)", stroke: "#E6C280" },
        { h: 60, color: "rgba(74, 78, 105, 0.95)", stroke: "#6C757D" }
      ];

      let currentY = centerY - 80;

      layers.forEach((layer) => {
        const rx = 130 + Math.sin(angle) * 5;
        const ry = 35 + Math.cos(angle) * 3;

        // Layer Body
        ctx.fillStyle = layer.color;
        ctx.beginPath();
        ctx.ellipse(centerX, currentY, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = layer.stroke;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Depth Wall
        ctx.beginPath();
        ctx.rect(centerX - rx, currentY, rx * 2, layer.h);
        ctx.fillStyle = layer.color;
        ctx.fill();

        currentY += layer.h;
      });

      // Draw Groundwater Line Glow
      ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 25, 132, 36, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw Borehole BH-01 Axis & Sensors
      ctx.strokeStyle = "#E2B54C";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - 40, centerY - 110);
      ctx.lineTo(centerX - 40, centerY + 110);
      ctx.stroke();

      // Borehole Top Pulsing Indicator
      ctx.fillStyle = "#E2B54C";
      ctx.beginPath();
      ctx.arc(centerX - 40, centerY - 110, 5 + Math.sin(angle * 4) * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Draw Borehole BH-02 Axis
      ctx.strokeStyle = "#60A5FA";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX + 50, centerY - 95);
      ctx.lineTo(centerX + 50, centerY + 125);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-b from-[#13110a] via-[#0b0a06] to-[#12100a] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(226,181,76,0.08)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.08] pb-3">
        <div>
          <div className="flex items-center gap-2">
            <Badge tone="gold"><Layers className="mr-1 size-3" />3D Spatial Engine</Badge>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" /> Live Stratigraphy Canvas
            </span>
          </div>
          <h3 className="mt-1.5 text-base font-bold tracking-tight gold-gradient-text">
            3D Zemin Sondaj Profili & Katman Akışı (BH-01 / BH-02)
          </h3>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-white/50">
          <span className="flex items-center gap-1"><RefreshCw className="size-3 text-primary animate-spin" /> {rotation}° Yön</span>
          <span className="flex items-center gap-1 text-primary"><Eye className="size-3" /> Düzce Kampüs Sahası</span>
        </div>
      </div>

      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_340px] items-center">
        <div className="relative grid place-items-center rounded-lg border border-white/[0.06] bg-black/40 p-2">
          <canvas ref={canvasRef} width={480} height={260} className="w-full max-w-[480px] h-[260px]" />
          <div className="absolute left-3 top-3 rounded-md bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1.5 text-[10px] space-y-1">
            <p className="font-bold text-primary flex items-center gap-1.5">
              <Activity className="size-3 text-emerald-400" /> BH-01 Sondaj Kuyusu (22.0m)
            </p>
            <p className="text-white/70">Yeraltı Suyu: <strong className="text-blue-400">-3.50m</strong></p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="technical-label text-primary/70 mb-2">Zemin Katman Analizi & SPT Değerleri</p>
          {soilLayers.map((layer) => (
            <button
              key={layer.name}
              onClick={() => setSelectedLayer(layer)}
              className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all ${
                selectedLayer.name === layer.name
                  ? "border-primary bg-primary/15 shadow-[0_0_15px_rgba(226,181,76,0.15)] text-white font-semibold"
                  : "border-white/[0.06] bg-white/[0.02] text-white/60 hover:bg-white/[0.05]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full" style={{ backgroundColor: layer.color }} />
                  <span className="truncate max-w-[180px]">{layer.name}</span>
                </span>
                <span className="font-mono text-[10px] text-primary/90">{layer.depth}</span>
              </div>
              <div className="mt-1 flex items-center justify-between text-[10px] text-white/40 pl-4">
                <span>{layer.spt}</span>
                <span className="text-emerald-400/90">{layer.density}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
