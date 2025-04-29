import Link from 'next/link'

interface BreadcrumbsProps {
  propertyName: string
  propertyDestination: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ propertyName, propertyDestination }) => {
  return (
    <nav className="bg-[#71AE4C1A] w-full py-3 pt-7">
      <div className="max-w-7xl mx-auto px-4 text-gray-600 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/properties" className="hover:underline">
          Properties
        </Link>
        <span className="mx-2">&gt;</span>
        <span>{propertyDestination}</span>
        <span className="mx-2">&gt;</span>
        <span className="font-semibold">{propertyName}</span>
      </div>
    </nav>
  )
}

export default Breadcrumbs
