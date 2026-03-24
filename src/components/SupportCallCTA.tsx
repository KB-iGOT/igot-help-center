import { motion } from "framer-motion";
import { Phone, Headphones, Clock, ArrowRight, TicketCheck, Send, Shield } from "lucide-react";

const SupportCallCTA = () => {
  const supportNumber = "+91 11 2430 3726";
  const telLink = "tel:+911124303726";
  const ticketLink = "https://igotkarmayogi.gov.in/support";

  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/5 to-primary/3" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Headphones className="w-3.5 h-3.5" />
            Need Help?
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">
            Still facing an issue? <span className="text-primary">We're here to help!</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Call our experts directly for instant resolution.
          </p>
        </motion.div>

        {/* Primary: Call CTA — big hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div
            className="rounded-2xl text-white p-8 sm:p-10 shadow-lg relative overflow-hidden"
            style={{ background: "var(--gradient-support)" }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/[0.03]" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-white/10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                    >
                      <Phone className="w-7 h-7 sm:w-9 sm:h-9" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-1">Call Us Directly</h3>
                <p className="text-white/75 text-sm mb-4">
                  Speak with our experts instantly — no wait, no tickets, just real-time help.
                </p>
                <div className="flex items-center gap-1.5 justify-center sm:justify-start text-xs text-white/60">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon–Fri, 9:30 AM – 6:00 PM IST</span>
                </div>
              </div>

              {/* CTA button */}
              <a href={telLink} className="flex-shrink-0 group/btn">
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white text-secondary shadow-md group-hover/btn:shadow-lg transition-all group-hover/btn:scale-[1.03] active:scale-[0.98]">
                  <Phone className="w-5 h-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-medium opacity-60 uppercase tracking-wider">Call Now</span>
                    <span className="text-lg font-bold tracking-wide font-display">{supportNumber}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Secondary: Raise ticket — compact row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="rounded-xl bg-card border border-border p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center">
                <TicketCheck className="w-5 h-5 text-secondary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">Having trouble reaching us by call?</p>
                <p className="text-xs text-muted-foreground">
                  Raise a support ticket and we'll respond within 24–48 hours.
                </p>
              </div>
            </div>

            <a href={ticketLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group/btn">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-all group-hover/btn:scale-[1.02] active:scale-[0.98]">
                <Send className="w-4 h-4" />
                Raise Ticket
                <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
              </div>
            </a>
          </div>
        </motion.div> */}

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-primary" />
            Dedicated Expert Team
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-primary" />
            Multi-Channel Support
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            Quick Resolution
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCallCTA;
