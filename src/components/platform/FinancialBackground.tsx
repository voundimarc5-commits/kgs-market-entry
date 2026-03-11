import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface DataLine {
  points: number[];
  offset: number;
  speed: number;
  y: number;
  opacity: number;
}

const FinancialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const particles: Particle[] = [];
    const dataLines: DataLine[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 3;
    };

    const init = () => {
      resize();
      particles.length = 0;
      dataLines.length = 0;

      // Floating particles
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.15 + 0.03,
        });
      }

      // Financial chart lines
      for (let i = 0; i < 5; i++) {
        const pts: number[] = [];
        for (let j = 0; j < 60; j++) {
          pts.push(Math.sin(j * 0.15 + i) * 20 + Math.random() * 10);
        }
        dataLines.push({
          points: pts,
          offset: 0,
          speed: 0.003 + Math.random() * 0.004,
          y: h * 0.15 + i * h * 0.18,
          opacity: 0.04 + Math.random() * 0.03,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw data lines (financial chart curves)
      dataLines.forEach((line) => {
        line.offset += line.speed;
        ctx.beginPath();
        ctx.strokeStyle = `hsla(43, 65%, 55%, ${line.opacity})`;
        ctx.lineWidth = 0.8;
        const step = w / (line.points.length - 1);
        for (let i = 0; i < line.points.length; i++) {
          const x = i * step;
          const y = line.y + line.points[i] * Math.sin(line.offset + i * 0.05);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // Draw particles & connections
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(155, 40%, 50%, ${p.opacity})`;
        ctx.fill();
      });

      // Network lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(155, 40%, 40%, ${0.03 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default FinancialBackground;
