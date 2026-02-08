import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  XLogoIcon,
} from '@phosphor-icons/react/ssr'
import type { SocialLink } from '@/config/content'

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <section className="py-0">
      <div className="mx-auto max-w-3xl px-6">
        <nav
          className="flex flex-wrap items-center justify-center gap-3"
          aria-label="Social links"
        >
          {links.map((link) => {
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.url.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group flex items-center rounded-lg p-2 text-mutedForeground transition-colors duration-200 hover:bg-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
                aria-label={`Visit ${link.name}`}
              >
                {link.icon === 'linkedin' && (
                  <LinkedinLogoIcon
                    className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
                {link.icon === 'github' && (
                  <GithubLogoIcon
                    className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
                {link.icon === 'twitter' && (
                  <XLogoIcon
                    className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
