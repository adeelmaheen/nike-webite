import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
    </Link>
  )
}

