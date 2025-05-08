'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchNewsBlogs } from '../../utils/api'
import Loader from '../../components/ui/Loader'

export default function BlogDetailsPage() {
  const params = useParams()
  const id = params?.id as string

  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBlog = async () => {
      const blogs = await fetchNewsBlogs()
      const found = blogs.find((b: any) => b.id === Number(id))
      setBlog(found)
      setLoading(false)
    }

    if (id) {
      getBlog()
    }
  }, [id])

  if (loading) return <Loader />
  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found</p>

  // Render Lexical Payload-style JSON
  const renderContent = (content: any) => {
    if (!content?.root?.children) return null

    return content.root.children.map((node: any, index: number) => {
      switch (node.type) {
        case 'paragraph':
          return (
            <p key={index} className="my-2">
              {node.children?.map((child: any, i: number) => {
                if (child.type === 'text') {
                  return (
                    <span key={i} className="text-gray-800">
                      {child.text}
                    </span>
                  )
                }
                return null
              })}
            </p>
          )

        case 'list':
          return (
            <ul key={index} className="list-disc pl-6 mb-4">
              {node.children?.map((child: any, i: number) => (
                <li key={i}>{child.children?.[0]?.text}</li>
              ))}
            </ul>
          )

        default:
          return null
      }
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">{blog.title}</h1>

      {blog.url && (
        <div className="w-full relative mb-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${blog.url}`}
            alt={blog.title}
            width={blog.width || 800}
            height={blog.height || 500}
            className="object-cover rounded-lg w-full h-auto"
            unoptimized
          />
        </div>
      )}

      <div className="prose max-w-none">{renderContent(blog.content)}</div>
    </div>
  )
}
