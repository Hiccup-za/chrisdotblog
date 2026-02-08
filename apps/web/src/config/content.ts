export interface SocialLink {
  name: string
  url: string
  icon: 'linkedin' | 'github' | 'twitter'
}

export interface Project {
  title: string
  description: string
  url?: string
  tags?: string[]
  logo?: string
}

export interface ContentConfig {
  about: string
  socialLinks: SocialLink[]
  projects: Project[]
}

export const content: ContentConfig = {
  about: `Lead QA Engineer, Developer and Founder of OmniLens.`,
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christopher-zeuch',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Hiccup-za',
      icon: 'github',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/chriszeuch',
      icon: 'twitter',
    },
  ],
  projects: [
    {
      title: 'OmniLens',
      description: 'An open-source platform for visualizing and tracking GitHub Actions workflow health.',
      url: 'https://www.omnilens.xyz/',
      logo: '/omnilens.jpeg',
    },
    {
      title: 'QA Engineering Skills',
      description: 'Skills containing commands and best practises for engineering teams.',
      url: 'https://qa-engineering-skills.vercel.app/',
      logo: '/qae-skills.png',
    },
  ],
}
