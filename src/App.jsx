import React from 'react'
import Dashboard from './Layout/Dashboard'
import NotFound from './Layout/NotFound'
import Home from './Layout/Home'
import User from './Layout/User'

const App = () => {
  return (
    <div>
      <Dashboard />
      <NotFound />
      <Home />
      <User />
    </div>
  )
}

export default App