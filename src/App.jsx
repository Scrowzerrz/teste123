import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Solver from './pages/Solver'
import Perfil from './pages/Perfil'
import Layout from './components/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solver" element={<Solver />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
