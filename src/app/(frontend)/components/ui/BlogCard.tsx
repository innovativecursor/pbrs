'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  blog: any
}

const extractText = (content: any) => {
  if (!content?.root?.children) return 'No content available'

  const text = content.root.children
    .map((child: any) => (child.children ? child.children.map((c: any) => c.text).join(' ') : ''))
    .join(' ')

  return text.length > 100 ? text.slice(0, 100) + '...' : text
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/news-and-blogs/${blog.id}`} target="_blank" rel="noopener noreferrer">
      <div className="bg-white border border-[#c6c4c4] overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
        <div className="relative">
          {blog.url && (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.url}`}
                alt={blog.title}
                width={400}
                height={250}
                priority // Forces the image to load first
                unoptimized // Avoid Next.js optimization issues
                className="object-cover w-full h-[250px] transition-transform duration-300 group-hover:scale-105"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-[20px] font-semibold">{blog.title}</h3>
          <p className="text-[#5A5A5A] text-[12px] mb-2 mt-4">{extractText(blog.content)}</p>
          <Link
            href={`/news-and-blogs/${blog.id}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read more about ${blog.title}`}
            className="text-[#71AE4C] text-[13px] font-semibold uppercase mt-3 inline-block"
          >
            Read More
          </Link>
        </div>
        <div className="p-2 border-t border-t-[#c6c4c4]">
          <p className="text-gray-600 text-[12px] flex items-center gap-2">
            {new Date(blog.Date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            <span className="text-gray-400 text-xl">•</span>
            <span className="text-[12px]">No comments</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
