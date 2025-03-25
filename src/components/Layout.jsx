import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/solver">Resolvedor</Link>
          <Link to="/perfil">Perfil</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{marginTop: '3rem', textAlign: 'center', color: '#666'}}>
        © {new Date().getFullYear()} MathAI - Todos os direitos reservados
      </footer>
    </div>
  )
}
