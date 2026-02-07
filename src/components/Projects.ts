import placeholder from '../assets/placeholder.jpg'

export type Project = {
    id: string
    slug: string
    description: string
    imageSrc: string
    href?: string
}

export const projects: Project[] = [
    {
        id: 'unix-administration',
        slug: 'unix-admin',
        description: '',
        imageSrc: placeholder,
        href: '/projects/unix-admin'
    }
]