import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, Target, Users, Zap, CheckCircle2, Calendar, Trophy, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { useTranslation } from '../lib/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bahodirImage from 'figma:asset/729a97639bef517c9194f9e6aeeb4feb72f6b334.png';
import salimbayImage from 'figma:asset/c8d4a85e68bc992ca3502c199a2cd19a9d3ca311.png';
import shohruhImage from 'figma:asset/fbfd857e988a05ddda6234eea371b444145b28f0.png';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t('about.values.resultsTitle'),
      description: t('about.values.resultsDesc'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200/50'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.values.partnershipTitle'),
      description: t('about.values.partnershipDesc'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200/50'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.values.qualityTitle'),
      description: t('about.values.qualityDesc'),
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200/50'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('about.values.innovationTitle'),
      description: t('about.values.innovationDesc'),
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200/50'
    }
  ];

  const timeline = [
    {
      date: '2024-11',
      title: t('about.timeline.nov2024'),
      description: t('about.timeline.nov2024Desc'),
      icon: <Trophy className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      date: '2024-12',
      title: t('about.timeline.dec2024'),
      description: t('about.timeline.dec2024Desc'),
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: 'bg-emerald-500'
    },
    {
      date: '2025-05',
      title: t('about.timeline.may2025'),
      description: t('about.timeline.may2025Desc'),
      icon: <Sparkles className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      date: '2025-08',
      title: t('about.timeline.aug2025'),
      description: t('about.timeline.aug2025Desc'),
      icon: <Target className="h-6 w-6" />,
      color: 'bg-orange-500'
    },
    {
      date: t('about.timeline.present'),
      title: t('about.timeline.present'),
      description: t('about.timeline.presentDesc'),
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    }
  ];

  const team = [
    {
      name: t('about.team.bahodir.name'),
      role: t('about.team.bahodir.role'),
      description: t('about.team.bahodir.desc'),
      image: bahodirImage,
      gradient: 'from-blue-500 to-purple-600',
      accentColor: 'blue'
    },
    {
      name: t('about.team.salimbay.name'),
      role: t('about.team.salimbay.role'),
      description: t('about.team.salimbay.desc'),
      image: salimbayImage,
      gradient: 'from-purple-500 to-pink-600',
      accentColor: 'purple'
    },
    {
      name: t('about.team.shohruh.name'),
      role: t('about.team.shohruh.role'),
      description: t('about.team.shohruh.desc'),
      image: shohruhImage,
      gradient: 'from-emerald-500 to-blue-600',
      accentColor: 'emerald'
    }
  ];

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
                      <Calendar className="h-5 w-5" />
                      <span>{t('about.hero.badge')}</span>
                    </motion.span>
                  </Badge>
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {t('about.hero.title1')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {t('about.hero.title2')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {t('about.hero.title3')}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  {t('about.hero.subtitle')}
                </p>
              </div>
              
              <motion.div className="flex flex-col sm:flex-row gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    onClick={() => onNavigate?.('work')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg border-0"
                  >
                    <span className="flex items-center space-x-3">
                      <span>{t('about.hero.discoverJourney')}</span>
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
                    onClick={() => {
                      const teamSection = document.getElementById('team-section');
                      teamSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 px-8 py-6 text-lg font-medium"
                  >
                    {t('about.hero.meetTeam')}
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTYwMzA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border ${value.borderColor} shadow-lg group`}>
                  <CardHeader className="p-8">
                    <motion.div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${value.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      whileHover={{ rotate: 10 }}
                    >
                      <div className={`text-transparent bg-gradient-to-r ${value.color} bg-clip-text`}>
                        {value.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              {t('about.timeline.badge')}
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              {t('about.timeline.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about.timeline.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-20"></div>
            
            {/* Timeline line - Mobile */}
            <div className="lg:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-20"></div>
            
            <motion.div 
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} relative`}
                >
                  {/* Timeline dot - Desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Timeline dot - Mobile */}
                  <div className="lg:hidden absolute left-4 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="scale-75">
                        {item.icon}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0">
                        <CardContent className="p-0 space-y-4">
                          <div className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                            {item.date}
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team-section" className="py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200/50 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 px-4 py-2 text-base">
              {t('about.team.badge')}
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              {t('about.team.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('about.team.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
                  {/* Image Section with Enhanced Overlay */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/5] relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-60 transition-all duration-500`}></div>
                      
                      {/* Role Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className={`bg-${member.accentColor}-100 text-${member.accentColor}-700 border-${member.accentColor}-200/50 px-3 py-1 text-sm font-medium backdrop-blur-sm bg-white/90`}>
                          {member.role.split(' ')[0]}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className={`text-${member.accentColor}-600 font-semibold text-lg`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Description */}
                    <motion.div
                      className="text-center"
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </motion.div>

                    {/* Decorative Element */}
                    <div className="flex justify-center">
                      <motion.div
                        className={`w-12 h-1 bg-gradient-to-r ${member.gradient} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: 48 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
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
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
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
                  <span>{t('about.cta.joinTeam')}</span>
                  <Users className="h-5 w-5" />
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
                  <span>{t('about.cta.startProject')}</span>
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
    </div>
  );
}