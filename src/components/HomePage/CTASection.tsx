import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTranslation } from '../../lib/translations';

interface CTASectionProps {
  onNavigate?: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 px-6 py-3 text-lg mb-6">
            <motion.span
              className="flex items-center space-x-2"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="h-5 w-5" />
              <span>{t('home.cta.badge')}</span>
            </motion.span>
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => onNavigate?.('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4"
            >
              <span className="flex items-center space-x-2">
                <span>{t('home.cta.startProject')}</span>
                <Sparkles className="h-5 w-5" />
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => onNavigate?.('contact')}
              className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 px-8 py-4 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>{t('home.cta.scheduleCall')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}