import { motion } from 'motion/react';
import { ArrowRight, Award, Target, Users, Zap, CheckCircle2, Calendar, Trophy, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
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
    { icon: <Target className="h-7 w-7" />, title: t('about.values.resultsTitle'), description: t('about.values.resultsDesc'), accent: '#8b5cf6' },
    { icon: <Users className="h-7 w-7" />, title: t('about.values.partnershipTitle'), description: t('about.values.partnershipDesc'), accent: '#a78bfa' },
    { icon: <Award className="h-7 w-7" />, title: t('about.values.qualityTitle'), description: t('about.values.qualityDesc'), accent: '#22d3ee' },
    { icon: <Zap className="h-7 w-7" />, title: t('about.values.innovationTitle'), description: t('about.values.innovationDesc'), accent: '#fbbf24' }
  ];

  const timeline = [
    { date: '2024-11', title: t('about.timeline.nov2024'), description: t('about.timeline.nov2024Desc'), icon: <Trophy className="h-6 w-6" />, accent: '#8b5cf6' },
    { date: '2024-12', title: t('about.timeline.dec2024'), description: t('about.timeline.dec2024Desc'), icon: <CheckCircle2 className="h-6 w-6" />, accent: '#22d3ee' },
    { date: '2025-05', title: t('about.timeline.may2025'), description: t('about.timeline.may2025Desc'), icon: <Sparkles className="h-6 w-6" />, accent: '#a78bfa' },
    { date: '2025-08', title: t('about.timeline.aug2025'), description: t('about.timeline.aug2025Desc'), icon: <Target className="h-6 w-6" />, accent: '#fbbf24' },
    { date: t('about.timeline.present'), title: t('about.timeline.present'), description: t('about.timeline.presentDesc'), icon: <Zap className="h-6 w-6" />, accent: '#8b5cf6' }
  ];

  const team = [
    { name: t('about.team.bahodir.name'), role: t('about.team.bahodir.role'), description: t('about.team.bahodir.desc'), image: bahodirImage, accent: '#8b5cf6' },
    { name: t('about.team.salimbay.name'), role: t('about.team.salimbay.role'), description: t('about.team.salimbay.desc'), image: salimbayImage, accent: '#a78bfa' },
    { name: t('about.team.shohruh.name'), role: t('about.team.shohruh.role'), description: t('about.team.shohruh.desc'), image: shohruhImage, accent: '#22d3ee' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };

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
                <Calendar className="h-4 w-4 text-accent" />
                {t('about.hero.badge')}
              </span>

              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-foreground">{t('about.hero.title1')}</span>
                <span className="block text-gradient">{t('about.hero.title2')}</span>
                <span className="block text-foreground">{t('about.hero.title3')}</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
                {t('about.hero.subtitle')}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate?.('work')}
                    className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary"
                  >
                    <span className="flex items-center gap-2.5">
                      {t('about.hero.discoverJourney')}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary"
                  >
                    {t('about.hero.meetTeam')}
                  </Button>
                </motion.div>
              </div>
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTYwMzA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Team collaboration office"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background-2 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl glass p-7"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(130% 100% at 50% 0%, ${value.accent}1f, transparent 65%)` }}
                />
                <div
                  className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${value.accent}1f`, color: value.accent }}
                >
                  {value.icon}
                </div>
                <h3 className="relative mb-3 font-display text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="relative text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative overflow-hidden bg-background py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">
              {t('about.timeline.badge')}
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{t('about.timeline.title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t('about.timeline.subtitle')}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 lg:left-1/2 lg:block lg:-translate-x-1/2" />
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-primary opacity-30 lg:hidden" />

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="absolute left-8 z-10 -translate-x-1/2 lg:left-1/2">
                    <motion.div
                      className="grid h-14 w-14 place-items-center rounded-full text-white shadow-lg"
                      style={{ background: item.accent, boxShadow: `0 10px 30px -6px ${item.accent}80` }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  <div className={`w-full pl-20 lg:w-5/12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="rounded-2xl glass p-6 lg:p-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{item.date}</div>
                      <h3 className="mt-2 font-display text-xl font-bold text-foreground lg:text-2xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="relative overflow-hidden bg-background-2 py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full glass px-4 py-1.5 text-sm font-medium text-primary">
              {t('about.team.badge')}
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{t('about.team.title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t('about.team.subtitle')}</p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
                className="group overflow-hidden rounded-3xl glass"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span
                        className="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur"
                        style={{ background: `${member.accent}26`, color: member.accent }}
                      >
                        {member.role.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 p-7 text-center">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-2xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-base font-semibold" style={{ color: member.accent }}>{member.role}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                  <div className="flex justify-center">
                    <motion.div
                      className="h-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${member.accent}, var(--accent))` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: 48 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{t('about.cta.title')}</h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">{t('about.cta.subtitle')}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate?.('contact')}
                    className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary"
                  >
                    <span className="flex items-center gap-2.5">
                      {t('about.cta.joinTeam')}
                      <Users className="h-5 w-5" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate?.('contact')}
                    className="group h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary"
                  >
                    <span className="flex items-center gap-2.5">
                      {t('about.cta.startProject')}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
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
