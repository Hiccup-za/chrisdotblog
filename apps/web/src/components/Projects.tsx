import Image from 'next/image'
import type { Project } from '@/config/content'

function displayUrl(url: string): string {
  return url
    .replace(/^https?:\/\/(www\.)?/, '')
    .replace(/\/$/, '')
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) {
    return (
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-mutedForeground">
            Projects will appear here soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <ul className="space-y-0">
          {projects.map((project, index) => (
            <li
              key={project.title}
              className={index !== projects.length - 1 ? 'border-b border-border' : ''}
            >
              {project.url ? (
                <a
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : undefined}
                  rel={
                    project.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group block py-8 transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  aria-label={`View project: ${project.title}`}
                >
                  <div className="flex items-start gap-6">
                    {project.logo && (
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-2xl bg-muted/30 p-2">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 64px, 80px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-xl font-medium text-foreground group-hover:underline">
                          {project.title}
                        </h3>
                        {project.url.startsWith('http') && (
                          <span
                            className="text-sm text-mutedForeground opacity-60 flex-shrink-0 mt-0.5 truncate max-w-[12rem] sm:max-w-xs"
                            title={project.url}
                          >
                            {displayUrl(project.url)}
                          </span>
                        )}
                      </div>
                      <p className="text-base leading-relaxed text-mutedForeground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block py-8">
                  <div className="flex items-start gap-6">
                    {project.logo && (
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-2xl bg-muted/30 p-2">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 64px, 80px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h3 className="text-xl font-medium text-foreground">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-base leading-relaxed text-mutedForeground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
