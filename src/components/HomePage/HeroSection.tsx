import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../lib/translations';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Layered backdrop: mesh glow + dotted grid */}
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Floating glow orbs */}
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
          {/* Left — copy */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-foreground/90">{t('home.hero.badge')}</span>
            </motion.div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-foreground">{t('home.hero.title1')}</span>
              <span className="block text-gradient">{t('home.hero.title2')}</span>
              <span className="block text-foreground">{t('home.hero.title3')}</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {t('home.hero.subtitle')}
            </p>

            {/* SEO Content - Hidden but crawlable */}
            <div className="sr-only">
              <h2>IT Xizmatlar O'zbekiston - Veb Sayt va Mobil Ilova Ishlab Chiqish</h2>
              <p>SAIVO - O'zbekistonda professional IT xizmatlar ko'rsatuvchi yetakchi kompaniya. Biz veb sayt ishlab chiqish, mobil ilova yaratish, CRM tizim, elektron savdo platformalari va AI bot larni tayyorlaymiz. Toshkent shahrida joylashgan IT kompaniyamiz barcha turdagi biznes ehtiyojlariga mos yechimlar taklif etadi.</p>
              <h3>Bizning Asosiy Xizmatlarimiz:</h3>
              <ul>
                <li>Landing sahifa ishlab chiqish va dizayn</li>
                <li>Korporativ veb sayt yaratish</li>
                <li>Mobil ilova ishlab chiqish iOS va Android uchun</li>
                <li>CRM va ERP tizimlar yaratish</li>
                <li>Elektron savdo platformalari</li>
                <li>AI chatbot va avtomatlashtirish</li>
                <li>Dasturiy ta'minot ishlab chiqish</li>
                <li>IT konsalting va texnik qo'llab-quvvatlash</li>
              </ul>
              <h3>O'zbekistonda IT Xizmatlar</h3>
              <p>Toshkent va boshqa viloyatlarda IT loyihalar uchun eng yaxshi xizmat. Professional jamoa, tez yetkazib berish, sifat kafolati. +998998019353 orqali bepul maslahat oling.</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate?.('contact')}
                  className="group h-14 rounded-2xl bg-gradient-to-r from-primary to-[#6d28d9] px-8 text-base font-semibold text-white shadow-none glow-primary hover:from-primary hover:to-primary"
                >
                  <span className="flex items-center gap-2.5">
                    {t('home.hero.getStarted')}
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate?.('work')}
                  className="h-14 rounded-2xl border-border bg-card/40 px-8 text-base font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:bg-card/70 hover:text-primary"
                >
                  {t('home.hero.ourWork')}
                </Button>
              </motion.div>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span>95% {t('home.stats.clientSatisfaction')}</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span>10+ {t('home.stats.projectsDelivered')}</span>
              <div className="h-4 w-px bg-border" />
              <span>24/7 {t('home.stats.supportAvailable')}</span>
            </div>
          </motion.div>

          {/* Right — framed visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="border-gradient glow-soft relative overflow-hidden rounded-[1.6rem] p-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzU2MDMwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Technology team working office"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              </div>
            </div>

            {/* Floating glass stat chip */}
            <motion.div
              className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl glass px-4 py-3 sm:-left-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-foreground">10+</div>
                <div className="text-xs text-muted-foreground">{t('home.stats.projectsDelivered')}</div>
              </div>
            </motion.div>

            {/* Floating gold chip */}
            <motion.div
              className="absolute -right-3 top-8 flex items-center gap-2 rounded-2xl glass px-4 py-3 sm:-right-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent">
                <Star className="h-5 w-5 fill-current" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-foreground">95%</div>
                <div className="text-xs text-muted-foreground">{t('home.stats.clientSatisfaction')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
