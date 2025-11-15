import React, { useRef, useEffect } from 'react';

// Lightweight particle network background using canvas.
// Respects prefers-reduced-motion: if set, a static faint dot field is drawn instead.
export default function ParticleBackground({ color = 'rgba(150,220,255,0.75)', bgLine = 'rgba(150,220,255,0.12)' }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.clientWidth * devicePixelRatio;
    let height = canvas.height = canvas.clientHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);

    let animationId;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const config = {
      count: 36, // modest particle count for low cost
      maxRadius: 2.2,
      maxSpeed: 0.25,
      linkDistance: 110,
    };

    function createParticles() {
      const particles = [];
      for (let i = 0; i < config.count; i++) {
        particles.push({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          vx: (Math.random() - 0.5) * config.maxSpeed,
          vy: (Math.random() - 0.5) * config.maxSpeed,
          r: Math.random() * config.maxRadius + 0.6,
        });
      }
      return particles;
    }

    let particles = createParticles();

    function resize() {
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      width = canvas.width = cw * devicePixelRatio;
      height = canvas.height = ch * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      // re-seed particles to fit new size
      particles = createParticles();
      drawFrame();
    }

    function drawFrame() {
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      ctx.clearRect(0, 0, cw, ch);

      if (prefersReduced) {
        // draw faint static dots
        ctx.fillStyle = 'rgba(200,220,240,0.06)';
        particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.6, p.r * 0.8), 0, Math.PI * 2);
          ctx.fill();
        });
        return;
      }

      // move and draw
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;
        if (p.y < -10) p.y = ch + 10;
        if (p.y > ch + 10) p.y = -10;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // draw links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < config.linkDistance) {
            const alpha = 1 - dist / config.linkDistance;
            ctx.strokeStyle = `rgba(150,220,255,${alpha * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      drawFrame();
      animationId = requestAnimationFrame(loop);
    }

    // initial draw
    drawFrame();
    if (!prefersReduced) {
      animationId = requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);

    // cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [ref]);

  return (
    <div className="hero-particles" aria-hidden="true">
      <canvas ref={ref} width="800" height="400" />
    </div>
  );
}
