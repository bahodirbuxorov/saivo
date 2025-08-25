import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TranslationProvider, useTranslation, Language } from './lib/translations';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { WorkPage } from './components/WorkPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { NewsPage } from './components/NewsPage';
import { NewsDetailPage } from './components/NewsDetailPage';

// SEO Interface
interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

// SEO Hook
const useSEO = (seoData: SEOData, page: string, language: Language) => {
  useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Add sitemap and robots meta information
    const addSEOComments = () => {
      // Remove existing comments
      const existingComments = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]');
      existingComments.forEach(comment => comment.remove());

      // Add robots meta
      const robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      document.head.appendChild(robotsMeta);

      const googlebotMeta = document.createElement('meta');
      googlebotMeta.setAttribute('name', 'googlebot');
      googlebotMeta.setAttribute('content', 'index, follow');
      document.head.appendChild(googlebotMeta);

      // Add additional SEO meta tags
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        const viewport = document.createElement('meta');
        viewport.setAttribute('name', 'viewport');
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        document.head.appendChild(viewport);
      }
    };

    addSEOComments();

    // Update or create meta tags
    const updateOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateOrCreateMeta('description', seoData.description);
    updateOrCreateMeta('keywords', seoData.keywords);
    updateOrCreateMeta('robots', 'index, follow');
    updateOrCreateMeta('language', language);
    updateOrCreateMeta('author', 'SAIVO');
    updateOrCreateMeta('publisher', 'SAIVO');
    updateOrCreateMeta('copyright', 'SAIVO');

    // Open Graph tags
    updateOrCreateMeta('og:title', seoData.title, true);
    updateOrCreateMeta('og:description', seoData.description, true);
    updateOrCreateMeta('og:type', 'website', true);
    updateOrCreateMeta('og:url', window.location.href, true);
    updateOrCreateMeta('og:site_name', 'SAIVO', true);
    updateOrCreateMeta('og:locale', getLocaleFromLanguage(language), true);
    updateOrCreateMeta('og:image', seoData.ogImage || 'https://saivo.uz/og-image.jpg', true);
    updateOrCreateMeta('og:image:width', '1200', true);
    updateOrCreateMeta('og:image:height', '630', true);

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', seoData.title);
    updateOrCreateMeta('twitter:description', seoData.description);
    updateOrCreateMeta('twitter:image', seoData.ogImage || 'https://saivo.uz/og-image.jpg');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = seoData.canonical || window.location.href;

    // Structured Data
    if (seoData.structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(seoData.structuredData);
      document.head.appendChild(script);
    }

    // Breadcrumb structured data for non-home pages
    if (page !== 'home') {
      const existingBreadcrumb = document.querySelector('script[data-breadcrumbs]');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "SAIVO - IT Xizmatlar",
            "item": "https://saivo.uz"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": seoData.title.split(' - ')[0],
            "item": `https://saivo.uz/${page}`
          }
        ]
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('data-breadcrumbs', 'true');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

  }, [seoData, language, page]);
};

const getLocaleFromLanguage = (language: Language): string => {
  switch (language) {
    case 'uz': return 'uz_UZ';
    case 'ru': return 'ru_RU';
    case 'en': return 'en_US';
    default: return 'uz_UZ';
  }
};

