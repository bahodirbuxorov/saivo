import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../lib/translations';

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-border bg-background-2 px-6 py-20 text-center sm:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* mesh + glow backdrop */}
          <div className="pointer-events-none absolute inset-0 bg-mesh" />
          <motion.div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative mx-auto max-w-2xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-accent" />
              {t('home.cta.badge')}
            </span>

            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
              {t('home.cta.title')}
            </h2>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t('home.cta.subtitle')}
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate?.('contact')}
                  className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary"
                >
                  <span className="flex items-center gap-2.5">
                    {t('home.cta.startProject')}
                    <Sparkles className="h-5 w-5" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate?.('contact')}
                  className="group h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary"
                >
                  <span className="flex items-center gap-2.5">
                    {t('home.cta.scheduleCall')}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
