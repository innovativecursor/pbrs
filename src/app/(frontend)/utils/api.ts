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

export const fetchTeamMembers = async () => {
  return await fetchData('team')
}