// SEO data for different pages
const getSEOData = (page: string, language: Language): SEOData => {
  const seoData: Record<string, Record<Language, SEOData>> = {
    home: {
      uz: {
        title: 'SAIVO - O\'zbekistonda №1 IT Xizmatlar | Veb Sayt, Mobil Ilova, CRM Tizim Ishlab Chiqish',
        description: 'O\'zbekistonda eng yaxshi IT xizmatlar kompaniyasi. Veb sayt, mobil ilova, CRM tizim, elektron savdo, AI bot va dasturiy ta\'minot ishlab chiqish. Professional IT yechimlari va texnik qo\'llab-quvvatlash.',
        keywords: 'IT xizmatlar O\'zbekiston, veb sayt ishlab chiqish Toshkent, mobil ilova yaratish, CRM tizim, elektron savdo sayt, AI bot, dasturiy ta\'minot ishlab chiqish, landing page, professional IT yechimlar, texnik qo\'llab quvvatlash',
        ogImage: 'https://saivo.uz/images/saivo-og-home.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SAIVO",
          "alternateName": "SAIVO IT Company",
          "url": "https://saivo.uz",
          "logo": "https://saivo.uz/images/saivo-logo.png",
          "description": "Professional IT services company in Uzbekistan specializing in web development, mobile applications, CRM systems, and AI solutions.",
          "foundingDate": "2024-12-01",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tashkent",
            "addressCountry": "UZ"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+998-99-801-93-53",
            "contactType": "Customer Service",
            "availableLanguage": ["uz", "ru", "en"]
          },
          "sameAs": [
            "https://t.me/saivo_uz",
            "https://instagram.com/saivo.uz",
            "https://linkedin.com/company/saivo-uz"
          ],
          "serviceArea": {
            "@type": "Country",
            "name": "Uzbekistan"
          },
          "areaServed": "Uzbekistan",
          "knowsAbout": [
            "Web Development",
            "Mobile App Development", 
            "CRM Systems",
            "E-commerce Development",
            "AI and Automation",
            "Software Development"
          ]
        }
      },
      ru: {
        title: 'SAIVO - IT Услуги №1 в Узбекистане | Разработка Сайтов, Мобильных Приложений, CRM Систем',
        description: 'Лучшая IT компания в Узбекистане. Разработка веб-сайтов, мобильных приложений, CRM систем, электронной коммерции, AI ботов и программного обеспечения. Профессиональные IT решения.',
        keywords: 'IT услуги Узбекистан, разработка сайтов Ташкент, мобильные приложения, CRM система, интернет магазин, AI бот, разработка ПО, лендинг страница, профессиональные IT решения',
        ogImage: 'https://saivo.uz/images/saivo-og-home.jpg'
      },
      en: {
        title: 'SAIVO - #1 IT Services in Uzbekistan | Web Development, Mobile Apps, CRM Systems',
        description: 'Leading IT company in Uzbekistan. Web development, mobile app development, CRM systems, e-commerce, AI bots and software development. Professional IT solutions and technical support.',
        keywords: 'IT services Uzbekistan, web development Tashkent, mobile app development, CRM system, e-commerce website, AI bot, software development, landing page, professional IT solutions',
        ogImage: 'https://saivo.uz/images/saivo-og-home.jpg'
      }
    },
    services: {
      uz: {
        title: 'IT Xizmatlar - SAIVO | Veb Sayt, Mobil Ilova, CRM va AI Yechimlar Ishlab Chiqish',
        description: 'SAIVO kompaniyasining professional IT xizmatlar portfoliosi. Landing sahifa, mobil ilovalar, CRM/ERP tizimlari, elektron savdo, AI avtomatlashtirish va xavfsizlik yechimlari.',
        keywords: 'IT xizmatlar, veb sayt ishlab chiqish, mobil ilova yaratish, CRM tizim, ERP tizim, elektron savdo platformasi, AI bot, avtomatlashtirish, xavfsizlik yechimlari, dasturiy ta\'minot',
        ogImage: 'https://saivo.uz/images/saivo-services-og.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "SAIVO IT Services",
          "description": "Professional IT services offered by SAIVO in Uzbekistan",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Landing Website Development",
              "description": "Professional single-page websites designed to convert visitors into customers",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan",
              "serviceType": "Web Development",
              "url": "https://saivo.uz/services"
            },
            {
              "@type": "Service", 
              "name": "Custom Software Development",
              "description": "Tailored software solutions built with modern technologies",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan",
              "serviceType": "Software Development",
              "url": "https://saivo.uz/services"
            },
            {
              "@type": "Service",
              "name": "Mobile App Development", 
              "description": "Native and cross-platform mobile applications for iOS and Android",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan",
              "serviceType": "Mobile Development",
              "url": "https://saivo.uz/services"
            },
            {
              "@type": "Service",
              "name": "CRM & ERP Systems",
              "description": "Comprehensive business management systems for enterprise automation",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan", 
              "serviceType": "Business Software",
              "url": "https://saivo.uz/services"
            },
            {
              "@type": "Service",
              "name": "E-commerce Solutions",
              "description": "Scalable online stores with payment gateway integration",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan",
              "serviceType": "E-commerce Development",
              "url": "https://saivo.uz/services"
            },
            {
              "@type": "Service",
              "name": "AI and Automation",
              "description": "AI chatbots and business process automation solutions",
              "provider": {
                "@type": "Organization",
                "name": "SAIVO"
              },
              "areaServed": "Uzbekistan",
              "serviceType": "AI Development",
              "url": "https://saivo.uz/services"
            }
          ]
        }
      },
      ru: {
        title: 'IT Услуги - SAIVO | Разработка Сайтов, Мобильных Приложений, CRM и AI Решений',
        description: 'Портфолио профессиональных IT услуг SAIVO. Лендинг страницы, мобильные приложения, CRM/ERP системы, электронная коммерция, AI автоматизация и решения безопасности.',
        keywords: 'IT услуги, разработка сайтов, мобильные приложения, CRM система, ERP система, платформа электронной коммерции, AI бот, автоматизация, решения безопасности',
        ogImage: 'https://saivo.uz/images/saivo-services-og.jpg'
      },
      en: {
        title: 'IT Services - SAIVO | Web Development, Mobile Apps, CRM and AI Solutions',
        description: 'SAIVO\'s professional IT services portfolio. Landing pages, mobile applications, CRM/ERP systems, e-commerce, AI automation and security solutions.',
        keywords: 'IT services, web development, mobile applications, CRM system, ERP system, e-commerce platform, AI bot, automation, security solutions, software development',
        ogImage: 'https://saivo.uz/images/saivo-services-og.jpg'
      }
    },
    about: {
      uz: {
        title: 'Biz Haqimizda - SAIVO | O\'zbekistonda Yetakchi IT Kompaniya va Jamoa',
        description: 'SAIVO - O\'zbekistonda 70M+ so\'m aylanma bilan tez o\'sib kelayotgan IT kompaniya. Bizning tajribali jamoa va muvaffaqiyat tarixi haqida bilib oling.',
        keywords: 'SAIVO haqida, IT kompaniya O\'zbekiston, professional jamoa, Bahodir Buxorov, Salimbay Elimuratov, Shohruh Botirov, IT jamoa, muvaffaqiyat tarixi',
        ogImage: 'https://saivo.uz/images/saivo-team-og.jpg'
      },
      ru: {
        title: 'О Нас - SAIVO | Ведущая IT Компания и Команда в Узбекистане',
        description: 'SAIVO - быстрорастущая IT компания в Узбекистане с оборотом 70М+ сомов. Узнайте о нашей опытной команде и истории успеха.',
        keywords: 'о SAIVO, IT компания Узбекистан, профессиональная команда, история успеха, опытные разработчики',
        ogImage: 'https://saivo.uz/images/saivo-team-og.jpg'
      },
      en: {
        title: 'About Us - SAIVO | Leading IT Company and Team in Uzbekistan',
        description: 'SAIVO - fast-growing IT company in Uzbekistan with 70M+ som revenue. Learn about our experienced team and success story.',
        keywords: 'about SAIVO, IT company Uzbekistan, professional team, success story, experienced developers, technology experts',
        ogImage: 'https://saivo.uz/images/saivo-team-og.jpg'
      }
    },
    work: {
      uz: {
        title: 'Bizning Ishlarimiz - SAIVO Portfolio | Muvaffaqiyatli IT Loyihalar va Keys Tadqiqotlar',
        description: 'SAIVO kompaniyasining muvaffaqiyatli IT loyihalar portfoliosi. Veb saytlar, mobil ilovalar, CRM tizimlari va boshqa innovatsion yechimlar bo\'yicha keys tadqiqotlar.',
        keywords: 'SAIVO portfolio, IT loyihalar, muvaffaqiyatli loyihalar, veb sayt portfolio, mobil ilova portfolio, CRM loyihalar, keys tadqiqoti, innovatsion yechimlar',
        ogImage: 'https://saivo.uz/images/saivo-portfolio-og.jpg'
      },
      ru: {
        title: 'Наши Работы - SAIVO Портфолио | Успешные IT Проекты и Кейсы',
        description: 'Портфолио успешных IT проектов SAIVO. Веб-сайты, мобильные приложения, CRM системы и другие инновационные решения с подробными кейсами.',
        keywords: 'SAIVO портфолио, IT проекты, успешные проекты, портфолио сайтов, портфолио приложений, CRM проекты, кей��ы, инновационные решения',
        ogImage: 'https://saivo.uz/images/saivo-portfolio-og.jpg'
      },
      en: {
        title: 'Our Work - SAIVO Portfolio | Successful IT Projects and Case Studies',
        description: 'SAIVO\'s portfolio of successful IT projects. Websites, mobile applications, CRM systems and other innovative solutions with detailed case studies.',
        keywords: 'SAIVO portfolio, IT projects, successful projects, website portfolio, app portfolio, CRM projects, case studies, innovative solutions',
        ogImage: 'https://saivo.uz/images/saivo-portfolio-og.jpg'
      }
    },
    contact: {
      uz: {
        title: 'Aloqa - SAIVO | IT Loyiha Buyurtma Berish va Maslahat Olish',
        description: 'SAIVO bilan bog\'laning va IT loyihangizni boshlang. Bepul maslahat, professional jamoa va 24 soatda javob kafolati. Veb sayt, mobil ilova yoki CRM tizim buyurtma bering.',
        keywords: 'SAIVO aloqa, IT loyiha buyurtma, veb sayt buyurtma, mobil ilova buyurtma, CRM buyurtma, bepul maslahat, IT konsultatsiya, +998998019353',
        ogImage: 'https://saivo.uz/images/saivo-contact-og.jpg'
      },
      ru: {
        title: 'Контакты - SAIVO | Заказать IT Проект и Получить Консультацию',
        description: 'Свяжитесь с SAIVO и начните ваш IT проект. Бесплатна�� консультация, профессиональная команда и гарантия ответа в течение 24 часов.',
        keywords: 'SAIVO контакты, заказать IT проект, заказать сайт, заказать приложение, заказать CRM, бесплатная консультация, IT консультация',
        ogImage: 'https://saivo.uz/images/saivo-contact-og.jpg'
      },
      en: {
        title: 'Contact - SAIVO | Order IT Project and Get Consultation',
        description: 'Contact SAIVO and start your IT project. Free consultation, professional team and 24-hour response guarantee.',
        keywords: 'SAIVO contact, order IT project, order website, order app, order CRM, free consultation, IT consultation, professional team',
        ogImage: 'https://saivo.uz/images/saivo-contact-og.jpg'
      }
    },
    news: {
      uz: {
        title: 'Yangiliklar - SAIVO | IT Tendentsiyalar, Tahlillar va Kompaniya Yangiliklari',
        description: 'SAIVO yangiliklar sahifasi. IT sohasi tendentsiyalari, texnologik tahlillar, kompaniya yangiliklari va professional maqolalar.',
        keywords: 'SAIVO yangiliklar, IT yangiliklar, texnologiya yangiliklari, IT tendentsiyalar, dasturlash yangiliklari, mobil ilova yangiliklari',
        ogImage: 'https://saivo.uz/images/saivo-news-og.jpg'
      },
      ru: {
        title: 'Новости - SAIVO | IT Тренды, Аналитика и Новости Компании',
        description: 'Страница новостей SAIVO. Тренды IT индустрии, технологическая аналитика, новости компании и профессиональные статьи.',
        keywords: 'SAIVO новости, IT новости, новости технологий, IT тренды, новости программирования, новости мобильных приложений',
        ogImage: 'https://saivo.uz/images/saivo-news-og.jpg'
      },
      en: {
        title: 'News - SAIVO | IT Trends, Analytics and Company News',
        description: 'SAIVO news page. IT industry trends, technology analytics, company news and professional articles.',
        keywords: 'SAIVO news, IT news, technology news, IT trends, programming news, mobile app news, tech analytics',
        ogImage: 'https://saivo.uz/images/saivo-news-og.jpg'
      }
    }
  };

  return seoData[page]?.[language] || seoData.home[language];
};

function AppContent() {
  const { language } = useTranslation();
  const [currentPage, setCurrentPage] = useState('home');
  const [articleId, setArticleId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  // Apply SEO for current page
  const currentSEOData = getSEOData(currentPage, language);
  useSEO(currentSEOData, currentPage, language);

  const handlePageChange = (page: string, id?: string) => {
    if (page !== currentPage || id !== articleId) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentPage(page);
        setArticleId(id);
        setIsLoading(false);
      }, 150);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'about':
        return <AboutPage onNavigate={handlePageChange} />;
      case 'work':
        return <WorkPage onNavigate={handlePageChange} />;
      case 'services':
        return <ServicesPage onNavigate={handlePageChange} />;
      case 'news':
        return <NewsPage onNavigate={handlePageChange} />;
      case 'news-detail':
        return <NewsDetailPage onNavigate={handlePageChange} articleId={articleId} />;
      case 'contact':
        return <ContactPage onNavigate={handlePageChange} />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  // Ensure new pages open from the top
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use auto to avoid interfering with page transition animations
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [currentPage, articleId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative"
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}