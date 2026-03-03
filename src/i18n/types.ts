export interface CommonTranslations {
  nav: {
    home: string;
    apps: string;
    about: string;
    contact: string;
    features: string;
    support: string;
    allApps: string;
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
    home: string;
    allRightsReserved: string;
  };
  theme: {
    toggleLabel: string;
  };
  skipToContent: string;
  langSwitcher: {
    switchTo: string;
  };
  storeBadges: {
    appStoreLabel: string;
    appStoreName: string;
    googlePlayLabel: string;
    googlePlayName: string;
  };
}

export interface HomeTranslations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleConnector: string;
    titleEmphasis: string;
    subtitle: string;
    ctaExplore: string;
    ctaHello: string;
  };
  marqueeTags: string[];
  apps: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  appCards: {
    title: string;
    tagline: string;
    badge: string;
  }[];
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  values: {
    title: string;
    description: string;
  }[];
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  social: {
    twitter: string;
    instagram: string;
  };
}

export interface AppTranslations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    tagline: string;
    taglineEmphasis: string;
    description: string;
  };
  marqueeTags: string[];
  screenshots: {
    eyebrow: string;
    title: string;
  };
  features: {
    eyebrow: string;
    title: string;
  };
  featureItems: {
    title: string;
    description: string;
  }[];
  support: {
    title: string;
    description: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  downloadBanner: {
    appName: string;
  };
  schema: {
    name: string;
    description: string;
  };
}

export interface LegalTranslations {
  privacy: {
    meta: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
    };
    header: {
      eyebrow: string;
      title: string;
      lastUpdated: string;
    };
    contentHtml: string;
  };
  terms: {
    meta: {
      title: string;
      description: string;
      ogTitle: string;
      ogDescription: string;
    };
    header: {
      eyebrow: string;
      title: string;
      lastUpdated: string;
    };
    contentHtml: string;
  };
}
