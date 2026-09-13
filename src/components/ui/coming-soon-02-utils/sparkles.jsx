import * as React from "react";
import { cn } from "@/lib/utils";

export const Sparkles = ({
  density = 4,
  size = 1.4,
  color = "var(--primary)",
  className,
}) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = Math.floor((width * height) / (10000 / density));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * size + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.01 + 0.005,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.alpha += p.speed * p.dir;
        if (p.alpha >= 1) {
          p.alpha = 1;
          p.dir = -1;
        } else if (p.alpha <= 0.1) {
          p.alpha = 0.1;
          p.dir = 1;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const resolvedColor = color.startsWith("var")
          ? getComputedStyle(document.documentElement).getPropertyValue(
              color.slice(4, -1)
            ).trim() || "#ff6b00"
          : color;
        ctx.fillStyle = resolvedColor || "#ff6b00";
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, size, color]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 w-full h-full", className)}
    />
  );
};
