import React from 'react'

export default function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo ao <span style={{color: '#4361ee'}}>MathAI</span></h1>
      <p>Seu tutor inteligente para exatas</p>
      
      <div className="features">
        <div className="feature-card">
          <h3>📚 Resolução Passo a Passo</h3>
          <p>Entenda cada etapa da solução com explicações detalhadas</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Adaptado ao Seu Nível</h3>
          <p>Explicações personalizadas de acordo com seu conhecimento</p>
        </div>
        <div className="feature-card">
          <h3>💡 Feedback Inteligente</h3>
          <p>Identifica seus pontos fracos e sugere melhorias</p>
        </div>
      </div>
    </div>
  )
}
