import { motion } from 'motion/react';
import { useTranslation } from '../../lib/translations';
import { getFeatures } from './constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = getFeatures(t);

  return (
    <section className="relative overflow-hidden bg-background-2 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">
            {t('home.features.badge')}
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            {t('home.features.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t('home.features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl glass p-7"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(130% 100% at 50% 0%, ${feature.accent}1f, transparent 65%)` }}
              />
              <div
                className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${feature.accent}1f`, color: feature.accent }}
              >
                {feature.icon}
              </div>
              <h3 className="relative mb-3 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
