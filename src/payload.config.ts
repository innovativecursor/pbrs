// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import icon from '../public/favicon.ico'
import { Media } from './collections/Media'
import { Property } from './collections/Property'
import { Team } from './collections/Team'
import { Contact } from './globals/Contact'
import { NewsBlogs } from './collections/NewsBlogs'
import { Location } from './collections/Location'
import { PropertyType } from './collections/PropertyType'
import ContactUs from './collections/ContactUs'
import similarPropertiesEndpoint from './endpoints/similarProperties'
import filters from './endpoints/fiters'
import { seoPlugin } from '@payloadcms/plugin-seo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },

    meta: {
      titleSuffix: ' - Paul Balita Realty Services',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },
  collections: [Property, PropertyType, ContactUs, Location, Team, NewsBlogs, Users, Media],
  globals: [Contact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['property', 'newsblogs'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `paulbalitarealtyservices.com - ${doc.title}`,
      generateDescription: ({ doc }) => doc.excerpt,
      generateURL: ({ doc, collectionSlug }) =>
        `https://paulbalitarealtyservices.com/${collectionSlug}/${doc?.slug}`,
    }),
    payloadCloudPlugin(),
  ],
  endpoints: [similarPropertiesEndpoint, filters],
})
