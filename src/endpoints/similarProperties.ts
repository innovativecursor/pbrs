// src/endpoints/similarProperties.ts
import { notEqual } from 'assert'
import { sendStatusCode } from 'next/dist/server/api-utils'
import { Endpoint, PayloadRequest, Payload } from 'payload'
// import { Response } from 'express'

const similarPropertiesEndpoint: Endpoint = {
  path: '/similarProp/:id',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const id = req.routeParams?.id as number
    const { payload } = req

    // Step 1: Get the property with populated location
    const property = await payload.findByID({
      collection: 'property',
      id,
      depth: 2,
    })
    console.log('property==>', property)
    if (!property) {
      return Response.json({
        error: 'Property not found',
        sendStatusCode: 404,
      })
    }

    // Step 2: Get the location information
    const location = property.prop_location as { id: number }
    // Step 3: Find properties with the same location
    const similarProperties = await payload.find({
      collection: 'property',
      where: {
        and: [{ prop_location: { equals: location.id } }, { id: { not_equals: id } }],
      },
      depth: 1,
      limit: 6,
    })
    return Response.json({
      similarProperties,
      sendStatusCode: 200,
    })
  },
}

export default similarPropertiesEndpoint
