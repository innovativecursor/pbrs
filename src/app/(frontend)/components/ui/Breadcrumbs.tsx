import Link from 'next/link'

const Breadcrumbs = () => {
  return (
    <nav className="text-gray-600 text-sm">
      <Link href="/">Home</Link> &lt; Properties &lt; Modern Family Home - Noveleta, Cavite
    </nav>
  )
}

export default Breadcrumbs
