import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import { fetchCurrentLocationData } from '../utils/api'
import { OpenWeatherData } from '../utils/types'

const App: React.FC<{}> = () => {
  const [weatherData, setWeatherData] = useState<OpenWeatherData>(null)
  const [unit, setUnit] = useState<string>('metric')

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

  return (
    <div>
      <img src="icon.png" alt="" />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
