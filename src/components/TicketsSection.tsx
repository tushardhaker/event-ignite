import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const TIERS = [
  {
    name: "GENERAL",
    price: "$149",
    color: "border-neon-cyan/40",
    glow: "",
    features: ["3-Day General Access", "All 3 Stages", "Food Village Access", "Festival App"],
    popular: false,
  },
  {
    name: "VIP",
    price: "$349",
    color: "border-neon-purple/60",
    glow: "box-glow-purple",
    features: ["3-Day VIP Access", "Front-Row Zones", "VIP Lounge & Bar", "Exclusive Merch Pack", "Meet & Greet Lottery"],
    popular: true,
  },
  {
    name: "PLATINUM",
    price: "$799",
    color: "border-neon-pink/40",
    glow: "",
    features: ["3-Day Platinum Access", "Backstage Pass", "Private Viewing Deck", "Complimentary Drinks", "Artist Meet & Greet", "Luxury Shuttle"],
    popular: false,
  },
];

const TicketsSection = () => (
  <section id="tickets" className="relative py-24 grid-bg">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-neon-purple mb-2">Get Your Pass</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">TICKETS</h2>
        <div className="neon-line w-32 mx-auto mb-4" />
        <p className="font-body text-muted-foreground max-w-md mx-auto">Early bird prices end June 1. Don't miss out on the experience of a lifetime.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className={`relative glass rounded-2xl p-8 border ${tier.color} ${tier.glow} flex flex-col`}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display tracking-wider">
                <Star size={12} /> MOST POPULAR
              </div>
            )}

            <h3 className="font-display text-lg tracking-wider text-foreground mb-2">{tier.name}</h3>
            <div className="mb-6">
              <span className="font-display text-4xl font-black gradient-text">{tier.price}</span>
              <span className="text-muted-foreground font-body text-sm ml-1">/ person</span>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                  <Check size={16} className="text-neon-cyan shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-full font-display text-sm tracking-wider transition-transform hover:scale-105 ${
                tier.popular
                  ? "bg-primary text-primary-foreground box-glow-purple"
                  : "border border-border text-foreground hover:border-neon-cyan hover:text-neon-cyan"
              }`}
            >
              SELECT PASS
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TicketsSection;
