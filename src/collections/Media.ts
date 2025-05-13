import type { CollectionConfig } from 'payload'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
  },
  upload: {
    staticDir: path.resolve('/var/www/pbrs-media'), // For linux
    // staticDir: 'media', // Folder where files will be stored
    //  staticURL: '/media/images',
    mimeTypes: ['image/*', 'video/*'], // Allow images & videos
  },
  fields: [],
}
