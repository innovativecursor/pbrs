// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { cloudinaryStorage } from 'payload-cloudinary'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Property } from './collections/Property'
import { Team } from './collections/Team'
import { Contact } from './globals/Contact'
import { NewsBlogs } from './collections/NewsBlogs'
import { Location } from './collections/Location'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Property, Team, NewsBlogs, Location],
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
    // cloudinaryStorage({
    //   config: {
    //     cloud_name: 'dpauqvsd6',
    //     api_key: '368281367779355',
    //     api_secret: 'MjkyCgAtXpBmoiGRA45q6y0MxNQ',
    //   },
    //   collections: {
    //     media: true, // Enable for media collection
    //     team: true,
    //     // property: true,
    //     // Add more collections as needed
    //   },
    //   folder: 'PBRS', // Optional, defaults to 'payload-media'
    //   disableLocalStorage: true, // Optional, defaults to true
    //   enabled: true, // Optional, defaults to true
    // }),
    payloadCloudPlugin(),
  ],
})
