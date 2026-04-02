import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-festival.jpg";

const EVENT_DATE = new Date("2026-08-15T20:00:00");

const calcTimeLeft = () => {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg glass flex items-center justify-center box-glow-cyan">
      <span className="font-display text-2xl sm:text-3xl font-bold text-neon-cyan">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground font-body">
      {label}
    </span>
  </div>
);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Festival stage" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-px bg-neon-cyan/20 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm sm:text-base uppercase tracking-[0.3em] text-neon-cyan mb-4"
        >
          August 15–17, 2026 • Neo City Arena
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black gradient-text leading-none mb-6"
        >
          NEONWAVE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-display text-lg sm:text-xl tracking-[0.2em] text-foreground/80 mb-2"
        >
          MUSIC FESTIVAL 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-body text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Three days of electrifying performances, immersive art installations, and unforgettable experiences under the neon sky.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-4 sm:gap-6 mb-12"
        >
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Mins" />
          <CountdownUnit value={timeLeft.seconds} label="Secs" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#tickets"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm tracking-wider box-glow-purple hover:scale-105 transition-transform inline-block"
          >
            GRAB YOUR PASS
          </a>
          <a
            href="#lineup"
            className="px-8 py-4 rounded-full border border-neon-cyan/50 text-neon-cyan font-display text-sm tracking-wider hover:bg-neon-cyan/10 transition-colors inline-block"
          >
            VIEW LINEUP
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
