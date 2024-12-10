export enum MatrixCategories {
  Registration = 'registration',
  Login = 'login',
  Access = 'access',
  Transaction = 'transaction',
}

export enum ScoreCategory {
  Convenience = 'convenience',
  Privacy = 'privacy',
  Security = 'security',
}

export enum FeatureCategory {
  B2bSaas = 'B2B SaaS',
  Retail = 'Retail',
  FinancialServices = 'Financial Services',
  Publishing = 'Publishing',
  Travel = 'Travel',
  Healthcare = 'Healthcare',
}

export type MatrixItem = {
  title: string;
  link: string | null;
};

export type ClientExample = {
  name: string;
  logo: string;
  prompt: string;
  link: string;
};

export type Score = Record<ScoreCategory, number>;
export type Matrix = Record<MatrixCategories, MatrixItem[]>;

export type Feature = {
  summary: string;
  matrix: Matrix;
  score: Score;
  clientExample: ClientExample;
};

export type FeatureData = Record<FeatureCategory, Feature>;

export const FEATURES: FeatureData = {
  [FeatureCategory.B2bSaas]: {
    summary:
      'Design for security and convenience. Delegate access for B2B2C SaaS services. Incorporate an organizational portal, access controls, and multiple extensions.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Bot Detection', link: null },
        { title: 'Provisioning', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'Directory',
          link: null,
        },
        {
          title: 'Enterprise Federation',
          link: null,
        },
        {
          title: 'Directory Synchronization',
          link: null,
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Delegated Administration', link: null },
        { title: 'Policy Engine', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [
        { title: 'RBAC', link: null },
        { title: 'ABAC', link: null },
      ],
    },
    score: {
      [ScoreCategory.Convenience]: 86.79,
      [ScoreCategory.Privacy]: 44.03,
      [ScoreCategory.Security]: 86.79,
    },
    clientExample: {
      name: 'Zapier',
      logo: 'https://cdn.auth0.com/website/website/cic-homepage/industries-flow/zapier-logo.svg',
      prompt:
        'Zapier is one of many companies harnessing the power of Fine-Grained Authorization. Learn more about Okta FGA',
      link: 'https://auth0.com/fine-grained-authorization',
    },
  },
  [FeatureCategory.Retail]: {
    summary:
      'Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Anonymous User', link: null },
        { title: 'Bot Detection', link: null },
        { title: 'Registration', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'Directory',
          link: null,
        },
        {
          title: 'SSO',
          link: null,
        },
        {
          title: 'Social Integrations',
          link: null,
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Progressive Profiling', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [
        { title: 'Step-up Auth', link: null },
        { title: 'Auth Factors', link: null },
      ],
    },
    score: {
      [ScoreCategory.Convenience]: 84.91,
      [ScoreCategory.Privacy]: 80,
      [ScoreCategory.Security]: 40,
    },
    clientExample: {
      name: 'Gymshark',
      logo: 'https://cdn.auth0.com/website/cic-homepage/industries-flow//gymshark.svg',
      prompt:
        'See how Gymshark saves money while improving customer experience',
      link: 'https://auth0.com/customers',
    },
  },
  [FeatureCategory.FinancialServices]: {
    summary:
      'Optimize for security. Incorporate multi-factor authentication, custom extensions, and step-up authentication for high-risk/high-value transactions.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Bot Detection', link: null },
        { title: 'Registration', link: null },
        { title: 'Identity Verification', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'SSO',
          link: null,
        },
        {
          title: 'MFA',
          link: 'https://auth0.com/features/multifactor-authentication',
        },
        {
          title: 'Directory',
          link: null,
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Policy Engine', link: null },
        { title: 'RBAC', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [
        { title: 'Step-up Auth', link: null },
        { title: 'Auth Factors', link: null },
      ],
    },
    score: {
      [ScoreCategory.Convenience]: 0,
      [ScoreCategory.Privacy]: 69.18,
      [ScoreCategory.Security]: 89.94,
    },
    clientExample: {
      name: 'Finder',
      logo: 'https://cdn.auth0.com/website/cic-homepage/industries-flow//finder.svg',
      prompt: 'Learn how Finder protects user’s financial data',
      link: 'https://www.okta.com/customers/finder/',
    },
  },
  [FeatureCategory.Publishing]: {
    summary:
      'Optimize for low-friction access, user experience, and customer conversion. Allow for anonymous initial use prior to registration.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Bot Detection', link: null },
        { title: 'Anonymous User', link: null },
        { title: 'Registration', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'Social Integrations',
          link: null,
        },
        {
          title: 'Directory',
          link: null,
        },
        {
          title: 'Passwordles',
          link: 'https://auth0.com/features/passwordless',
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Policy Engine', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [],
    },
    score: {
      [ScoreCategory.Convenience]: 94.97,
      [ScoreCategory.Privacy]: 90,
      [ScoreCategory.Security]: 40.25,
    },
    clientExample: {
      name: "O'Reilly",
      logo: 'https://cdn.auth0.com/website/cic-homepage/industries-flow//oreilly.svg',
      prompt:
        'Learn how O’Reilly Online Learning built a flexible SSO platform for enterprise customer integrations',
      link: 'https://auth0.com/customers',
    },
  },
  [FeatureCategory.Travel]: {
    summary:
      'Cater for convenience and privacy. Incorporate social logins, facilitate SSO and loyalty program extensions, and federate with industry partner IAM systems.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Anonymous User', link: null },
        { title: 'Bot Detection', link: null },
        { title: 'Registration', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'Directory',
          link: null,
        },
        {
          title: 'SSO',
          link: null,
        },
        {
          title: 'Social Integrations',
          link: null,
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Progressive Profiling', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [
        { title: 'Step-up Auth', link: null },
        { title: 'Auth Factors', link: null },
      ],
    },
    score: {
      [ScoreCategory.Convenience]: 50,
      [ScoreCategory.Privacy]: 70.44,
      [ScoreCategory.Security]: 84.91,
    },
    clientExample: {
      name: 'HolidayCheck',
      logo: 'https://cdn.auth0.com/website/cic-homepage/industries-flow//holidaycheck.svg',
      prompt:
        'See how HolidayCheck builds user trust while securing online visitors',
      link: 'https://auth0.com/case-studies/holidaycheck',
    },
  },
  [FeatureCategory.Healthcare]: {
    summary:
      'Optimize for security and privacy. Incorporate multi-factor authentication, custom partner and device extensions, and layered policy and access controls.',
    matrix: {
      [MatrixCategories.Registration]: [
        { title: 'Bot Detection', link: null },
        { title: 'Registration', link: null },
      ],
      [MatrixCategories.Login]: [
        {
          title: 'MFA',
          link: 'https://auth0.com/features/multifactor-authentication',
        },
        {
          title: 'Directory',
          link: null,
        },
        {
          title: 'Universal Login',
          link: 'https://auth0.com/features/universal-login',
        },
        {
          title: 'Auth Factors',
          link: null,
        },
      ],
      [MatrixCategories.Access]: [
        { title: 'Policy Engine', link: null },
        { title: 'RBAC', link: null },
        {
          title: 'Fine Grained Authorization',
          link: 'https://auth0.com/fine-grained-authorization',
        },
      ],
      [MatrixCategories.Transaction]: [{ title: 'Step-up Auth', link: null }],
    },
    score: {
      [ScoreCategory.Convenience]: 92.45,
      [ScoreCategory.Privacy]: 83.02,
      [ScoreCategory.Security]: 50,
    },
    clientExample: {
      name: 'Providence',
      logo: 'https://cdn.auth0.com/website/cic-homepage/industries-flow//providence.svg',
      prompt:
        'See how Providence health improved security and customer convenience',
      link: 'https://auth0.com/case-studies/holidaycheck',
    },
  },
};
