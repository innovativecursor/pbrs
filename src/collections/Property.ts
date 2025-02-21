import type { CollectionConfig } from 'payload'

export const Property: CollectionConfig = {
  slug: 'property',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Property Images',
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true, // This enables multiple images
    },
    {
      label: 'Name of the Property',
      name: 'prop_name',
      type: 'text',
      required: true,
    },
    {
      label: 'Location of the Property',
      name: 'prop_location',
      type: 'text',
      required: true,
    },
    {
      label: 'Description',
      name: 'prop_desc',
      type: 'textarea',
      defaultValue: '',
      required: false,
    },
    {
      label: 'Bedrooms',
      name: 'bedrooms',
      type: 'number',
      required: false,
    },
    {
      label: 'Bathrooms',
      name: 'bathrooms',
      type: 'number',
      required: false,
    },
    {
      label: 'Garages',
      name: 'garages',
      type: 'number',
      required: false,
    },
    {
      label: 'Size of the Property in Sq Ft',
      name: 'prop_size',
      type: 'number',
      required: false,
    },
    {
      label: 'Property Type',
      name: 'prop_type',
      type: 'text',
      required: false,
    },
    {
      label: 'Size of the Total lot Area in Sq Ft',
      name: 'lot_area',
      type: 'number',
      required: false,
    },
    {
      label: 'Destination',
      name: 'prop_destination',
      type: 'text',
      required: true,
    },
    {
      label: 'Property Status',
      name: 'prop_status',
      type: 'text',
      required: false,
    },
    {
      label: 'Ownership',
      name: 'prop_ownership',
      type: 'text',
      required: false,
    },
    {
      label: 'Year Built',
      name: 'prop_year',
      type: 'date',
      required: true,
    },
    {
      label: 'Parking Space',
      name: 'prop_pkSpace',
      type: 'text',
      required: true,
    },
    {
      label: 'Furnishing Type',
      name: 'prop_furnishing',
      type: 'text',
      required: true,
    },
    {
      label: 'Feature on Landing Page?',
      name: 'prop_featured',
      type: 'checkbox',
      required: true,
    },
  ],
}
