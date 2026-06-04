import { motion } from 'motion/react';
import { useTranslation } from '../lib/translations';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight, Star, Users, Sparkles } from 'lucide-react';

interface WorkPageProps {
  onNavigate?: (page: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  const { t } = useTranslation();
  const projects = [
    { title: 'Nutva.uz', subtitle: t('work.project.nutva.subtitle'), description: t('work.project.nutva.description'), url: 'https://nutva.uz/', technologies: [t('work.project.nutva.tech1'), t('work.project.nutva.tech2'), t('work.project.nutva.tech3'), t('work.project.nutva.tech4')], category: t('work.category.ecommerce'), featured: true, metrics: { users: '10K+', conversion: '25%', performance: '98%' } },
    { title: 'Hamkor Lizing', subtitle: t('work.project.hamkor.subtitle'), description: t('work.project.hamkor.description'), url: 'https://hamkor-lizing.uz/', technologies: [t('work.project.hamkor.tech1'), t('work.project.hamkor.tech2'), t('work.project.hamkor.tech3')], category: t('work.category.fintech'), featured: true, metrics: { users: '5K+', conversion: '30%', performance: '99%' } },
    { title: 'ISHORA', subtitle: t('work.project.ishora.subtitle'), description: t('work.project.ishora.description'), url: 'https://ishora.uz', technologies: [t('work.project.ishora.tech1'), t('work.project.ishora.tech2'), t('work.project.ishora.tech3'), t('work.project.ishora.tech4')], category: t('work.category.hrtech'), featured: false, metrics: { users: '2K+', conversion: '40%', performance: '97%' } },
    { title: 'Goldmoon Group', subtitle: t('work.project.goldmoon.subtitle'), description: t('work.project.goldmoon.description'), url: 'https://goldmoon-group.com/', technologies: [t('work.project.goldmoon.tech1'), t('work.project.goldmoon.tech2'), t('work.project.goldmoon.tech3')], category: t('work.category.corporate'), featured: false, metrics: { users: '1K+', conversion: '20%', performance: '96%' } },
    { title: 'Almasjid.uz', subtitle: t('work.project.almasjid.subtitle'), description: t('work.project.almasjid.description'), url: 'https://www.almasjid.uz/', technologies: [t('work.project.almasjid.tech1'), t('work.project.almasjid.tech2'), t('work.project.almasjid.tech3'), t('work.project.almasjid.tech4')], category: t('work.category.socialimpact'), featured: true, metrics: { users: '50K+', conversion: '35%', performance: '95%' } },
    { title: 'LegacyEstate', subtitle: t('work.project.legacy.subtitle'), description: t('work.project.legacy.description'), url: 'https://legacyestate.uz/login', technologies: [t('work.project.legacy.tech1'), t('work.project.legacy.tech2'), t('work.project.legacy.tech3'), t('work.project.legacy.tech4')], category: t('work.category.realestate'), featured: false, metrics: { users: '3K+', conversion: '28%', performance: '98%' } },
    { title: 'Landing Nutva Complex', subtitle: t('work.project.nutvacomplex.subtitle'), description: t('work.project.nutvacomplex.description'), url: 'https://tabiiyyordam.nutva.uz/uz/imunitet', technologies: [t('work.project.nutvacomplex.tech1'), t('work.project.nutvacomplex.tech2'), t('work.project.nutvacomplex.tech3')], category: t('work.category.healthcare'), featured: false, metrics: { users: '8K+', conversion: '22%', performance: '99%' } },
    { title: 'EduExploreChina.com', subtitle: t('work.project.edu.subtitle'), description: t('work.project.edu.description'), url: 'https://eduexplorechina.com/', technologies: [t('work.project.edu.tech1'), t('work.project.edu.tech2'), t('work.project.edu.tech3'), t('work.project.edu.tech4')], category: t('work.category.education'), featured: false, metrics: { users: '15K+', conversion: '18%', performance: '94%' } },
    { title: 'Green Aral Sea', subtitle: t('work.project.aral.subtitle'), description: t('work.project.aral.description'), url: 'https://greenaralsea.org/', technologies: [t('work.project.aral.tech1'), t('work.project.aral.tech2'), t('work.project.aral.tech3'), t('work.project.aral.tech4')], category: t('work.category.environmental'), featured: true, metrics: { users: '25K+', conversion: '15%', performance: '93%' } }
  ];

  const categories = [
    t('common.all'), t('work.category.ecommerce'), t('work.category.fintech'), t('work.category.hrtech'),
    t('work.category.corporate'), t('work.category.socialimpact'), t('work.category.realestate'),
    t('work.category.healthcare'), t('work.category.education'), t('work.category.environmental')
  ];
  const featuredProjects = projects.filter(p => p.featured);

  const getCategoryAccent = (category: string) => {
    const accents: Record<string, string> = {
      ecommerce: '#8b5cf6', fintech: '#34d399', hrtech: '#a78bfa', corporate: '#94a3b8',
      socialimpact: '#fb923c', realestate: '#818cf8', healthcare: '#fb7185', education: '#fbbf24', environmental: '#22d3ee'
    };
    const labels: Record<string, string> = {
      ecommerce: 'E-Commerce', fintech: 'Fintech', hrtech: 'HR Tech', corporate: 'Corporate',
      socialimpact: 'Social Impact', realestate: 'Real Estate', healthcare: 'Healthcare', education: 'Education', environmental: 'Environmental'
    };
    for (const key of Object.keys(accents)) {
      if (category === t(`work.category.${key}`) || category === labels[key]) return accents[key];
    }
    return '#94a3b8';
  };

  const thumb = (accent: string) => ({
    background: `radial-gradient(120% 120% at 20% 0%, ${accent}, #0b0d18 75%)`
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-mesh" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div className="space-y-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/90">
              <Sparkles className="h-4 w-4 text-accent" />
              {t('work.hero.badge')}
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
              <span className="text-gradient">{t('work.hero.title')}</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">{t('work.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-background-2 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              {t('work.featured.title')} <span className="text-gradient">{t('work.featured.featured')}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t('work.featured.subtitle')}</p>
          </motion.div>

          <motion.div className="grid gap-8 lg:grid-cols-2" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {featuredProjects.slice(0, 2).map((project, index) => {
              const accent = getCategoryAccent(project.category);
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group flex flex-col overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-video overflow-hidden" style={thumb(accent)}>
                    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                      <div className="flex items-start justify-between">
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{project.category}</span>
                        <div className="flex items-center gap-1.5 text-sm">
                          <Star className="h-4 w-4 fill-current text-accent" />
                          <span className="font-medium">{t('work.featured.featured')}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                        <div className="mt-2 flex gap-6 text-sm text-white/80">
                          <span className="flex items-center gap-1"><Users className="h-4 w-4" />{project.metrics.users}</span>
                          <span className="flex items-center gap-1"><ArrowRight className="h-4 w-4" />{project.metrics.conversion}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h4 className="font-semibold text-lg text-primary">{project.subtitle}</h4>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-auto space-y-4 pt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, ti) => (
                          <span key={ti} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">+{project.technologies.length - 3} {t('work.tech.more')}</span>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Button asChild size="sm" className="h-11 flex-1 rounded-xl bg-gradient-to-r from-primary to-[#6d28d9] text-white glow-primary">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center justify-center gap-2">{t('work.viewProject')}<ExternalLink className="h-4 w-4" /></span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => onNavigate?.('contact')} className="h-11 rounded-xl border-border bg-card/40 hover:border-primary/40 hover:text-primary">
                          {t('work.caseStudy')}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-14 flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            {categories.map((category, index) => (
              <span
                key={category}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  index === 0 ? 'bg-primary text-primary-foreground glow-primary' : 'glass text-foreground/70 hover:text-primary'
                }`}
              >
                {category}
              </span>
            ))}
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {projects.map((project, index) => {
              const accent = getCategoryAccent(project.category);
              return (
                <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group flex flex-col overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-video overflow-hidden" style={thumb(accent)}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-white">
                      <h3 className="font-display text-xl font-bold">{project.title}</h3>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">{project.category}</span>
                    </div>
                    {project.featured && (
                      <div className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-accent">
                        <Star className="h-4 w-4 fill-current text-accent-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="font-semibold text-lg text-primary transition-colors group-hover:text-accent">{project.subtitle}</h4>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-auto space-y-3 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 2).map((tech, ti) => (
                          <span key={ti} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">+{project.technologies.length - 2} {t('work.tech.more')}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="h-10 flex-1 rounded-xl bg-gradient-to-r from-primary to-[#6d28d9] text-white">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <span className="flex items-center justify-center gap-1.5">{t('work.viewProject')}<ExternalLink className="h-3 w-3" /></span>
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => onNavigate?.('contact')} className="h-10 rounded-xl border-border bg-card/40 hover:border-primary/40 hover:text-primary">
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">{t('work.cta.title')}</h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">{t('work.cta.subtitle')}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" onClick={() => onNavigate?.('contact')} className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white glow-primary">
                    <span className="flex items-center gap-2.5">{t('work.cta.startProject')}<Sparkles className="h-5 w-5" /></span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" onClick={() => onNavigate?.('contact')} className="h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur hover:border-primary/40 hover:text-primary">
                    {t('work.cta.scheduleCall')}
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
