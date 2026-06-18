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
  comingSoon?: boolean
}

export interface ContentConfig {
  about: string
  socialLinks: SocialLink[]
  projects: Project[]
}

export const content: ContentConfig = {
  about: `Lead QA Engineer, Developer and Founder.`,
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
      title: 'Burn',
      description: 'A menu bar app for macOS that shows your Claude usage.',
      url: 'https://burn-waitlist.vercel.app/',
      logo: '/burn-logo.png',
    },
  ],
}
