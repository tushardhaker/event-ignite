import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const DAYS = ["DAY 1 — FRI", "DAY 2 — SAT", "DAY 3 — SUN"];

const SCHEDULE: Record<string, { time: string; artist: string; stage: string; highlight?: boolean }[]> = {
  "DAY 1 — FRI": [
    { time: "18:00", artist: "GATES OPEN", stage: "All Stages" },
    { time: "19:00", artist: "PIXEL STORM", stage: "Neon Stage" },
    { time: "20:30", artist: "ECHO DRIFT", stage: "Cyber Arena" },
    { time: "22:00", artist: "CIRCUIT BREAK", stage: "Neon Stage", highlight: true },
    { time: "23:30", artist: "SYNTHEX", stage: "Main Stage", highlight: true },
  ],
  "DAY 2 — SAT": [
    { time: "17:00", artist: "DARK MATTER", stage: "Neon Stage" },
    { time: "18:30", artist: "VOID WALKER", stage: "Cyber Arena" },
    { time: "20:00", artist: "PHASE SHIFT", stage: "Neon Stage" },
    { time: "21:30", artist: "BASS REACTOR", stage: "Cyber Arena", highlight: true },
    { time: "23:00", artist: "AURORA FLUX", stage: "Main Stage", highlight: true },
  ],
  "DAY 3 — SUN": [
    { time: "17:00", artist: "NEON GHOST", stage: "Cyber Arena" },
    { time: "18:30", artist: "PRISM WAVE", stage: "Neon Stage" },
    { time: "20:00", artist: "NOVA PULSE", stage: "Cyber Arena", highlight: true },
    { time: "21:30", artist: "FREQUENCY", stage: "Neon Stage" },
    { time: "23:00", artist: "VOLTAGE", stage: "Main Stage", highlight: true },
  ],
};

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(DAYS[0]);

  return (
    <section id="schedule" className="relative py-24 grid-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-neon-cyan mb-2">3 Days of Music</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">SCHEDULE</h2>
          <div className="neon-line w-32 mx-auto" />
        </motion.div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 sm:px-6 py-3 rounded-full font-display text-xs sm:text-sm tracking-wider transition-all ${
                activeDay === day
                  ? "bg-primary text-primary-foreground box-glow-purple"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto space-y-3"
          >
            {SCHEDULE[activeDay].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl transition-colors ${
                  item.highlight
                    ? "glass border border-neon-purple/30 box-glow-purple"
                    : "glass hover:border-border/80"
                }`}
              >
                <div className="flex items-center gap-2 min-w-[80px]">
                  <Clock size={14} className="text-neon-cyan" />
                  <span className="font-display text-sm text-neon-cyan">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-display text-sm sm:text-base font-bold ${item.highlight ? "text-foreground" : "text-foreground/80"}`}>
                    {item.artist}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin size={12} />
                  <span className="text-xs font-body hidden sm:inline">{item.stage}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ScheduleSection;
