interface HeroProps {
  about: string
}

export default function Hero({ about }: HeroProps) {
  return (
    <section className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hi, I&apos;m Chris
        </h1>
        <p className="text-lg leading-relaxed text-mutedForeground sm:text-xl md:text-2xl">
          {about}
        </p>
      </div>
    </section>
  )
}
