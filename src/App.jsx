import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📋 LegalSuite - Gestión de Documentos</h1>
        <p>
          Prueba técnica frontend - Desarrolla la interfaz de gestión de documentos legales
        </p>
      </header>
      <main>
        <div className="instructions">
          <h2>🎯 Funcionalidades a implementar:</h2>
          <ul>
            <li>Lista de documentos con grid responsivo</li>
            <li>Sistema de filtros (tipo, estado, cliente)</li>
            <li>Búsqueda en tiempo real</li>
            <li>Vista de detalle de documentos</li>
          </ul>
          <p>
            <strong>API disponible en:</strong> <code>http://localhost:3001/documents</code>
          </p>
        </div>
      </main>
    </div>
  )
}

export default App