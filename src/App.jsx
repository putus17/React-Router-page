import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import NavBar from './Component/NavBar'
import { AppRoutes } from './Component/AppRoutes'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (  
    <BrowserRouter>
      <div className='app'>
        <NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
        <section className='page-container'>
          <AppRoutes
            handleLogin={handleLogin}
            isAuthenticated={isAuthenticated}
          />
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App