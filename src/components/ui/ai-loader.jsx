import * as React from "react";

export const AILoader = ({ size = 160, text = "YÜKLENİYOR" }) => {
  const letters = text.split("");

  return (
    <div className="relative flex items-center justify-center font-sans select-none my-6" style={{ width: size, height: size }}>
      
      {/* Animated Text Letters inside Circle */}
      <div className="flex items-center justify-center space-x-[2px] z-10">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block text-white font-extrabold text-xs sm:text-sm opacity-40 animate-loaderLetter tracking-widest uppercase"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Rotating Glowing Neon Circle with ANV Teal & Orange Shadows */}
      <div className="absolute inset-0 rounded-full animate-loaderCircle"></div>

      <style>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #007A87 inset,
              0 12px 18px 0 #FF6500 inset,
              0 36px 36px 0 #005dff inset,
              0 0 4px 1.5px rgba(0, 122, 135, 0.4),
              0 0 8px 2.5px rgba(255, 101, 0, 0.35);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #FF6500 inset,
              0 12px 6px 0 #00a3b4 inset,
              0 24px 36px 0 #007A87 inset,
              0 0 4px 1.5px rgba(255, 101, 0, 0.4),
              0 0 8px 2.5px rgba(0, 122, 135, 0.35);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #007A87 inset,
              0 12px 18px 0 #FF6500 inset,
              0 36px 36px 0 #005dff inset,
              0 0 4px 1.5px rgba(0, 122, 135, 0.4),
              0 0 8px 2.5px rgba(255, 101, 0, 0.35);
          }
        }

        @keyframes loaderLetter {
          0%, 100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.18);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
        }

        .animate-loaderLetter {
          animation: loaderLetter 3s infinite;
        }
      `}</style>
    </div>
  );
};

export const Component = AILoader;
