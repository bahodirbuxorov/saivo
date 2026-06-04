import { useTranslation } from '../lib/translations';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import {
  Phone, Clock, MessageCircle, Linkedin, Instagram,
  Star, CheckCircle, ArrowRight, Users, Zap, Shield, Send
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <MessageCircle className="h-7 w-7" />,
      title: 'Telegram',
      value: '@SAIVO_uz',
      action: 'https://t.me/SAIVO_uz',
      external: true,
      accent: '#8b5cf6',
      primary: true
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: t('contact.info.callUs'),
      value: '+998 99 801 93 53',
      action: 'tel:+998998019353',
      external: false,
      accent: '#34d399',
      primary: false
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: t('contact.info.workingHours'),
      value: t('contact.info.workingTime'),
      action: null,
      external: false,
      accent: '#fbbf24',
      primary: false
    }
  ];

  const socialLinks = [
    { icon: <MessageCircle className="h-6 w-6" />, name: 'Telegram', url: 'https://t.me/SAIVO_uz' },
    { icon: <Linkedin className="h-6 w-6" />, name: 'LinkedIn', url: 'https://linkedin.com/company/saivo-uz' },
    { icon: <Instagram className="h-6 w-6" />, name: 'Instagram', url: 'https://www.instagram.com/saivo.uz/' }
  ];

  const benefits = [
    { icon: <CheckCircle className="h-6 w-6" />, title: t('contact.benefits.freeConsultation'), description: t('contact.benefits.freeDesc'), accent: '#8b5cf6' },
    { icon: <Users className="h-6 w-6" />, title: t('contact.benefits.dedicatedTeam'), description: t('contact.benefits.teamDesc'), accent: '#22d3ee' },
    { icon: <Zap className="h-6 w-6" />, title: t('contact.benefits.fastResponse'), description: t('contact.benefits.responseDesc'), accent: '#fbbf24' },
    { icon: <Shield className="h-6 w-6" />, title: t('contact.benefits.secureProcess'), description: t('contact.benefits.secureDesc'), accent: '#34d399' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-14 max-w-3xl space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/90">
              <Send className="h-4 w-4 text-accent" />
              {t('contact.hero.badge')}
            </span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight lg:text-7xl">
              <span className="block text-foreground">{t('contact.hero.title1')}</span>
              <span className="block text-gradient">{t('contact.hero.title2')}</span>
              <span className="block text-foreground">{t('contact.hero.title3')}</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>

          {/* Benefits Row */}
          <motion.div
            className="grid grid-cols-2 gap-5 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="rounded-2xl glass p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ background: `${benefit.accent}1f`, color: benefit.accent }}
                >
                  {benefit.icon}
                </div>
                <h3 className="mb-1 font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="bg-background-2 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{t('contact.info.title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t('contact.info.subtitle')}</p>
          </motion.div>

          {/* Contact method cards */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          >
            {contactMethods.map((method, index) => {
              const inner = (
                <>
                  <div
                    className="mb-5 grid h-16 w-16 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${method.accent}1f`, color: method.accent }}
                  >
                    {method.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-1 text-lg font-medium" style={{ color: method.accent }}>{method.value}</p>
                  {method.action && (
                    <span className="mt-4 grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </>
              );

              const cardClass = `group relative flex flex-col items-center overflow-hidden rounded-2xl p-8 text-center ${
                method.primary ? 'border-gradient glow-primary bg-card/70' : 'glass'
              }`;

              return (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -8 }}
                >
                  {method.action ? (
                    <a
                      href={method.action}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className={cardClass}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 font-display text-2xl font-bold text-foreground">{t('contact.info.followUs')}</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid h-14 w-14 place-items-center rounded-2xl glass text-foreground/70 transition-colors hover:text-primary"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Response guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[1.6rem] border-gradient glow-soft p-10 text-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
            <div className="relative space-y-5">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[#6d28d9] glow-primary">
                <Star className="h-8 w-8 fill-current text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">{t('contact.info.responseGuarantee')}</h3>
              <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">{t('contact.info.responseText')}</p>
              <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
                <motion.a
                  href="https://t.me/SAIVO_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button size="lg" className="group h-14 w-full rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary sm:w-auto">
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="h-5 w-5" />
                      Telegram
                    </span>
                  </Button>
                </motion.a>
                <motion.a href="tel:+998998019353" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="h-14 w-full rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary sm:w-auto">
                    <span className="flex items-center gap-2.5">
                      <Phone className="h-5 w-5" />
                      +998 99 801 93 53
                    </span>
                  </Button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid items-center gap-16 lg:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-7">
              <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">
                {t('contact.why.badge')}
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground lg:text-5xl">
                {t('contact.why.title1')} <span className="text-gradient">{t('contact.why.title2')}</span>
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t('contact.why.subtitle')}</p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { number: '10+', label: t('home.stats.projectsDelivered') },
                  { number: '2', label: t('home.stats.internationalClients') },
                  { number: '95%', label: t('home.stats.clientSatisfaction') },
                  { number: '24/7', label: t('home.stats.supportAvailable') }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="rounded-2xl glass p-5 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="font-display text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="border-gradient glow-soft relative overflow-hidden rounded-[1.6rem] p-1.5">
                <div className="relative aspect-square overflow-hidden rounded-[1.3rem]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NjAzMDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team meeting business"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
