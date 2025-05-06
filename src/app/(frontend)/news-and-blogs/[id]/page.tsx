'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchNewsBlogs } from '../../utils/api'
// adjust import as per structure

export default function BlogDetailsPage() {
  const params = useParams()
  const id = params?.id as string

  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBlog = async () => {
      const blogs = await fetchNewsBlogs()
      const found = blogs.find((b: any) => b.id === Number(id)) // Ensure type match
      setBlog(found)
      setLoading(false)
    }

    if (id) {
      getBlog()
    }
  }, [id])

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found</p>

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">{blog.title}</h1>
      <div className="w-full h-64 relative mb-6">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${blog.url}`}
          alt={blog.title}
          fill
          className="object-cover rounded-lg"
          unoptimized
        />
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content?.root?.children
            ?.map((c: any) => c.children?.map((t: any) => t.text).join(' '))
            .join(' '),
        }}
      />
    </div>
  )
}
