import { useState } from 'react'
import Template from './components/Template'
import Login from './components/Login'
import { useSelector } from 'react-redux'

function App() {
  const { theme } = useSelector((state) => state.settings);

  return (
    <div className='{theme}'>
      <Template />
      <Login />
    </div>
  )
}

export default App
