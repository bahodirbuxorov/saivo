import { motion } from 'motion/react';
import { useTranslation } from '../lib/translations';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowRight, Star, Users, Calendar, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WorkPageProps {
  onNavigate?: (page: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  const { t } = useTranslation();
  const projects = [
    {
      title: 'Nutva.uz',
      subtitle: t('work.project.nutva.subtitle'),
      description: t('work.project.nutva.description'),
      url: 'https://nutva.uz/',
      technologies: [t('work.project.nutva.tech1'), t('work.project.nutva.tech2'), t('work.project.nutva.tech3'), t('work.project.nutva.tech4')],
      category: t('work.category.ecommerce'),
      featured: true,
      metrics: { users: '10K+', conversion: '25%', performance: '98%' }
    },
    {
      title: 'Hamkor Lizing',
      subtitle: t('work.project.hamkor.subtitle'),
      description: t('work.project.hamkor.description'),
      url: 'https://hamkor-lizing.uz/',
      technologies: [t('work.project.hamkor.tech1'), t('work.project.hamkor.tech2'), t('work.project.hamkor.tech3')],
      category: t('work.category.fintech'),
      featured: true,
      metrics: { users: '5K+', conversion: '30%', performance: '99%' }
    },
    {
      title: 'ISHORA',
      subtitle: t('work.project.ishora.subtitle'),
      description: t('work.project.ishora.description'),
      url: 'https://ishora.uz',
      technologies: [t('work.project.ishora.tech1'), t('work.project.ishora.tech2'), t('work.project.ishora.tech3'), t('work.project.ishora.tech4')],
      category: t('work.category.hrtech'),
      featured: false,
      metrics: { users: '2K+', conversion: '40%', performance: '97%' }
    },
    {
      title: 'Goldmoon Group',
      subtitle: t('work.project.goldmoon.subtitle'),
      description: t('work.project.goldmoon.description'),
      url: 'https://goldmoon-group.com/',
      technologies: [t('work.project.goldmoon.tech1'), t('work.project.goldmoon.tech2'), t('work.project.goldmoon.tech3')],
      category: t('work.category.corporate'),
      featured: false,
      metrics: { users: '1K+', conversion: '20%', performance: '96%' }
    },
    {
      title: 'Almasjid.uz',
      subtitle: t('work.project.almasjid.subtitle'),
      description: t('work.project.almasjid.description'),
      url: 'https://www.almasjid.uz/',
      technologies: [t('work.project.almasjid.tech1'), t('work.project.almasjid.tech2'), t('work.project.almasjid.tech3'), t('work.project.almasjid.tech4')],
      category: t('work.category.socialimpact'),
      featured: true,
      metrics: { users: '50K+', conversion: '35%', performance: '95%' }
    },
    {
      title: 'LegacyEstate',
      subtitle: t('work.project.legacy.subtitle'),
      description: t('work.project.legacy.description'),
      url: 'https://legacyestate.uz/login',
      technologies: [t('work.project.legacy.tech1'), t('work.project.legacy.tech2'), t('work.project.legacy.tech3'), t('work.project.legacy.tech4')],
      category: t('work.category.realestate'),
      featured: false,
      metrics: { users: '3K+', conversion: '28%', performance: '98%' }
    },
    {
      title: 'Landing Nutva Complex',
      subtitle: t('work.project.nutvacomplex.subtitle'),
      description: t('work.project.nutvacomplex.description'),
      url: 'https://tabiiyyordam.nutva.uz/uz/imunitet',
      technologies: [t('work.project.nutvacomplex.tech1'), t('work.project.nutvacomplex.tech2'), t('work.project.nutvacomplex.tech3')],
      category: t('work.category.healthcare'),
      featured: false,
      metrics: { users: '8K+', conversion: '22%', performance: '99%' }
    },
    {
      title: 'EduExploreChina.com',
      subtitle: t('work.project.edu.subtitle'),
      description: t('work.project.edu.description'),
      url: 'https://eduexplorechina.com/',
      technologies: [t('work.project.edu.tech1'), t('work.project.edu.tech2'), t('work.project.edu.tech3'), t('work.project.edu.tech4')],
      category: t('work.category.education'),
      featured: false,
      metrics: { users: '15K+', conversion: '18%', performance: '94%' }
    },
    {
      title: 'Green Aral Sea',
      subtitle: t('work.project.aral.subtitle'),
      description: t('work.project.aral.description'),
      url: 'https://greenaralsea.org/',
      technologies: [t('work.project.aral.tech1'), t('work.project.aral.tech2'), t('work.project.aral.tech3'), t('work.project.aral.tech4')],
      category: t('work.category.environmental'),
      featured: true,
      metrics: { users: '25K+', conversion: '15%', performance: '93%' }
    }
  ];

  const categories = [
    t('common.all'),
    t('work.category.ecommerce'),
    t('work.category.fintech'),
    t('work.category.hrtech'),
    t('work.category.corporate'),
    t('work.category.socialimpact'),
    t('work.category.realestate'),
    t('work.category.healthcare'),
    t('work.category.education'),
    t('work.category.environmental')
  ];
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  const getCategoryColor = (category: string) => {
    const categoryColors: Record<string, string> = {
      ecommerce: 'from-blue-500 to-blue-600',
      fintech: 'from-green-500 to-green-600',
      hrtech: 'from-purple-500 to-purple-600',
      corporate: 'from-gray-500 to-gray-600',
      socialimpact: 'from-orange-500 to-orange-600',
      realestate: 'from-indigo-500 to-indigo-600',
      healthcare: 'from-red-500 to-red-600',
      education: 'from-yellow-500 to-yellow-600',
      environmental: 'from-emerald-500 to-emerald-600',
    };

    const defaultLabels: Record<string, string> = {
      ecommerce: 'E-Commerce',
      fintech: 'Fintech',
      hrtech: 'HR Tech',
      corporate: 'Corporate',
      socialimpact: 'Social Impact',
      realestate: 'Real Estate',
      healthcare: 'Healthcare',
      education: 'Education',
      environmental: 'Environmental',
    };

    for (const key of Object.keys(categoryColors)) {
      if (category === t(`work.category.${key}`) || category === defaultLabels[key]) {
        return categoryColors[key];
      }
    }
    return 'from-gray-500 to-gray-600';
  };

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
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
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200/50 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                <motion.span
                  className="flex items-center space-x-2"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{t('work.hero.badge')}</span>
                </motion.span>
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t('work.hero.title')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('work.hero.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('work.featured.title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('work.featured.featured')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('work.featured.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg group">
                  <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(project.category)} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                      <div className="flex justify-between items-start">
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                        <motion.div
                          className="flex space-x-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{t('work.featured.featured')}</span>
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <div className="flex space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{project.metrics.users}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <ArrowRight className="h-4 w-4" />
                            <span>{project.metrics.conversion}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="space-y-3">
                      <h4 className="text-blue-600 font-semibold text-lg">{project.subtitle}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            +{project.technologies.length - 3} {t('work.tech.more')}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <span className="flex items-center justify-center space-x-2">
                                <span>{t('work.viewProject')}</span>
                                <ExternalLink className="h-4 w-4" />
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => onNavigate?.('contact')}
                            className="bg-transparent border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                          >
                            {t('work.caseStudy')}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-4 py-2 text-sm font-medium"
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-0 shadow-lg group">
                  <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(project.category)} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <motion.h3 
                          className="font-bold text-xl mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {project.category}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                    />
                    
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                      >
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-900 fill-current" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <h4 className="text-blue-600 font-semibold text-lg group-hover:text-purple-600 transition-colors duration-300">
                        {project.subtitle}
                      </h4>
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 2 && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                            +{project.technologies.length - 2} {t('work.tech.more')}
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2 pt-1">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <span className="flex items-center justify-center space-x-1">
                                <span>{t('work.viewProject')}</span>
                                <ExternalLink className="h-3 w-3" />
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => onNavigate?.('contact')}
                            className="bg-transparent border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                          >
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('work.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              {t('work.cta.subtitle')}
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
                  <span>{t('work.cta.startProject')}</span>
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
                className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 px-8 py-4 backdrop-blur-sm"
              >
                {t('work.cta.scheduleCall')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}