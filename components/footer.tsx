'use client'

import { MessageCircle, Mail, ArrowUp } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from '@/components/brand-icons'
import { site } from '@/lib/site-data'

export function Footer() {
  const socials = [
    { icon: InstagramIcon, href: site.instagram, label: 'Instagram' },
    { icon: YoutubeIcon, href: site.youtube, label: 'YouTube' },
    { icon: MessageCircle, href: site.whatsappLink, label: 'WhatsApp' },
    { icon: Mail, href: `mailto:${site.email}`, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <a href="#top" className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
                DScreationz<span className="text-primary">25</span>
              </a>
              <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                {site.tagline} — cinematic drone storytelling, videography &amp; photography by{' '}
                {site.owner}.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {site.brand}. {site.location}.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-y-1">
                <ArrowUp size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
