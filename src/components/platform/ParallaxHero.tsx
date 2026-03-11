import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxHeroProps {
  image?: string;
  children: ReactNode;
}

const ParallaxHero = ({ image, children }: ParallaxHeroProps) => {
  const [offset, setOffset] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) {
        setOffset(window.scrollY * 0.4);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative h-72 md:h-96 overflow-hidden">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-[130%] object-cover will-change-transform transition-transform duration-75 ease-out"
            style={{ transform: `translateY(-${offset}px) scale(1.1)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-card" />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;
