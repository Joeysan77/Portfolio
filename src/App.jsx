import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaBeer, FaCoffee , FaHome  , FaUser } from 'react-icons/fa';
import {Header} from './components/header.jsx'
import {Hire} from './components/hire.jsx'
import {Wfix} from './components/wfix.jsx'
import {Services} from './components/services.jsx'

function App() {
  return (
      <>
      <Header/>
      <Hire/>
      <Wfix/>
      <Services/>
      </>
  )
}

export default App
