import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/work') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number; color?: string }[] = [];

    // Base rgb colors for light mode orbs (sky blue, soft blue, white)
    const lightColors = ['186, 230, 253', '125, 211, 252', '240, 249, 255', '255, 255, 255']; 

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      if (theme === 'dark') {
        const count = Math.floor((canvas.width * canvas.height) / 3000);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.05,
            opacity: Math.random(),
          });
        }
      } else {
        // Light mode: fewer, much larger blurred particles
        const count = Math.floor((canvas.width * canvas.height) / 15000); 
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 100 + 40, // 40px to 140px radius
            speed: Math.random() * 0.3 + 0.1,
            opacity: Math.random() * 0.6 + 0.2, // increased opacity for soft glow
            color: lightColors[Math.floor(Math.random() * lightColors.length)]
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        if (theme === 'dark') {
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = p.opacity;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Blurred light particles
          ctx.globalAlpha = p.opacity;
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
          gradient.addColorStop(0, `rgba(${p.color}, 0.8)`);
          gradient.addColorStop(1, `rgba(${p.color}, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        p.y -= p.speed;
        if (p.y < -p.size) {
          p.y = canvas.height + p.size;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, location.pathname]); 

  // Do not render Starfield/background on the About and Work pages
  if (location.pathname === '/about' || location.pathname === '/work') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {theme === 'light' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfdfd] to-[#e0efff] opacity-100 z-0"></div>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "radial-gradient(rgba(0,0,0,0.015) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          ></div>
        </>
      )}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-10 ${theme === 'dark' ? 'opacity-50' : 'opacity-100'}`}
        style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'normal' }}
      />
    </div>
  );
}
