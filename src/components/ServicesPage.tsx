import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Code, Smartphone, Globe, Bot, Database, Shield,
  ArrowRight, CheckCircle, Award, Target, Lightbulb, Rocket,
  TrendingUp, Clock, DollarSign, Settings, Layout
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from '../lib/translations';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useTranslation();
  const [, setActiveService] = useState(0);

  const services = [
    {
      icon: <Layout className="h-7 w-7" />,
      title: t('services.landingWebsite'),
      description: t('services.landingDesc'),
      features: [t('services.features.responsiveDesign'), t('services.features.seoOptimization'), t('services.features.contactForms'), t('services.features.fastLoading'), t('services.features.mobileFirst')],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Laravel'],
      accent: '#22d3ee',
      timeline: '3-7 days'
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: t('services.customSoftware'),
      description: t('services.customDesc'),
      features: [t('services.features.fullStackDev'), t('services.features.apiIntegrations'), t('services.features.databaseDesign'), t('services.features.performanceOp'), t('services.features.codeReview')],
      technologies: ['React', 'Node.js', 'Python', '.NET', 'PostgreSQL'],
      accent: '#8b5cf6',
      timeline: '4-12 weeks'
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: t('services.mobileAppDev'),
      description: t('services.mobileDesc'),
      features: [t('services.features.iosAndroid'), t('services.features.crossPlatform'), t('services.features.appStoreOp'), t('services.features.pushNotifications'), t('services.features.offlineFunc')],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase'],
      accent: '#a78bfa',
      timeline: '6-16 weeks'
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: t('services.ecommerceSolutions'),
      description: t('services.ecommerceFullDesc'),
      features: [t('services.features.multiVendor'), t('services.features.paymentIntegration'), t('services.features.inventoryMgmt'), t('services.features.seoOptimization'), t('services.features.analyticsDashboard')],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      accent: '#34d399',
      timeline: '8-20 weeks'
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: t('services.aiAutomationFull'),
      description: t('services.aiDesc'),
      features: [t('services.features.chatbots'), t('services.features.processAutomation'), t('services.features.mlModels'), t('services.features.dataAnalytics'), t('services.features.nlp')],
      technologies: ['TensorFlow', 'OpenAI', 'Python', 'NLP', 'Azure AI'],
      accent: '#fbbf24',
      timeline: '10-24 weeks'
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: t('services.crmErpSystems'),
      description: t('services.crmFullDesc'),
      features: [t('services.features.crm'), t('services.features.erp'), t('services.features.workflowAutomation'), t('services.features.reporting'), t('services.features.integrationCapabilities')],
      technologies: ['Bitrix24', 'Salesforce', 'Custom CRM', 'Power BI', 'Zapier'],
      accent: '#f472b6',
      timeline: '12-28 weeks'
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: t('services.securityCompliance'),
      description: t('services.securityDesc'),
      features: [t('services.features.dataEncryption'), t('services.features.accessControl'), t('services.features.complianceAuditing'), t('services.features.securityMonitoring'), t('services.features.penTesting')],
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'GDPR', 'ISO 27001'],
      accent: '#818cf8',
      timeline: '6-14 weeks'
    }
  ];

  const process = [
    { step: '01', title: t('services.process.discovery'), description: t('services.process.discoveryDesc'), icon: <Target className="h-7 w-7" />, duration: t('services.process.duration.weeks1-2') },
    { step: '02', title: t('services.process.design'), description: t('services.process.designDesc'), icon: <Lightbulb className="h-7 w-7" />, duration: t('services.process.duration.weeks2-4') },
    { step: '03', title: t('services.process.development'), description: t('services.process.developmentDesc'), icon: <Settings className="h-7 w-7" />, duration: t('services.process.duration.weeks4-16') },
    { step: '04', title: t('services.process.deployment'), description: t('services.process.deploymentDesc'), icon: <Rocket className="h-7 w-7" />, duration: t('services.process.duration.ongoing') }
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
    { icon: <Award className="h-6 w-6" />, title: t('services.benefits.expertTeam'), description: t('services.benefits.expertDesc'), accent: '#8b5cf6' },
    { icon: <Clock className="h-6 w-6" />, title: t('services.benefits.fastDelivery'), description: t('services.benefits.fastDesc'), accent: '#22d3ee' },
    { icon: <Shield className="h-6 w-6" />, title: t('services.benefits.support247'), description: t('services.benefits.supportDesc'), accent: '#fbbf24' },
    { icon: <TrendingUp className="h-6 w-6" />, title: t('services.benefits.scalableSolutions'), description: t('services.benefits.scalableDesc'), accent: '#34d399' },
    { icon: <CheckCircle className="h-6 w-6" />, title: t('services.benefits.qualityGuarantee'), description: t('services.benefits.qualityDesc'), accent: '#f472b6' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };

  const sectionHeading = (badge: string, title: React.ReactNode, subtitle: string) => (
    <motion.div
      className="mx-auto mb-16 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">{badge}</span>
      <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <motion.div
          className="pointer-events-none absolute -top-10 left-[8%] h-72 w-72 rounded-full bg-primary/25 blur-[100px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-[6%] h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/90">
                <Rocket className="h-4 w-4 text-accent" />
                {t('services.hero.badge')}
              </span>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-foreground">{t('services.hero.title1')}</span>
                <span className="block text-gradient">{t('services.hero.title2')}</span>
                <span className="block text-foreground">{t('services.hero.title3')}</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">{t('services.hero.subtitle')}</p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate?.('contact')}
                  className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary"
                >
                  <span className="flex items-center gap-2.5">
                    {t('services.hero.getStarted')}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <div className="border-gradient glow-soft relative overflow-hidden rounded-[1.6rem] p-1.5">
                <div className="relative aspect-square overflow-hidden rounded-[1.3rem]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1OTc1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Digital innovation technology"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background-2 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeading(t('services.portfolio.badge'), t('services.portfolio.title'), t('services.portfolio.subtitle'))}

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setActiveService(index)}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass p-8"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(130% 90% at 50% 0%, ${service.accent}1f, transparent 60%)` }}
                />
                <div
                  className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.accent}1f`, color: service.accent }}
                >
                  {service.icon}
                </div>
                <h3 className="relative mb-3 font-display text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="relative mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <div className="relative space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">{t('services.keyFeatures')}</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" style={{ color: service.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-auto space-y-4 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, ti) => (
                      <span key={ti} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 text-center">
                    <p className="text-xs text-muted-foreground">{t('services.timeline')}</p>
                    <p className="font-medium text-foreground">{service.timeline}</p>
                  </div>
                  <Button
                    onClick={() => onNavigate?.('contact')}
                    className="group/btn h-11 w-full rounded-xl border border-border bg-card/40 font-semibold text-foreground hover:border-primary/40 hover:text-primary"
                    variant="outline"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t('services.learnMore')}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeading(t('services.process.badge'), t('services.process.title'), t('services.process.subtitle'))}

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary opacity-30 lg:block" />
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full max-w-md flex-1">
                    <div className="rounded-2xl glass p-8">
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[#6d28d9] text-white">{step.icon}</div>
                        <div>
                          <span className="mb-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{step.duration}</span>
                          <h3 className="font-display text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <motion.div
                      className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-[#6d28d9] font-display text-2xl font-bold text-white glow-primary"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  <div className="hidden max-w-md flex-1 lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-background-2 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeading('Technology Stack', <>Cutting-Edge <span className="text-gradient">Technologies</span></>, 'We work with the latest technologies to deliver robust, scalable, and future-ready solutions.')}

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-12 grid w-full grid-cols-3 gap-1 rounded-2xl glass p-2 sm:grid-cols-6">
              {['all', 'frontend', 'backend', 'mobile', 'cloud', 'database'].map((v) => (
                <TabsTrigger
                  key={v}
                  value={v}
                  className="rounded-xl capitalize data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-[#6d28d9] data-[state=active]:text-white"
                >
                  {v}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer rounded-2xl glass p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">{tech.icon}</div>
                  <h3 className="mb-2 font-semibold text-foreground">{tech.name}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{tech.category}</span>
                </motion.div>
              ))}
            </TabsContent>

            {['frontend', 'backend', 'mobile', 'cloud', 'database', 'devops', 'ai/ml'].map(category => (
              <TabsContent key={category} value={category} className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {technologies.filter(tech => tech.category.toLowerCase().includes(category.replace('/', ''))).map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer rounded-2xl glass p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">{tech.icon}</div>
                    <h3 className="mb-2 font-semibold text-foreground">{tech.name}</h3>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{tech.category}</span>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {sectionHeading('Why Choose SAIVO', <>Our <span className="text-gradient">Advantages</span></>, 'Partner with SAIVO and experience the advantages of working with a dedicated technology team.')}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl glass p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="mb-6 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${benefit.accent}1f`, color: benefit.accent }}
                >
                  {benefit.icon}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-border bg-background-2 px-6 py-20 text-center sm:px-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="pointer-events-none absolute inset-0 bg-mesh" />
            <motion.div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-[110px]"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative mx-auto max-w-2xl space-y-8">
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">Ready to Transform Your Business?</h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">Let's discuss your project requirements and create a solution that drives results.</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate?.('contact')}
                    className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary"
                  >
                    <span className="flex items-center gap-2.5">Request a Quote<DollarSign className="h-5 w-5" /></span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate?.('contact')}
                    className="h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary"
                  >
                    Schedule Consultation
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
