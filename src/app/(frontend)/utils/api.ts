// Define a type for property data
interface Property {
  id: number // Property id should be a number, not a method
  prop_location: string
  prop_price: number
  meta?: {
    title?: string
    description?: string
  }
  slug: string
  prop_name: string
  images?: {
    image?: {
      url: string
    }
  }[]
}

interface PropertyType {
  property_type: string
}

interface ContactUs {
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
  emailSent: boolean
}

// Fetch Contact Info (Global Config)
interface ContactInfo {
  phone_number: number
  email: string
  address: string
}

export const fetchData = async (endpoint: string, revalidateSeconds = 0) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Disable cache completely (for always-fresh data)
      // If you're using Next.js App Router:
      // next: { revalidate: revalidateSeconds } // Uncomment this if using ISR
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

export const fetchPropertyById = async (id: string): Promise<Property | null> => {
  const allProperties = await fetchProperties()
  console.log('All Properties:', allProperties)

  // Compare the id as string to ensure proper matching
  const property = allProperties.find((prop: any) => String(prop.id) === String(id))
  console.log('Property found:', property)

  return property || null
}

export const fetchPropertyBySlug = async (slug: string): Promise<Property | null> => {
  const decodedSlug = decodeURIComponent(slug)
  const allProperties = await fetchProperties()

  const property = allProperties.find((prop: any) => String(prop.slug) === decodedSlug)
  return property || null
}

// Fetch Unique Locations
export const fetchLocations = async (): Promise<string[]> => {
  const locations = await fetchData('location') // Fetch locations from the API

  return locations.map((loc: { location_city: string }) => loc.location_city) // Extract city names
}

export const fetchLocationsCities = async () => {
  try {
    const res = await fetch('/api/location') // ✅ fix path
    if (!res.ok) throw new Error('Failed to fetch locations')
    const data = await res.json()
    return data // expected { docs: [...] }
  } catch (error) {
    console.error('Error fetching locations:', error)
    return { docs: [] }
  }
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
// Fetch Contact Us Submissions
export const fetchContactUs = async (): Promise<ContactUs[]> => {
  return await fetchData('contact-us')
}

// Fetch Contact Us Submission by ID
export const fetchContactUsById = async (id: string): Promise<ContactUs | null> => {
  const allContactUs = await fetchContactUs()
  // @ts-ignore - Ignore "unused attribute" warning
  const contact = allContactUs.find((form) => String(form.id) === String(id))
  return contact || null
}

// Submit a new Contact Us Inquiry (POST)
export const submitContactUs = async (formData: {
  fullName: string
  email: string
  phone: string
  contactMethod: string
  message: string
}): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        contactMethod: formData.contactMethod,
        message: formData.message,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error('Error submitting contact us form:', error)
    return false
  }
}

export const fetchSimilarProperties = async (id: number) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/similarProp/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data.similarProperties.docs
  } catch (error) {
    console.error(`Error fetching similar properties for id ${id}:`, error)
    return []
  }
}

export const fetchContactInfo = async (): Promise<ContactInfo | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/globals/contact`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data as ContactInfo
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return null
  }
}
