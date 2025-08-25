import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { useTranslation } from '../../lib/translations';
import { getServices } from './constants';

interface ServicesSectionProps {
  onNavigate?: (page: string) => void;
}

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

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/50 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 px-4 py-2 text-base">
            {t('home.services.badge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
            {t('home.services.title')}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 shadow-lg">
                    {t('home.services.popular')}
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg ${service.popular ? 'ring-2 ring-blue-500 ring-offset-4' : ''}`}>
                <CardHeader className="p-8 text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => onNavigate?.('contact')}
                      className={`w-full ${service.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : 'bg-white border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700'
                      } font-medium py-3 text-lg transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      {t('home.services.getStarted')}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}