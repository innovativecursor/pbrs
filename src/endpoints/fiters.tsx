import { Endpoint } from 'payload'
import { PayloadRequest } from 'payload'

interface PropertyQueryParams {
  propertyType?: string
  location?: string
  budget?: string // still string here because it comes from query params
}

const filters: Endpoint = {
  path: '/properties',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const { propertyType, location, budget } = req.query as PropertyQueryParams

    const where: Record<string, any> = {}

    if (propertyType?.trim()) {
      where['prop_type.property_type'] = {
        equals: propertyType.trim(),
      }
    }

    if (location) {
      where['prop_location.location_city'] = {
        equals: location,
      }
    }

    if (budget) {
      const parsedBudget = Number(budget)
      if (!isNaN(parsedBudget)) {
        where['prop_price'] = {
          less_than_equal: parsedBudget,
        }
      }
    }

    const properties = await req.payload.find({
      collection: 'property',
      where,
    })

    return Response.json({
      properties,
      sendStatusCode: 200,
    })
  },
}

export default filters
