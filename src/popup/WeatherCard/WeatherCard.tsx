import React, { useEffect, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { fetchCurrentLocationData } from '../../utils/api'
import { OpenWeatherData } from '../../utils/types'
import { Box } from '@mui/system'

const WeatherCard: React.FC<{ unit: string }> = ({ unit }) => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData>(null)

  useEffect(() => {
    fetchData(unit)
  }, [unit])

  async function fetchData(unit: string) {
    try {
      const currWeatherData = await fetchCurrentLocationData(unit)
      setWeatherData(currWeatherData)
    } catch (error) {
      console.log(error)
    }
  }

  console.log('weather data', weatherData)
  if (!weatherData) {
    return <div>Loading...</div>
  }

  return (
    <Box mx={'4px'} my={'16px'}>
      <Card>
        <CardContent>
          <Typography variant="h5">{weatherData?.name}</Typography>
          <Typography variant="body1">
            {Math.round(weatherData?.main?.temp)}
          </Typography>
          <Typography variant="body1">
            Feels Like: {Math.round(weatherData?.main?.feels_like)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default WeatherCard
