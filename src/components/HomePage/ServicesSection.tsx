import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../lib/translations';
import { getServices } from './constants';

interface ServicesSectionProps {
  onNavigate?: (page: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section className="relative bg-background py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">
            {t('home.services.badge')}
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t('home.services.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid items-stretch gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 ${
                service.popular
                  ? 'border-gradient glow-primary bg-card/70'
                  : 'glass'
              }`}
            >
              {service.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {t('home.services.popular')}
                </span>
              )}

              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 mb-8 space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onNavigate?.('contact')}
                className={`group/btn mt-auto h-12 w-full rounded-xl text-base font-semibold transition-all ${
                  service.popular
                    ? 'bg-gradient-to-r from-primary to-[#6d28d9] text-white glow-primary'
                    : 'border border-border bg-card/40 text-foreground hover:border-primary/40 hover:text-primary'
                }`}
                variant={service.popular ? 'default' : 'outline'}
              >
                <span className="flex items-center justify-center gap-2">
                  {t('home.services.getStarted')}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
