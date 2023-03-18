import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import WeatherCard from './WeatherCard'

const App: React.FC<{}> = () => {
  const [measurementUnit, setMeasurementUnit] = useState<string>('imperial')

  return (
    <div>
      <WeatherCard unit={measurementUnit} />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
