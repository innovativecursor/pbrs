import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
export const NewsBlogs: CollectionConfig = {
  slug: 'newsblogs',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Slug (Mandatory for page generation and SEO)',
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ value, data, originalDoc }) => {
            // If manually entered, preserve it; otherwise generate from title
            const source = value || data?.title || originalDoc?.title || ''
            return slugify(source)
          },
        ],
      },
    },
    {
      label: 'Title of the Article',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Content of the Article',
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    {
      label: 'Date of the Article',
      name: 'Date',
      type: 'date',
      required: true,
    },
  ],
  upload: true,
}
