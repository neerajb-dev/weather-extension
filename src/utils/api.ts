import { OpenWeatherData } from './types'

const OPEN_WEATHER_API_KEY = '6ccae8a9be9d445717219e5298dcd124'

export async function fetchOpenWeatherData(
  lat: number,
  lon: number,
  unit: string
): Promise<OpenWeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${OPEN_WEATHER_API_KEY}`
  )

  if (!res.ok) {
    throw new Error('City Not Found')
  }

  const data: OpenWeatherData = await res.json()
  return data
}

export function getUserLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported.'))
    }
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    )
  })
}

export async function fetchCurrentLocationData(unit: string) {
  try {
    const userLocation = await getUserLocation()
    const lat = userLocation.coords.latitude
    const lon = userLocation.coords.longitude
    const currWeather = await fetchOpenWeatherData(lat, lon, unit)
    return currWeather
  } catch (error) {
    console.log(error)
  }
}
