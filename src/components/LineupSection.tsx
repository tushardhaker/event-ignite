import { motion } from "framer-motion";
import artist1 from "@/assets/artist-1.jpg";
import artist2 from "@/assets/artist-2.jpg";
import artist3 from "@/assets/artist-3.jpg";

const HEADLINERS = [
  { name: "SYNTHEX", genre: "Electronic / Synthwave", img: artist1 },
  { name: "AURORA FLUX", genre: "Techno / House", img: artist2 },
  { name: "VOLTAGE", genre: "Hip-Hop / Trap", img: artist3 },
];

const MORE_ARTISTS = [
  "CIRCUIT BREAK", "ECHO DRIFT", "NOVA PULSE", "PRISM WAVE",
  "DARK MATTER", "ZERO GRAVITY", "PHASE SHIFT", "NEON GHOST",
  "BASS REACTOR", "PIXEL STORM", "VOID WALKER", "FREQUENCY",
];

const LineupSection = () => (
  <section id="lineup" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-neon-pink mb-2">The Artists</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">LINEUP</h2>
        <div className="neon-line w-32 mx-auto" />
      </motion.div>

      {/* Headliners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {HEADLINERS.map((artist, i) => (
          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl overflow-hidden glass"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs uppercase tracking-widest text-neon-cyan font-body">Headliner</span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-1">{artist.name}</h3>
              <p className="text-sm text-muted-foreground font-body">{artist.genre}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More artists */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="font-display text-xl tracking-wider text-muted-foreground mb-8">+ MORE ARTISTS</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {MORE_ARTISTS.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 rounded-full border border-border text-sm font-body text-muted-foreground hover:border-neon-purple hover:text-neon-purple transition-colors cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LineupSection;
