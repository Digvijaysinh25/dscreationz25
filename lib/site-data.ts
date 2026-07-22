export const site = {
  brand: 'DScreationz25',
  tagline: 'Visual Stories. Lasting Impact.',
  owner: 'Digvijaysinh S. Vala',
  location: 'Gandhinagar, Gujarat, India',
  roles: ['Digital Creator', 'Videographer', 'Drone Storytelling', 'Photography', 'Social Media'],
  whatsapp: '+917383430494',
  whatsappLink: 'https://wa.me/917383430494',
  email: 'digvijaysinh.work@gmail.com',
  instagram: 'https://instagram.com/dscreationz25',
  youtube: 'https://youtube.com/@digvijaysinh25',
}

export type Category = {
  title: string
  description: string
  image: string
  span?: string
}

export const categories: Category[] = [
  {
    title: 'Drone',
    description: 'Sweeping aerial cinematography that reveals a story from above.',
    image: '/gallery/drone.png',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Photography',
    description: 'Frames that hold emotion long after the moment has passed.',
    image: '/gallery/photography.png',
  },
  {
    title: 'Videography',
    description: 'Cinematic edits crafted with rhythm, motion and intent.',
    image: '/gallery/videography.png',
  },
  {
    title: 'Events',
    description: 'Capturing the energy and detail of unforgettable occasions.',
    image: '/gallery/events.png',
    span: 'md:col-span-2',
  },
  {
    title: 'Social Media',
    description: 'Scroll-stopping content built for reach and resonance.',
    image: '/gallery/social.png',
  },
  {
    title: 'Commercial',
    description: 'Premium brand visuals that sell the feeling, not just the product.',
    image: '/gallery/commercial.png',
  },
]
