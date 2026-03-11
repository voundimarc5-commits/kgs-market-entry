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
  color: string;
}

interface GlowCircle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  phase: number;
  speed: number;
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
    let time = 0;

    const particles: Particle[] = [];
    const dataLines: DataLine[] = [];
    const glowCircles: GlowCircle[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight * 3;
    };

    const init = () => {
      resize();
      particles.length = 0;
      dataLines.length = 0;
      glowCircles.length = 0;

      // Floating particles
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.12,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.12 + 0.02,
        });
      }

      // Financial chart lines with varied colors
      const lineColors = [
        "hsla(43, 65%, 55%,",   // gold
        "hsla(155, 40%, 45%,",  // green
        "hsla(43, 55%, 70%,",   // light gold
        "hsla(155, 35%, 35%,",  // dark green
        "hsla(200, 30%, 50%,",  // blue accent
        "hsla(43, 65%, 55%,",   // gold
        "hsla(155, 40%, 40%,",  // green
      ];
      for (let i = 0; i < 7; i++) {
        const pts: number[] = [];
        for (let j = 0; j < 80; j++) {
          pts.push(
            Math.sin(j * 0.12 + i * 1.2) * 25 +
            Math.cos(j * 0.08 + i * 0.7) * 15 +
            Math.random() * 8
          );
        }
        dataLines.push({
          points: pts,
          offset: 0,
          speed: 0.002 + Math.random() * 0.003,
          y: h * 0.1 + i * h * 0.13,
          opacity: 0.03 + Math.random() * 0.025,
          color: lineColors[i],
        });
      }

      // Soft glowing circles
      for (let i = 0; i < 6; i++) {
        glowCircles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: 60 + Math.random() * 120,
          opacity: 0.015 + Math.random() * 0.015,
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.005,
        });
      }
    };

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, w, h);

      // Draw soft glowing circles
      glowCircles.forEach((gc) => {
        const pulse = Math.sin(time * gc.speed * 60 + gc.phase) * 0.5 + 0.5;
        const grad = ctx.createRadialGradient(gc.x, gc.y, 0, gc.x, gc.y, gc.radius);
        grad.addColorStop(0, `hsla(43, 65%, 55%, ${gc.opacity * pulse})`);
        grad.addColorStop(0.5, `hsla(155, 40%, 40%, ${gc.opacity * pulse * 0.3})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(gc.x - gc.radius, gc.y - gc.radius, gc.radius * 2, gc.radius * 2);
      });

      // Draw data lines (financial chart curves) with gradient fill
      dataLines.forEach((line) => {
        line.offset += line.speed;
        ctx.beginPath();
        ctx.strokeStyle = `${line.color}${line.opacity})`;
        ctx.lineWidth = 0.8;
        const step = w / (line.points.length - 1);

        for (let i = 0; i < line.points.length; i++) {
          const x = i * step;
          const wave = Math.sin(line.offset + i * 0.04) * Math.cos(line.offset * 0.7 + i * 0.02);
          const y = line.y + line.points[i] * wave;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Subtle fill under the curve
        ctx.lineTo(w, line.y + 40);
        ctx.lineTo(0, line.y + 40);
        ctx.closePath();
        ctx.fillStyle = `${line.color}${line.opacity * 0.15})`;
        ctx.fill();
      });

      // Draw particles & connections
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Pulsing particle opacity
        const pulse = Math.sin(time * 2 + p.x * 0.01) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(155, 40%, 50%, ${p.opacity * pulse})`;
        ctx.fill();

        // Small glow around particles
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(43, 65%, 55%, ${p.opacity * 0.15 * pulse})`;
          ctx.fill();
        }
      });

      // Network lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = 0.04 * (1 - dist / 180);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(155, 40%, 40%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Horizontal scan line effect
      const scanY = (time * 30) % h;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.strokeStyle = "hsla(43, 65%, 55%, 0.02)";
      ctx.lineWidth = 1;
      ctx.stroke();

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
      style={{ opacity: 0.7 }}
    />
  );
};

export default FinancialBackground;
