import Link from 'next/link'

const Breadcrumbs = () => {
  return (
    <nav className="bg-[#71AE4C1A] w-full py-3 pt-7">
      <div className="max-w-7xl mx-auto px-4 text-gray-600 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <span>Properties</span>
        <span className="mx-2">&gt;</span>
        <span className="font-semibold">Modern Family Home - Noveleta, Cavite</span>
      </div>
    </nav>
  )
}

export default Breadcrumbs
