import type { CollectionConfig } from 'payload'

export const SimilarProperties: CollectionConfig = {
  slug: 'similar-properties',

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'base_property',
  },
  fields: [
    {
      label: 'Base Property',
      name: 'base_property',
      type: 'relationship',
      relationTo: 'property',
      required: true,
    },
    {
      label: 'Similar Properties (auto-fetched by location)',
      name: 'similar_properties',
      type: 'relationship',
      relationTo: 'property',
      hasMany: true,
      required: false,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        if (operation === 'create' || operation === 'update') {
          if (data.base_property) {
            // Get base property details to fetch location
            const property = await req.payload.findByID({
              collection: 'property' as any,
              id: data.base_property,
            })

            if (!property || !property.prop_location) {
              return data // No location to match
            }

            // Fetch similar properties by location, excluding base property
            const matchingProps = await req.payload.find({
              collection: 'property' as any,
              where: {
                and: [
                  {
                    prop_location: {
                      equals: property.prop_location.id || property.prop_location,
                    },
                  },
                  {
                    id: {
                      not_equals: data.base_property,
                    },
                  },
                ],
              },
              limit: 10,
            })

            return {
              ...data,
              similar_properties: matchingProps.docs.map((p) => p.id),
            }
          }
        }

        return data
      },
    ],
  },
}
