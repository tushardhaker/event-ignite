import { motion } from "framer-motion";
import { Zap, Headphones, Palette, Utensils } from "lucide-react";
import venueImg from "@/assets/venue.jpg";

const FEATURES = [
  { icon: Zap, title: "3 STAGES", desc: "Main Stage, Neon Stage, and the underground Cyber Arena — each with its own sonic identity.", color: "text-neon-purple" },
  { icon: Headphones, title: "IMMERSIVE SOUND", desc: "360° spatial audio powered by cutting-edge sound systems. Feel every beat in your bones.", color: "text-neon-cyan" },
  { icon: Palette, title: "ART INSTALLATIONS", desc: "Walk through reactive neon sculptures, holographic tunnels, and projection-mapped landscapes.", color: "text-neon-pink" },
  { icon: Utensils, title: "FOOD & DRINKS", desc: "Curated food village with craft cocktails, local street food vendors, and late-night bites.", color: "text-neon-yellow" },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-neon-yellow mb-2">The Venue</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">EXPERIENCE</h2>
        <div className="neon-line w-32 mx-auto" />
      </motion.div>

      {/* Venue image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden mb-16 max-w-5xl mx-auto"
      >
        <img src={venueImg} alt="Neo City Arena venue" className="w-full h-64 sm:h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-glow-cyan">NEO CITY ARENA</h3>
          <p className="font-body text-muted-foreground">Downtown Metropolis • Capacity 50,000</p>
        </div>
      </motion.div>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feat, i) => (
          <motion.div
            key={feat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-6 text-center group"
          >
            <div className={`inline-flex p-3 rounded-xl bg-muted mb-4 ${feat.color} group-hover:animate-pulse-glow`}>
              <feat.icon size={28} />
            </div>
            <h4 className="font-display text-sm font-bold tracking-wider text-foreground mb-2">{feat.title}</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
