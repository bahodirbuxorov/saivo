import { motion } from 'motion/react';
import { MessageCircle, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '../lib/translations';
import logoImage from 'figma:asset/63505825ddf0afbbe8b8fb3acd0c6cd461452f53.png';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'Telegram',
      url: 'https://t.me/SAIVO_uz',
      icon: <MessageCircle className="h-5 w-5" />,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/saivo-uz',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saivo.uz/',
      icon: <Instagram className="h-5 w-5" />,
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    }
  ];

  return (
    <footer className="relative bg-slate-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => onPageChange('home')}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={logoImage} 
                    alt="SAIVO Logo" 
                    className="h-12 w-auto rounded-2xl"
                  />
                </motion.div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {[
                { label: t('footer.customDevelopment'), page: 'services' },
                { label: t('footer.mobileApps'), page: 'services' },
                { label: t('footer.ecommerce'), page: 'services' },
                { label: t('footer.aiAutomation'), page: 'services' }
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <button 
                    onClick={() => onPageChange(service.page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group text-lg"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-blue-500 rounded-full mr-4 group-hover:bg-blue-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white">{t('footer.company')}</h4>
            <ul className="space-y-4">
              {[
                { label: t('footer.aboutUs'), page: 'about' },
                { label: t('footer.ourWork'), page: 'work' },
                { label: t('nav.services'), page: 'services' },
                { label: t('footer.news'), page: 'news' },
                { label: t('footer.contact'), page: 'contact' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <button 
                    onClick={() => onPageChange(item.page)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group text-lg"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-blue-500 rounded-full mr-4 group-hover:bg-blue-400 transition-colors"
                      whileHover={{ scale: 1.5 }}
                    />
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white">{t('footer.contactInfo')}</h4>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400">@</span>
                </div>
                <a href="mailto:info@saivo.uz" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">
                  info@saivo.uz
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400">📞</span>
                </div>
                <a href="tel:+998998019353" className="text-gray-400 hover:text-blue-400 transition-colors text-lg">
                  +998 99 801 93 53
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400">📍</span>
                </div>
                <span className="text-gray-400 text-lg">Tashkent, Uzbekistan</span>
              </motion.div>
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h5 className="text-white font-semibold mb-2">{t('footer.readyToStart')}</h5>
              <p className="text-gray-400 text-sm mb-4">{t('footer.getInTouch')}</p>
              <motion.button
                onClick={() => onPageChange('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('footer.contactUs')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-800 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-lg">
              &copy; 2024 SAIVO. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-8 text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
              >
                {t('footer.privacyPolicy')}
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
              >
                {t('footer.termsOfService')}
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-white transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
              >
                {t('footer.cookies')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </footer>
  );
}