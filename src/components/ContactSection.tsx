import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="relative py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-neon-cyan mb-2">Reach Out</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4">CONTACT</h2>
        <div className="neon-line w-32 mx-auto" />
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-muted text-neon-purple">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-display text-sm tracking-wider text-foreground mb-1">VENUE</h4>
              <p className="font-body text-sm text-muted-foreground">Neo City Arena<br />1200 Neon Boulevard<br />Metropolis, MC 90210</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-muted text-neon-cyan">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="font-display text-sm tracking-wider text-foreground mb-1">EMAIL</h4>
              <p className="font-body text-sm text-muted-foreground">info@neonwavefest.com<br />press@neonwavefest.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wider text-foreground mb-3">FOLLOW US</h4>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-xl glass text-muted-foreground hover:text-neon-pink hover:box-glow-pink transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple transition-colors"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-display text-sm tracking-wider box-glow-purple hover:scale-105 transition-transform"
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </div>

    {/* Footer */}
    <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="font-display text-sm gradient-text tracking-wider">NEONWAVE 2026</span>
        <p className="font-body text-xs text-muted-foreground">© 2026 NeonWave Festival. All rights reserved.</p>
      </div>
    </div>
  </section>
);

export default ContactSection;
