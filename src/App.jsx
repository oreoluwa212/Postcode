import { useState } from 'react'

import './App.scss'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import BookingSection from './components/BookingSection'
import PopularPostcode from './components/PopularPostcode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <HeroSection/>
    <BookingSection/>
    <PopularPostcode/>
    </>
  )
}

export default App
