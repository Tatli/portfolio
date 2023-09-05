const config = {
  defaultTitle: 'Osman Tatli',
  url:
    process.env.NODE_ENV !== 'development'
      ? (process.env.NEXT_PUBLIC_PORTFOLIO_URL as string)
      : 'http://localhost:3040',
  defaultDescription:
    'I’m Osman and I am a Fullstack Java-/Typescript developer',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
  NEXT_PUBLIC_PORTFOLIO_URL: process.env.NEXT_PUBLIC_PORTFOLIO_URL as string,
  twitter: '@smakosh',
};

export default config;
