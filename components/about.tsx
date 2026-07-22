'use client'

import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site-data'

const stats = [
  { value: '6+', label: 'Years Creating' },
  { value: '300+', label: 'Projects Delivered' },
  { value: '50M+', label: 'Views Generated' },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">About</span>
      </Reveal>

      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              A creative digital storyteller turning fleeting moments into{' '}
              <span className="text-primary">lasting impact.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m {site.owner} — the eyes and hands behind {site.brand}. Based in{' '}
                {site.location}, I craft cinematic visual stories across drone, photography and
                videography that make brands and people feel unforgettable.
              </p>
              <p>
                From soaring aerial narratives to intimate frames on the ground, every project is
                built on emotion, detail and a relentless pursuit of the perfect shot. I don&apos;t
                just capture what happened — I capture how it felt.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/portrait.png"
                alt={`Portrait of ${site.owner}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="bg-background">
            <div className="flex flex-col gap-2 p-8">
              <span className="font-display text-4xl font-bold text-primary sm:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
