import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation, Language } from '../lib/translations';
import logoImage from 'figma:asset/63505825ddf0afbbe8b8fb3acd0c6cd461452f53.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), page: 'home' },
    { name: t('nav.about'), page: 'about' },
    { name: t('nav.work'), page: 'work' },
    { name: t('nav.services'), page: 'services' },
    { name: t('nav.news'), page: 'news' },
    { name: t('nav.contact'), page: 'contact' },
  ];

  const languages = [
    { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handlePageChange('home')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={logoImage} 
              alt="SAIVO Logo" 
              className="h-10 w-auto rounded-2xl"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => handlePageChange(item.page)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-blue-600 text-white shadow-lg'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Language Selector */}
            <div className="relative ml-4">
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-white/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage?.flag}</span>
                <span className="hidden sm:inline">{currentLanguage?.name}</span>
              </motion.button>

              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center space-x-3 ${
                          language === lang.code
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        whileHover={{ backgroundColor: '#f3f4f6' }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-sm ${
                  isScrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage?.flag}</span>
              </motion.button>

              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200/50 py-2 z-50"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 flex items-center space-x-2 ${
                          language === lang.code
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-xs">{lang.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-4 py-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.page}
                    onClick={() => handlePageChange(item.page)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      currentPage === item.page
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}