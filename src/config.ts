import type { IconName } from './components/Icon';

export interface SocialLink {
  name: string;
  url: string;
  icon: IconName;
}

export interface SiteConfig {
  /** Used for <title> and Open Graph title. */
  siteTitle: string;
  description: string;
  heading: string;
  subHeading: string;
  email: string;
  socialLinks: SocialLink[];
}

const config: SiteConfig = {
  siteTitle: 'Jeff Umbricht - Senior Software Engineer',
  description: 'Jeff Umbricht Portfolio',
  heading: 'Jeff Umbricht',
  subHeading: 'Senior Software Engineer',
  email: 'jeffrey.u@gmail.com',
  socialLinks: [
    { name: 'Github', url: 'https://github.com/jeffumbricht', icon: 'github' },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jeffumbricht/',
      icon: 'linkedin',
    },
    { name: 'Email', url: 'mailto:jeffrey.u@gmail.com', icon: 'envelope' },
  ],
};

export default config;
