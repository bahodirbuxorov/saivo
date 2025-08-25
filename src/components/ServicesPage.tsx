import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Bot, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  Lightbulb,
  Rocket,
  TrendingUp,
  Clock,
  DollarSign,
  Settings,
  Layers,
  Cpu,
  Cloud,
  Layout
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from '../lib/translations';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);


  const services = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: t('services.landingWebsite'),
      description: t('services.landingDesc'),
      features: [t('services.features.responsiveDesign'), t('services.features.seoOptimization'), t('services.features.contactForms'), t('services.features.fastLoading'), t('services.features.mobileFirst')],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Laravel'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200/50',
      timeline: '3-7 days'
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: t('services.customSoftware'),
      description: t('services.customDesc'),
      features: [t('services.features.fullStackDev'), t('services.features.apiIntegrations'), t('services.features.databaseDesign'), t('services.features.performanceOp'), t('services.features.codeReview')],
      technologies: ['React', 'Node.js', 'Python', '.NET', 'PostgreSQL'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200/50',
      timeline: '4-12 weeks'
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: t('services.mobileAppDev'),
      description: t('services.mobileDesc'),
      features: [t('services.features.iosAndroid'), t('services.features.crossPlatform'), t('services.features.appStoreOp'), t('services.features.pushNotifications'), t('services.features.offlineFunc')],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200/50',
      timeline: '6-16 weeks'
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: t('services.ecommerceSolutions'),
      description: t('services.ecommerceFullDesc'),
      features: [t('services.features.multiVendor'), t('services.features.paymentIntegration'), t('services.features.inventoryMgmt'), t('services.features.seoOptimization'), t('services.features.analyticsDashboard')],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200/50',
      timeline: '8-20 weeks'
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: t('services.aiAutomationFull'),
      description: t('services.aiDesc'),
      features: [t('services.features.chatbots'), t('services.features.processAutomation'), t('services.features.mlModels'), t('services.features.dataAnalytics'), t('services.features.nlp')],
      technologies: ['TensorFlow', 'OpenAI', 'Python', 'NLP', 'Azure AI'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200/50',
      timeline: '10-24 weeks'
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: t('services.crmErpSystems'),
      description: t('services.crmFullDesc'),
      features: [t('services.features.crm'), t('services.features.erp'), t('services.features.workflowAutomation'), t('services.features.reporting'), t('services.features.integrationCapabilities')],
      technologies: ['Bitrix24', 'Salesforce', 'Custom CRM', 'Power BI', 'Zapier'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      borderColor: 'border-red-200/50',
      timeline: '12-28 weeks'
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: t('services.securityCompliance'),
      description: t('services.securityDesc'),
      features: [t('services.features.dataEncryption'), t('services.features.accessControl'), t('services.features.complianceAuditing'), t('services.features.securityMonitoring'), t('services.features.penTesting')],
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'GDPR', 'ISO 27001'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      borderColor: 'border-indigo-200/50',
      timeline: '6-14 weeks'
    }
  ];



  const process = [
    {
      step: '01',
      title: t('services.process.discovery'),
      description: t('services.process.discoveryDesc'),
      icon: <Target className="h-8 w-8" />,
      duration: t('services.process.duration.weeks1-2')
    },
    {
      step: '02',
      title: t('services.process.design'),
      description: t('services.process.designDesc'),
      icon: <Lightbulb className="h-8 w-8" />,
      duration: t('services.process.duration.weeks2-4')
    },
    {
      step: '03',
      title: t('services.process.development'),
      description: t('services.process.developmentDesc'),
      icon: <Settings className="h-8 w-8" />,
      duration: t('services.process.duration.weeks4-16')
    },
    {
      step: '04',
      title: t('services.process.deployment'),
      description: t('services.process.deploymentDesc'),
      icon: <Rocket className="h-8 w-8" />,
      duration: t('services.process.duration.ongoing')
    }
  ];

  const technologies = [
    { name: 'React & Next.js', category: t('services.tech.frontend'), icon: '⚛️' },
    { name: 'Vue.js & Nuxt.js', category: t('services.tech.frontend'), icon: '💚' },
    { name: 'HTML5 & CSS3', category: t('services.tech.frontend'), icon: '🌐' },
    { name: 'Node.js & Express', category: t('services.tech.backend'), icon: '🟢' },
    { name: 'Python & Django', category: t('services.tech.backend'), icon: '🐍' },
    { name: '.NET & C#', category: t('services.tech.backend'), icon: '🟦' },
    { name: 'PHP & Laravel', category: t('services.tech.backend'), icon: '🐘' },
    { name: 'Flutter & React Native', category: t('services.tech.mobile'), icon: '📱' },
    { name: 'iOS & Android Native', category: t('services.tech.mobile'), icon: '🍎' },
    { name: 'AWS & Azure', category: t('services.tech.cloud'), icon: '☁️' },
    { name: 'Digital Ocean', category: t('services.tech.cloud'), icon: '🌊' },
    { name: 'Google Cloud Platform', category: t('services.tech.cloud'), icon: '☁️' },
    { name: 'PostgreSQL & MongoDB', category: t('services.tech.database'), icon: '🗄️' },
    { name: 'MySQL & Redis', category: t('services.tech.database'), icon: '🗃️' },
    { name: 'Docker & Kubernetes', category: t('services.tech.devops'), icon: '🐳' },
    { name: 'AI & Machine Learning', category: t('services.tech.aiml'), icon: '🤖' },
    { name: 'TensorFlow & PyTorch', category: t('services.tech.aiml'), icon: '🧠' }
  ];

  const benefits = [
    { icon: <Award className="h-6 w-6" />, title: t('services.benefits.expertTeam'), description: t('services.benefits.expertDesc') },
    { icon: <Clock className="h-6 w-6" />, title: t('services.benefits.fastDelivery'), description: t('services.benefits.fastDesc') },
    { icon: <Shield className="h-6 w-6" />, title: t('services.benefits.support247'), description: t('services.benefits.supportDesc') },
    { icon: <TrendingUp className="h-6 w-6" />, title: t('services.benefits.scalableSolutions'), description: t('services.benefits.scalableDesc') },
    { icon: <CheckCircle className="h-6 w-6" />, title: t('services.benefits.qualityGuarantee'), description: t('services.benefits.qualityDesc') }
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
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 lg:py-36 overflow-hidden">
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
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200/50 hover:from-blue-200 hover:to-purple-200 transition-all duration-300 px-4 py-2 text-base">
                    <motion.span
                      className="flex items-center space-x-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Rocket className="h-4 w-4" />
                      <span>{t('services.hero.badge')}</span>
                    </motion.span>
                  </Badge>
                </motion.div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {t('services.hero.title1')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {t('services.hero.title2')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {t('services.hero.title3')}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  {t('services.hero.subtitle')}
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => onNavigate?.('contact')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg border-0"
                >
                  <motion.span className="flex items-center space-x-3">
                    <span>{t('services.hero.getStarted')}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  </motion.span>
                </Button>
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
                  src="https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1OTc1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital innovation technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              {t('services.portfolio.badge')}
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              {t('services.portfolio.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('services.portfolio.subtitle')}
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setActiveService(index)}
              >
                <Card className={`h-full overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border ${service.borderColor} shadow-lg group cursor-pointer`}>
                  <CardHeader className="p-8">
                    <motion.div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                      whileHover={{ rotate: 10 }}
                    >
                      <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                        {service.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </CardHeader>
                
                  <CardContent className="p-8 pt-0 space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">{t('services.keyFeatures')}</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">{t('services.technologies')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center items-center pt-4 border-t border-gray-100">
                      <div className="space-y-1 text-center">
                        <p className="text-sm text-gray-500">{t('services.timeline')}</p>
                        <p className="font-medium text-gray-700">{service.timeline}</p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        onClick={() => onNavigate?.('contact')}
                        className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-medium py-3 border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>{t('services.learnMore')}</span>
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Process Timeline */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 border-orange-200/50 hover:from-orange-200 hover:to-red-200 transition-all duration-300 px-4 py-2 text-base">
              {t('services.process.badge')}
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              {t('services.process.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16 space-y-8 lg:space-y-0`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 max-w-md">
                    <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm border-0 hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-0 space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                            {step.icon}
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2">{step.duration}</Badge>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Step Number */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-2xl flex items-center justify-center shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 max-w-md lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200/50 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 px-4 py-2 text-base">
              Technology Stack
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Cutting-Edge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with the latest technologies to deliver robust, scalable, and future-ready solutions.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12 bg-white/80 backdrop-blur-sm border border-gray-200/50 p-2 rounded-2xl">
              <TabsTrigger value="all" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="frontend" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Frontend</TabsTrigger>
              <TabsTrigger value="backend" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Backend</TabsTrigger>
              <TabsTrigger value="mobile" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Mobile</TabsTrigger>
              <TabsTrigger value="cloud" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Cloud</TabsTrigger>
              <TabsTrigger value="database" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white">Database</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">{tech.category}</Badge>
                </motion.div>
              ))}
            </TabsContent>

            {['frontend', 'backend', 'mobile', 'cloud', 'database', 'devops', 'ai/ml'].map(category => (
              <TabsContent key={category} value={category} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category.toLowerCase().includes(category.replace('/', ''))).map((tech, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">{tech.category}</Badge>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 border-pink-200/50 hover:from-pink-200 hover:to-rose-200 transition-all duration-300 px-4 py-2 text-base">
              Why Choose SAIVO
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Advantages</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Partner with SAIVO and experience the advantages of working with a dedicated technology team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-0 space-y-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center group-hover:from-pink-100 group-hover:to-rose-200 transition-all duration-300 shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <div className="text-pink-600 group-hover:text-rose-600 transition-colors">
                        {benefit.icon}
                      </div>
                    </motion.div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            }}
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
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Let's discuss your project requirements and create a solution that drives results.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center"
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
                className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-6 text-lg font-medium border-0"
              >
                <span className="flex items-center space-x-3">
                  <span>Request a Quote</span>
                  <DollarSign className="h-6 w-6" />
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
                className="text-white border-2 border-white/40 hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 px-10 py-6 text-lg font-medium backdrop-blur-sm"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}