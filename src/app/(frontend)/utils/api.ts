// Define a type for property data
interface Property {
  prop_location: string
  prop_price: number
}

interface PropertyType {
  property_type: string
}

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error)
    return []
  }
}

// Fetch Properties
export const fetchProperties = async (): Promise<Property[]> => {
  return await fetchData('property')
}

// Fetch Unique Locations
export const fetchLocations = async (): Promise<string[]> => {
  const properties: Property[] = await fetchProperties()

  return [
    ...new Set(
      properties.map((property) => {
        // Ensure we extract only the city name if prop_location is an object
        if (typeof property.prop_location === 'object' && property.prop_location !== null) {
          return property.prop_location.location_city // Extract the city name
        }
        return property.prop_location as string // Return the location as string if it's already correct
      }),
    ),
  ]
}

export const fetchPropertyTypes = async (): Promise<string[]> => {
  const propertyTypes: PropertyType[] = await fetchData('propertyType')

  return propertyTypes.map((type) => type.property_type) // Extract only the names
}

// Fetch Unique Budgets
export const fetchBudgets = async (): Promise<number[]> => {
  const properties: Property[] = await fetchProperties()
  return [...new Set(properties.map((property: Property) => property.prop_price))].sort(
    (a, b) => a - b,
  )
}

// Fetch Team Members
export const fetchTeamMembers = async () => {
  return await fetchData('team')
}

// Fetch News & Blogs
export const fetchNewsBlogs = async () => {
  return await fetchData('newsblogs')
}
