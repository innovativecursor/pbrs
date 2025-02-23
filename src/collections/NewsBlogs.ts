import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const NewsBlogs: CollectionConfig = {
  slug: 'newsblogs',
  access: {
    read: () => true,
  },
  fields: [
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
