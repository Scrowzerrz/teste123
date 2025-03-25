import React, { useState } from 'react'

export default function Perfil() {
  const [nivel, setNivel] = useState('intermediário')
  const [pontos, setPontos] = useState(150)

  return (
    <div className="perfil">
      <h2>Seu Perfil</h2>
      <div className="info">
        <p><strong>Nível:</strong> {nivel}</p>
        <p><strong>Pontos:</strong> {pontos}</p>
      </div>
      <div className="badges">
        <h3>Conquistas</h3>
        <div className="badge">Resolvedor de Problemas</div>
        <div className="badge">Curioso</div>
      </div>
    </div>
  )
}
