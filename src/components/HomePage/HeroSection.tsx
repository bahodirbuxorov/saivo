import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useTranslation } from '../../lib/translations';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-10">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200/50 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 px-6 py-3 text-lg">
                  <motion.span
                    className="flex items-center space-x-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span>{t('home.hero.badge')}</span>
                  </motion.span>
                </Badge>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {t('home.hero.title1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {t('home.hero.title2')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {t('home.hero.title3')}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              {/* SEO Content - Hidden but crawlable */}
              <div className="sr-only">
                <h2>IT Xizmatlar O'zbekiston - Veb Sayt va Mobil Ilova Ishlab Chiqish</h2>
                <p>SAIVO - O'zbekistonda professional IT xizmatlar ko'rsatuvchi yetakchi kompaniya. Biz veb sayt ishlab chiqish, mobil ilova yaratish, CRM tizim, elektron savdo platformalari va AI bot larni tayyorlaymiz. Toshkent shahrida joylashgan IT kompaniyamiz barcha turdagi biznes ehtiyojlariga mos yechimlar taklif etadi.</p>
                <h3>Bizning Asosiy Xizmatlarimiz:</h3>
                <ul>
                  <li>Landing sahifa ishlab chiqish va dizayn</li>
                  <li>Korporativ veb sayt yaratish</li>
                  <li>Mobil ilova ishlab chiqish iOS va Android uchun</li>
                  <li>CRM va ERP tizimlar yaratish</li>
                  <li>Elektron savdo platformalari</li>
                  <li>AI chatbot va avtomatlashtirish</li>
                  <li>Dasturiy ta'minot ishlab chiqish</li>
                  <li>IT konsalting va texnik qo'llab-quvvatlash</li>
                </ul>
                <h3>O'zbekistonda IT Xizmatlar</h3>
                <p>Toshkent va boshqa viloyatlarda IT loyihalar uchun eng yaxshi xizmat. Professional jamoa, tez yetkazib berish, sifat kafolati. +998998019353 orqali bepul maslahat oling.</p>
                <h3>Viloyatlar bo'yicha Xizmat</h3>
                <p>Toshkent, Samarqand, Buxoro, Farg'ona, Namangan, Andijon, Qashqadaryo, Surxondaryo, Jizzax, Sirdaryo, Navoiy, Xorazm viloyatlarida IT xizmatlar. O'zbekiston bo'ylab veb sayt, mobil ilova va CRM tizim ishlab chiqish.</p>
                <h3>Biznes Turlari</h3>
                <p>Kichik biznes, startup, o'rta biznes, korporativ kompaniyalar uchun IT yechimlar. Savdo, xizmat ko'rsatish, ishlab chiqarish, ta'lim, sog'liqni saqlash sohalari uchun maxsus dasturlar.</p>
              </div>
            </div>
            
            <motion.div className="flex flex-col sm:flex-row gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => onNavigate?.('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg border-0"
                >
                  <span className="flex items-center space-x-3">
                    <span>{t('home.hero.getStarted')}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
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
                  onClick={() => onNavigate?.('work')}
                  className="bg-transparent border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 px-8 py-6 text-lg font-medium"
                >
                  {t('home.hero.ourWork')}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzU2MDMwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology team working office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}