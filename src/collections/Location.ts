import type { CollectionConfig } from 'payload'

export const Location: CollectionConfig = {
  slug: 'location', // MUST match exactly
  admin: {
    useAsTitle: 'location_city', // 👈 This will display the city name in the dropdown
  },
  fields: [
    {
      label: 'Property Images',
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: 'City Name',
      name: 'location_city',
      type: 'text',
      required: true,
    },
    {
      label: 'Name of the Province',
      name: 'location_province',
      type: 'text',
      required: true,
    },
  ],
}
