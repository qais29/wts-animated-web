import React, { useEffect, useRef } from 'react';

/**
 * NovaStarCursor
 * Milan Compain-inspired "Follow the Star" interactive cursor and stardust trail.
 * Designed specifically for WTS NOVA — features an electric sapphire 4-point star
 * that emits a sparkling stardust trail and expands into an interactive reticle
 * when hovering over clickable elements.
 */
export default function NovaStarCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse coordinates and state
    const mouse = {
      x: -100,
      y: -100,
      targetX: -100,
      targetY: -100,
      isHoveringInteractive: false,
      hasMoved: false,
    };

    const particles = [];
    const maxParticles = 35;

    // Track mouse
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.hasMoved = true;

      // Detect if hovering over clickable or interactive element
      const target = e.target;
      const isInteractive = target && (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('.cinema-card') ||
        target.closest('.parallax-card-hover')
      );
      mouse.isHoveringInteractive = !!isInteractive;

      // Emit 1-2 stardust particles per move
      if (particles.length < maxParticles) {
        particles.push({
          x: mouse.targetX + (Math.random() - 0.5) * 8,
          y: mouse.targetY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.3, // slight upward drift
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.9,
          color: Math.random() > 0.3 ? '#38BDF8' : '#93C5FD',
          decay: Math.random() * 0.025 + 0.018,
          rotation: Math.random() * Math.PI * 2,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Draw 4-point Nova Star
    const drawNovaStar = (x, y, radius, alpha, scale = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Outer soft glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius * 3.5);
      gradient.addColorStop(0, `rgba(56, 189, 248, ${alpha * 0.6})`);
      gradient.addColorStop(0.5, `rgba(37, 99, 235, ${alpha * 0.25})`);
      gradient.addColorStop(1, 'rgba(6, 13, 36, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Sharp 4-point Star Geometry
      ctx.beginPath();
      ctx.fillStyle = `rgba(224, 242, 254, ${alpha})`;
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(0, -radius * 1.8);
        ctx.lineTo(radius * 0.35, -radius * 0.35);
        ctx.rotate(Math.PI / 2);
      }
      ctx.closePath();
      ctx.fill();

      // Center bright core
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.45, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Main animation loop
    let currentStarScale = 1;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mouse.hasMoved) {
        // Smooth cursor interpolation (LERP)
        mouse.x += (mouse.targetX - mouse.x) * 0.22;
        mouse.y += (mouse.targetY - mouse.y) * 0.22;

        // Animate star scale on interactive hover
        const targetScale = mouse.isHoveringInteractive ? 1.6 : 1.0;
        currentStarScale += (targetScale - currentStarScale) * 0.15;

        // 1. Draw and update stardust particles
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= p.decay;

          if (p.alpha <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#38BDF8';

          // Small diamond or sparkle star
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.75, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // 2. Draw Interactive Focus Ring if hovering
        if (mouse.isHoveringInteractive) {
          ctx.save();
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 20 * currentStarScale, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // 3. Draw Lead Nova Star
        drawNovaStar(mouse.x, mouse.y, 5.5, 0.95, currentStarScale);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[998] hidden sm:block"
      style={{ willChange: 'transform' }}
    />
  );
}
