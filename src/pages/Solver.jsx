import React, { useState } from 'react'
import axios from 'axios'

export default function Solver() {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const mockResponse = {
        steps: [
          {
            description: "Identifiquei que esta é uma equação quadrática",
            formula: "ax² + bx + c = 0"
          },
          {
            description: "Aplicando a fórmula de Bhaskara",
            formula: "x = [-b ± √(b² - 4ac)] / 2a"
          }
        ],
        finalAnswer: "x = 2 ou x = -3"
      }
      setSolution(mockResponse)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="solver">
      <h2>Resolvedor de Problemas</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua questão de matemática, física ou química..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processando...' : 'Resolver'}
        </button>
      </form>

      {solution && (
        <div className="solution">
          <h3>Solução:</h3>
          {solution.steps.map((step, index) => (
            <div key={index} className="step">
              <p>{step.description}</p>
              {step.formula && <div className="formula">{step.formula}</div>}
            </div>
          ))}
          <div className="final-answer">
            <strong>Resposta Final:</strong> {solution.finalAnswer}
          </div>
        </div>
      )}
    </div>
  )
}
