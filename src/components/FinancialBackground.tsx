import { useEffect, useRef } from "react";

const FinancialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate multiple curve datasets (like market charts)
    const curves = [
      { speed: 0.0003, amplitude: 80, yOffset: 0.3, opacity: 0.06, wavelength: 0.003 },
      { speed: 0.0005, amplitude: 60, yOffset: 0.5, opacity: 0.04, wavelength: 0.004 },
      { speed: 0.0002, amplitude: 100, yOffset: 0.7, opacity: 0.05, wavelength: 0.002 },
      { speed: 0.0004, amplitude: 50, yOffset: 0.4, opacity: 0.03, wavelength: 0.005 },
      { speed: 0.00035, amplitude: 70, yOffset: 0.6, opacity: 0.04, wavelength: 0.0035 },
    ];

    // Floating particles (like data points)
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.15 + 0.05,
      });
    }

    const drawCurve = (curve: typeof curves[0], t: number) => {
      const { speed, amplitude, yOffset, opacity, wavelength } = curve;
      const w = canvas.width;
      const h = canvas.height;
      const baseY = h * yOffset;

      ctx.beginPath();
      ctx.moveTo(0, baseY);

      for (let x = 0; x <= w; x += 2) {
        // Combine multiple sine waves for organic market-like movement
        const y =
          baseY +
          Math.sin(x * wavelength + t * speed * 1000) * amplitude * 0.5 +
          Math.sin(x * wavelength * 2.3 + t * speed * 700) * amplitude * 0.3 +
          Math.cos(x * wavelength * 0.7 + t * speed * 500) * amplitude * 0.2;
        ctx.lineTo(x, y);
      }

      // Fill below curve with gradient
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, baseY - amplitude, 0, h);
      gradient.addColorStop(0, `hsla(43, 52%, 54%, ${opacity})`);
      gradient.addColorStop(0.5, `hsla(43, 52%, 54%, ${opacity * 0.3})`);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw the line itself
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      for (let x = 0; x <= w; x += 2) {
        const y =
          baseY +
          Math.sin(x * wavelength + t * speed * 1000) * amplitude * 0.5 +
          Math.sin(x * wavelength * 2.3 + t * speed * 700) * amplitude * 0.3 +
          Math.cos(x * wavelength * 0.7 + t * speed * 500) * amplitude * 0.2;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsla(43, 52%, 54%, ${opacity * 2.5})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(43, 52%, 60%, ${p.opacity})`;
        ctx.fill();
      });

      // Draw subtle connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(43, 52%, 54%, ${0.03 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Subtle grid lines
    const drawGrid = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.strokeStyle = "hsla(43, 52%, 54%, 0.02)";
      ctx.lineWidth = 0.5;

      // Horizontal
      for (let y = 0; y < h; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      // Vertical
      for (let x = 0; x < w; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      curves.forEach((curve) => drawCurve(curve, time));
      drawParticles();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
};

export default FinancialBackground;
