import React, { useState } from 'react';
import { useTranslation } from '../lib/translations';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Linkedin,
  Instagram,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Zap,
  Shield
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    service: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

  const escapeHtml = (str: string) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!BOT_TOKEN || !CHAT_ID) {
        throw new Error('Missing Telegram configuration');
      }

      const text = [
        '<b>New Contact Form Submission</b>',
        `👤 <b>Name:</b> ${escapeHtml(formData.name)}`,
        `📞 <b>Phone:</b> ${escapeHtml(formData.phone)}`,
        formData.company ? `🏢 <b>Company:</b> ${escapeHtml(formData.company)}` : undefined,
        formData.service ? `🧩 <b>Service:</b> ${escapeHtml(formData.service)}` : undefined,
        '',
        `<b>Message:</b>\n${escapeHtml(formData.description)}`
      ]
        .filter(Boolean)
        .join('\n');

      const sendTo = async (id: string) => {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: id, text, parse_mode: 'HTML', disable_web_page_preview: true })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error(data?.description || 'Telegram API error');
        return true;
      };

      // Try provided ID first, then supergroup and group variants
      const raw = CHAT_ID.toString();
      const stripped = raw.replace(/^(-100|-)/, '');
      const candidates = Array.from(new Set([
        raw,
        `-100${stripped}`,
        `-${stripped}`,
      ]));

      let sent = false;
      let lastErr: unknown = null;
      for (const id of candidates) {
        try {
          await sendTo(id);
          sent = true;
          break;
        } catch (e) {
          lastErr = e;
          // continue to next candidate
        }
      }
      if (!sent) throw lastErr || new Error('Failed to send to any chat id variant');

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', company: '', service: '', description: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-7 w-7" />,
      title: t('contact.info.emailUs'),
      value: 'info@saivo.uz',
      action: 'mailto:info@saivo.uz',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Phone className="h-7 w-7" />,
      title: t('contact.info.callUs'),
      value: '+998 99 801 93 53',
      action: 'tel:+998998019353',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: t('contact.info.visitUs'),
      value: 'Tashkent, Uzbekistan',
      action: null,
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: t('contact.info.workingHours'),
      value: t('contact.info.workingTime'),
      action: null,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const services = [
    t('services.landingWebsite'),
    t('services.customSoftware'),
    t('services.mobileAppDev'),
    t('services.ecommerceSolutions'),
    t('services.aiAutomationFull'),
    t('services.crmErpSystems'),
    t('services.securityCompliance'),
    t('common.other')
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: 'Telegram',
      url: 'https://t.me/SAIVO_uz',
      color: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/saivo-uz',
      color: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: 'Instagram',
      url: 'https://www.instagram.com/saivo.uz/',
      color: 'hover:from-purple-500 hover:to-pink-500'
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="h-6 w-6" />, title: t('contact.benefits.freeConsultation'), description: t('contact.benefits.freeDesc') },
    { icon: <Users className="h-6 w-6" />, title: t('contact.benefits.dedicatedTeam'), description: t('contact.benefits.teamDesc') },
    { icon: <Zap className="h-6 w-6" />, title: t('contact.benefits.fastResponse'), description: t('contact.benefits.responseDesc') },
    { icon: <Shield className="h-6 w-6" />, title: t('contact.benefits.secureProcess'), description: t('contact.benefits.secureDesc') }
  ];

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
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                  <Mail className="h-5 w-5" />
                  <span>{t('contact.hero.badge')}</span>
                </motion.span>
              </Badge>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t('contact.hero.title1')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t('contact.hero.title2')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {t('contact.hero.title3')}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>

          {/* Benefits Row */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="p-10 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {t('contact.form.title')}
                      </h2>
                      <p className="text-gray-600 text-lg">
                        {t('contact.form.subtitle')}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Field */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="name" className="text-gray-700 font-semibold text-lg">
                        {t('contact.form.fullName')} *
                      </Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.fullNamePlaceholder')} 
                        required 
                        className="h-14 px-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/80 backdrop-blur-sm"
                      />
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="phone" className="text-gray-700 font-semibold text-lg">
                        {t('contact.form.phoneNumber')} *
                      </Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.phonePlaceholder')} 
                        required 
                        className="h-14 px-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/80 backdrop-blur-sm"
                      />
                    </motion.div>

                    {/* Company Field */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="company" className="text-gray-700 font-semibold text-lg">
                        {t('contact.form.companyName')}
                      </Label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.companyPlaceholder')} 
                        className="h-14 px-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/80 backdrop-blur-sm"
                      />
                    </motion.div>

                    {/* Service Field */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="service" className="text-gray-700 font-semibold text-lg">
                        {t('contact.form.serviceNeeded')} *
                      </Label>
                      <select 
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full h-14 px-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none"
                      >
                        <option value="">{t('contact.form.selectService')}</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Description Field */}
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="description" className="text-gray-700 font-semibold text-lg">
                        {t('contact.form.projectDescription')} *
                      </Label>
                      <Textarea 
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.projectPlaceholder')}
                        className="min-h-[150px] p-6 text-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl bg-white/80 backdrop-blur-sm resize-none" 
                        required 
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl disabled:opacity-50"
                      >
                        <span className="flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>{t('contact.form.sendingMessage')}</span>
                            </>
                          ) : (
                            <>
                              <span>{t('contact.form.sendMessage')}</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <ArrowRight className="h-6 w-6" />
                              </motion.div>
                            </>
                          )}
                        </span>
                      </Button>
                    </motion.div>

                    {submitStatus === 'success' && (
                      <p className="text-emerald-600 font-medium mt-3">Message sent successfully. We will contact you soon.</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-600 font-medium mt-3">Failed to send. Please try again or use our contacts below.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Info Cards */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t('contact.info.title')}
                  </h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {t('contact.info.subtitle')}
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="group"
                    >
                      <Card className="p-6 hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex items-center space-x-6">
                            <motion.div
                              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                              whileHover={{ rotate: 10 }}
                            >
                              <div className={`text-transparent bg-gradient-to-r ${info.color} bg-clip-text`}>
                                {info.icon}
                              </div>
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 mb-2 text-xl">
                                {info.title}
                              </h3>
                              {info.action ? (
                                <a 
                                  href={info.action}
                                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg font-medium group-hover:text-blue-600"
                                >
                                  {info.value}
                                </a>
                              ) : (
                                <p className="text-gray-600 text-lg">{info.value}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-2xl">
                  {t('contact.info.followUs')}
                </h3>
                <div className="flex justify-center lg:justify-start space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 ${social.color} text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-0 shadow-xl">
                  <CardContent className="p-0 text-center space-y-6">
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Star className="h-10 w-10 text-white fill-current" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-xl">
                        {t('contact.info.responseGuarantee')}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {t('contact.info.responseText')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 border-emerald-200/50 hover:from-emerald-200 hover:to-blue-200 transition-all duration-300 px-4 py-2 text-base">
                {t('contact.why.badge')}
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('contact.why.title1')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('contact.why.title2')}</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('contact.why.subtitle')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '10+', label: t('home.stats.projectsDelivered') },
                    { number: '2', label: t('home.stats.internationalClients') },
                    { number: '95%', label: t('home.stats.clientSatisfaction') },
                    { number: '24/7', label: t('home.stats.supportAvailable') }
                  ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NjAzMDQ2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team meeting business"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}