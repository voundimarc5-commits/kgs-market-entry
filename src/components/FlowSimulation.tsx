import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "origin" | "intermediary" | "destination";
}

interface FlowIndicator {
  label: string;
  status: "elevated" | "moderate" | "detected" | "required";
  delay: number;
}

const FlowSimulation = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showIndicators, setShowIndicators] = useState(false);
  const animFrameRef = useRef<number>(0);

  const indicators: FlowIndicator[] = [
    { label: t("sim.indicator1"), status: "elevated", delay: 1200 },
    { label: t("sim.indicator2"), status: "moderate", delay: 1800 },
    { label: t("sim.indicator3"), status: "detected", delay: 2400 },
    { label: t("sim.indicator4"), status: "required", delay: 3000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowIndicators(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Node positions (relative to canvas)
    const getNodes = (): FlowNode[] => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      const cx = w / 2;
      const cy = h / 2;
      const spread = Math.min(w * 0.35, 280);

      return [
        { id: "origin", label: t("sim.origin"), x: cx - spread, y: cy - 20, type: "origin" },
        { id: "inter1", label: t("sim.inter1"), x: cx - spread * 0.3, y: cy - spread * 0.45, type: "intermediary" },
        { id: "inter2", label: t("sim.inter2"), x: cx + spread * 0.1, y: cy + spread * 0.3, type: "intermediary" },
        { id: "inter3", label: t("sim.inter3"), x: cx + spread * 0.35, y: cy - spread * 0.15, type: "intermediary" },
        { id: "dest", label: t("sim.dest"), x: cx + spread, y: cy + 10, type: "destination" },
      ];
    };

    const edges = [
      [0, 1], [1, 3], [0, 2], [2, 3], [3, 4], [2, 4],
    ];

    const drawNode = (node: FlowNode, t: number) => {
      const pulse = Math.sin(t * 0.02 + node.x * 0.01) * 0.15 + 1;
      const baseSize = node.type === "origin" || node.type === "destination" ? 28 : 20;
      const size = baseSize * pulse;

      // Glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 2.5);
      if (node.type === "origin") {
        gradient.addColorStop(0, "hsla(215, 65%, 45%, 0.15)");
      } else if (node.type === "destination") {
        gradient.addColorStop(0, "hsla(160, 50%, 45%, 0.15)");
      } else {
        gradient.addColorStop(0, "hsla(215, 40%, 55%, 0.1)");
      }
      gradient.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(node.x, node.y, size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      if (node.type === "origin") {
        ctx.fillStyle = "hsla(215, 65%, 45%, 0.9)";
      } else if (node.type === "destination") {
        ctx.fillStyle = "hsla(160, 50%, 45%, 0.9)";
      } else {
        ctx.fillStyle = "hsla(215, 30%, 60%, 0.7)";
      }
      ctx.fill();

      // Inner circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, size * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(0, 0%, 100%, 0.6)";
      ctx.fill();

      // Label
      ctx.font = "500 11px Inter, sans-serif";
      ctx.fillStyle = "hsla(215, 20%, 35%, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText(node.label, node.x, node.y + size + 16);
    };

    const drawEdge = (from: FlowNode, to: FlowNode, t: number, idx: number) => {
      const dx = to.x - from.x;
      const dy = to.y - from.y;

      // Curved path
      const cx1 = from.x + dx * 0.3 + dy * 0.15;
      const cy1 = from.y + dy * 0.3 - dx * 0.08;
      const cx2 = from.x + dx * 0.7 - dy * 0.1;
      const cy2 = from.y + dy * 0.7 + dx * 0.05;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.bezierCurveTo(cx1, cy1, cx2, cy2, to.x, to.y);
      ctx.strokeStyle = "hsla(215, 30%, 60%, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Animated dot traveling along edge
      const speed = 0.008 + idx * 0.002;
      const progress = ((t * speed + idx * 0.7) % 3) / 3;
      if (progress < 1) {
        // Friction effect: slow down at certain points
        const frictionPoint = 0.5 + Math.sin(idx * 2) * 0.2;
        let adjustedProgress = progress;
        const frictionZone = Math.abs(progress - frictionPoint);
        if (frictionZone < 0.15) {
          adjustedProgress = progress - Math.sin(frictionZone * Math.PI / 0.15) * 0.03;
        }

        const p = adjustedProgress;
        const ip = 1 - p;
        const dotX = ip*ip*ip * from.x + 3*ip*ip*p * cx1 + 3*ip*p*p * cx2 + p*p*p * to.x;
        const dotY = ip*ip*ip * from.y + 3*ip*ip*p * cy1 + 3*ip*p*p * cy2 + p*p*p * to.y;

        // Dot with trail
        const gradient = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 8);
        gradient.addColorStop(0, "hsla(215, 65%, 55%, 0.8)");
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(dotX, dotY, 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(215, 65%, 55%, 0.9)";
        ctx.fill();
      }
    };

    const drawBackground = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;

      // Subtle grid
      ctx.strokeStyle = "hsla(215, 20%, 70%, 0.08)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      time++;
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      ctx.clearRect(0, 0, w, h);

      drawBackground();

      const nodes = getNodes();
      edges.forEach(([fi, ti], idx) => {
        drawEdge(nodes[fi], nodes[ti], time, idx);
      });
      nodes.forEach((node) => drawNode(node, time));

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [t]);

  const statusColor = (status: FlowIndicator["status"]) => {
    switch (status) {
      case "elevated": return "bg-primary/15 text-primary border-primary/20";
      case "moderate": return "bg-flow-warm text-flow-slate border-border";
      case "detected": return "bg-primary/10 text-primary border-primary/15";
      case "required": return "bg-secondary text-muted-foreground border-border";
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-flow-surface to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-6 animate-fade-in-up bg-card">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">
            {t("sim.badge")}
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up animation-delay-200">
          {t("sim.title")}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-300 leading-relaxed">
          {t("sim.subtitle")}
        </p>

        {/* Flow Canvas */}
        <div
          ref={containerRef}
          className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl border border-border bg-card/50 overflow-hidden animate-fade-in-up animation-delay-400"
        >
          <canvas ref={canvasRef} className="absolute inset-0" />
        </div>

        {/* Qualitative Indicators */}
        {showIndicators && (
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-600">
            {indicators.map((ind, i) => (
              <div
                key={i}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-body font-medium animate-indicator ${statusColor(ind.status)}`}
                style={{ animationDelay: `${ind.delay}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                {ind.label}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 animate-fade-in-up animation-delay-800">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            {t("sim.cta")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlowSimulation;
