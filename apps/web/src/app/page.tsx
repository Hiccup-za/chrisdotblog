import Hero from '@/components/Hero'
import SocialLinks from '@/components/SocialLinks'
import Projects from '@/components/Projects'
import { content } from '@/config/content'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero about={content.about} />
      <SocialLinks links={content.socialLinks} />
      <Projects projects={content.projects} />
    </main>
  )
}
