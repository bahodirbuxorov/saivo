import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader } from '../ui/card';
import { useTranslation } from '../../lib/translations';
import { getFeatures } from './constants';

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

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = getFeatures(t);

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border-emerald-200/50 hover:from-emerald-200 hover:to-blue-200 transition-all duration-300 px-4 py-2 text-base">
            {t('home.features.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            {t('home.features.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.features.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border ${feature.borderColor} shadow-lg group`}>
                <CardHeader className="p-8">
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    whileHover={{ rotate: 10 }}
                  >
                    <div className={`text-transparent bg-gradient-to-r ${feature.color} bg-clip-text`}>
                      {feature.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}