import { motion } from 'motion/react';
import { Card, CardContent } from '../ui/card';
import { useTranslation } from '../../lib/translations';
import { getStats } from './constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function StatsSection() {
  const { t } = useTranslation();
  const stats = getStats(t);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`text-center p-8 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${stat.bgGradient} border-0 shadow-lg overflow-hidden group`}>
                <CardContent className="p-0 space-y-6">
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <div className={stat.color}>
                      {stat.icon}
                    </div>
                  </motion.div>
                  <div className="space-y-2">
                    <motion.div 
                      className="text-4xl lg:text-5xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-700 font-medium text-lg">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}