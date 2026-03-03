import type { AppTranslations } from '../types';

export const app: AppTranslations = {
  meta: {
    title: 'App Name — hi1 labs',
    description: 'Понятное описание того, что делает ваше приложение и почему это важно.',
    ogTitle: 'App Name — hi1 labs',
    ogDescription: 'Понятное описание того, что делает ваше приложение и почему это важно.',
  },
  hero: {
    tagline: 'Ваше приложение',
    taglineEmphasis: 'слоган',
    description: 'Понятное описание того, что делает ваше приложение и почему оно понравится людям.',
  },
  marqueeTags: [
    'Приватность',
    'Быстрое и лёгкое',
    'Работает офлайн',
    'Тёмная тема',
    'Без рекламы',
    'Красивый UI',
  ],
  screenshots: {
    eyebrow: 'Превью',
    title: 'Посмотрите в действии',
  },
  features: {
    eyebrow: 'Функции',
    title: 'Всё что нужно, ничего лишнего',
  },
  featureItems: [
    { title: 'Функция', description: 'Короткое описание того, что делает эта функция и почему она важна для пользователя.' },
    { title: 'Приватность', description: 'Ваши данные остаются на вашем устройстве — приватность по умолчанию' },
    { title: 'Быстрое и лёгкое', description: 'Молниеносная скорость и минимальный размер — чистая производительность' },
    { title: 'Тёмная тема', description: 'Красиво в светлой и тёмной теме, подстраиваясь под системные настройки' },
    { title: 'Работает офлайн', description: 'Полная функциональность даже без интернета — ваш рабочий процесс без прерываний' },
    { title: 'Без рекламы', description: 'Чистый, сфокусированный интерфейс — только нужный инструмент' },
  ],
  support: {
    title: 'Нужна помощь?',
    description: 'Мы здесь для вас — напишите нам, и мы ответим как можно скорее',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfService: 'Условия использования',
  },
  downloadBanner: {
    appName: 'App Name',
  },
  schema: {
    name: 'App Name',
    description: 'A clear, one-sentence description of what your app does and why it matters.',
  },
};
