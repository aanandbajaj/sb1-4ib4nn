import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import TwitterAuth from './pages/TwitterAuth'
import Success from './pages/Success'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/twitter" element={<TwitterAuth />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App