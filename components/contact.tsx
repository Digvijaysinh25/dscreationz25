'use client'

import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site-data'

const channels = [
  {
    label: 'WhatsApp',
    value: site.whatsapp,
    href: site.whatsappLink,
    icon: MessageCircle,
  },
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: 'Instagram',
    value: '@dscreationz25',
    href: site.instagram,
    icon: InstagramIcon,
  },
  {
    label: 'YouTube',
    value: '@digvijaysinh25',
    href: site.youtube,
    icon: YoutubeIcon,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal>
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Get in touch.
        </h2>
        <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
          Have a story worth telling? Reach out through any channel below — I&apos;d love to hear
          about your vision.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => {
          const Icon = channel.icon
          return (
            <Reveal key={channel.label} delay={i * 0.08}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/60 hover:bg-secondary/50"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={22} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="mt-1 text-lg font-semibold text-foreground">
                    {channel.value}
                  </span>
                </span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
