const words = [
  'Drone',
  'Photography',
  'Videography',
  'Events',
  'Social Media',
  'Commercial',
]

export function Marquee() {
  const items = [...words, ...words, ...words, ...words]
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-secondary/30 py-6">
      <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-semibold text-muted-foreground sm:text-4xl">
              {word}
            </span>
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  )
}
