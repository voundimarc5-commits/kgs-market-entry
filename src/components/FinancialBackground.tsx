import { useEffect, useRef } from "react";

const FinancialBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // cover full scroll
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Candlestick-inspired data sets
    const generateChartData = (count: number, seed: number) => {
      const data: number[] = [];
      let val = 50 + seed * 10;
      for (let i = 0; i < count; i++) {
        val += (Math.sin(i * 0.1 + seed) * 3 + (Math.random() - 0.5) * 4);
        val = Math.max(10, Math.min(90, val));
        data.push(val);
      }
      return data;
    };

    const charts = [
      { data: generateChartData(200, 1), yOffset: 0.2, opacity: 0.07, color: "43, 60%, 58%" },
      { data: generateChartData(200, 2.5), yOffset: 0.45, opacity: 0.05, color: "43, 50%, 50%" },
      { data: generateChartData(200, 4), yOffset: 0.7, opacity: 0.06, color: "43, 55%, 55%" },
      { data: generateChartData(200, 0.5), yOffset: 0.35, opacity: 0.04, color: "0, 0%, 60%" },
      { data: generateChartData(200, 3), yOffset: 0.6, opacity: 0.04, color: "43, 45%, 48%" },
      { data: generateChartData(200, 5.5), yOffset: 0.85, opacity: 0.05, color: "43, 52%, 52%" },
    ];

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.12 + 0.04,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const drawChart = (chart: typeof charts[0], t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const baseY = h * chart.yOffset;
      const dataLen = chart.data.length;
      const shift = (t * 0.15) % dataLen;

      ctx.beginPath();
      for (let i = 0; i <= w; i += 3) {
        const dataIdx = ((i / w) * dataLen + shift) % dataLen;
        const idx = Math.floor(dataIdx);
        const frac = dataIdx - idx;
        const v1 = chart.data[idx % dataLen];
        const v2 = chart.data[(idx + 1) % dataLen];
        const val = v1 + (v2 - v1) * frac;

        // Add slow wave modulation
        const wave = Math.sin(i * 0.002 + t * 0.008) * 15;
        const y = baseY + (val - 50) * 1.5 + wave;

        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }

      // Line stroke
      ctx.strokeStyle = `hsla(${chart.color}, ${chart.opacity * 3})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Area fill below
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(0, baseY - 80, 0, baseY + 200);
      gradient.addColorStop(0, `hsla(${chart.color}, ${chart.opacity})`);
      gradient.addColorStop(0.6, `hsla(${chart.color}, ${chart.opacity * 0.2})`);
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawGrid = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Horizontal grid with varying opacity
      for (let y = 0; y < h; y += 50) {
        const opacity = y % 200 === 0 ? 0.04 : 0.015;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `hsla(43, 52%, 54%, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Vertical grid
      for (let x = 0; x < w; x += 80) {
        const opacity = x % 320 === 0 ? 0.035 : 0.012;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `hsla(43, 52%, 54%, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const drawParticles = (t: number) => {
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y + window.scrollY;

      particles.forEach((p) => {
        // Mouse interaction - subtle repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200 * 0.15;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulseOpacity = p.opacity * (0.7 + 0.3 * Math.sin(t * 0.02 + p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(43, 55%, 60%, ${pulseOpacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(43, 55%, 55%, ${pulseOpacity * 0.15})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(43, 50%, 54%, ${0.04 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scroll-aware positioning
      canvas.style.transform = `translateY(${-window.scrollY * 0.3}px)`;

      drawGrid();
      charts.forEach((chart) => drawChart(chart, time));
      drawParticles(time);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default FinancialBackground;
