import { 
  Code, 
  Brain, 
  Globe, 
  Shield, 
  CheckCircle2, 
  Heart, 
  Timer, 
  Smartphone, 
  Database, 
  Cloud 
} from 'lucide-react';

export const getStats = (t: (key: string) => string) => [
  { 
    number: '10+', 
    label: t('home.stats.projectsDelivered'), 
    icon: <CheckCircle2 className="h-8 w-8" />, 
    color: 'text-blue-600',
    bgGradient: 'from-blue-500/20 to-blue-600/20'
  },
  { 
    number: '2', 
    label: t('home.stats.internationalClients'), 
    icon: <Globe className="h-8 w-8" />, 
    color: 'text-emerald-600',
    bgGradient: 'from-emerald-500/20 to-emerald-600/20'
  },
  { 
    number: '95%', 
    label: t('home.stats.clientSatisfaction'), 
    icon: <Heart className="h-8 w-8" />, 
    color: 'text-pink-600',
    bgGradient: 'from-pink-500/20 to-pink-600/20'
  },
  { 
    number: '24/7', 
    label: t('home.stats.supportAvailable'), 
    icon: <Timer className="h-8 w-8" />, 
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/20 to-purple-600/20'
  }
];

export const getFeatures = (t: (key: string) => string) => [
  {
    icon: <Code className="h-10 w-10" />,
    title: t('home.features.customDevelopment'),
    description: t('home.features.customDesc'),
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    borderColor: 'border-blue-200/50',
    hoverBg: 'hover:from-blue-100 hover:to-blue-200'
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: t('home.features.aiSolutions'),
    description: t('home.features.aiDesc'),
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-200/50',
    hoverBg: 'hover:from-purple-100 hover:to-purple-200'
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: t('home.features.globalInfrastructure'),
    description: t('home.features.globalDesc'),
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    borderColor: 'border-emerald-200/50',
    hoverBg: 'hover:from-emerald-100 hover:to-emerald-200'
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: t('home.features.enterpriseSecurity'),
    description: t('home.features.enterpriseDesc'),
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100',
    borderColor: 'border-red-200/50',
    hoverBg: 'hover:from-red-100 hover:to-red-200'
  }
];

export const getServices = (t: (key: string) => string) => [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: t('home.services.mobileApps'),
    price: '$1,000',
    description: t('home.services.mobileDesc'),
    features: [t('home.services.features.crossPlatform'), t('home.services.features.pushNotifications'), t('home.services.features.offlineSupport')],
    popular: false
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: t('home.services.crmErp'),
    price: '$5,000',
    description: t('home.services.crmDesc'),
    features: [t('home.services.features.customWorkflows'), t('home.services.features.analyticsDashboard'), t('home.services.features.apiIntegration')],
    popular: true
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: t('home.services.ecommerceShort'),
    price: '$1,300',
    description: t('home.services.ecommerceDesc'),
    features: [t('home.services.features.paymentGateway'), t('home.services.features.inventorySystem'), t('home.services.features.adminPanel')],
    popular: false
  }
];

export const getTestimonials = (t: (key: string) => string) => [
  {
    name: 'Tech Startup CEO',
    role: 'International Client',
    content: 'SAIVO delivered beyond expectations. Their technical expertise and attention to detail transformed our vision into a world-class platform.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYwMzA0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  },
  {
    name: 'E-commerce Director',
    role: 'Local Business',
    content: 'The team at SAIVO doesn\'t just code - they understand business. Our revenue increased 300% after launching their solution.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2MDMwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5
  }
];