import { motion } from 'motion/react';
import { useTranslation } from '../../lib/translations';
import { getStats } from './constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

export function StatsSection() {
  const { t } = useTranslation();
  const stats = getStats(t);

  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 text-center"
            >
              {/* hover glow wash */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(120% 120% at 50% 0%, ${stat.accent}22, transparent 70%)` }}
              />
              <div
                className="relative mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${stat.accent}1f`, color: stat.accent }}
              >
                {stat.icon}
              </div>
              <motion.div
                className="relative font-display text-4xl font-bold text-foreground lg:text-5xl"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="relative mt-2 text-sm font-medium text-muted-foreground lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
