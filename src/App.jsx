import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📋 LegalSuite - Dashboard de Demandas</h1>
        <p>
          Prueba técnica frontend - Dashboard simple de demandas legales
        </p>
      </header>
      <main>
        <div className="instructions">
          <h2>🎯 Funcionalidades a implementar:</h2>

          <div className="feature-section">
            <h3>1. Dashboard de Demandas</h3>
            <ul>
              <li><strong>12 cards de demandas</strong> en grid responsivo</li>
              <li>Cada card muestra: <strong>Nombre, Tipo de demanda, Cliente, Descripción, Estado, Documentos</strong></li>
              <li><strong>Responsivo:</strong> 1 columna (mobile), 2-3 (tablet), 4+ (desktop)</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>2. Búsqueda Global</h3>
            <ul>
              <li>Barra de búsqueda que filtra por <strong>cualquier campo</strong> del card</li>
              <li>Búsqueda en tiempo real <strong>(implementada en el frontend con .filter())</strong></li>
              <li>Busca en: nombre, tipo de demanda, cliente, descripción</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>3. Sistema de Filtros</h3>
            <ul>
              <li><strong>Botón "Filtrar"</strong> que abre modal</li>
              <li>Filtros <strong>checkbox</strong> para selección múltiple:</li>
              <li style={{marginLeft: '20px'}}>• Por tipo de demanda</li>
              <li style={{marginLeft: '20px'}}>• Por cliente</li>
              <li style={{marginLeft: '20px'}}>• Por estado (abierta/cerrada)</li>
              <li><strong>Chips de filtros activos</strong> y botón "Resetear filtros"</li>
            </ul>
          </div>

          <div className="feature-section">
            <h3>4. Vista de Detalle</h3>
            <ul>
              <li>Click en card para <strong>ver documentos asociados</strong></li>
              <li>Modal/panel que muestra información de la demanda</li>
              <li><strong>Lista de documentos asociados</strong> (solo nombres, no descarga)</li>
            </ul>
          </div>

          <div className="api-info">
            <h3>📡 API Endpoints disponibles:</h3>
            <code>http://localhost:3001/demands</code> - Todas las demandas<br/>
            <code>http://localhost:3001/demands?demandType=laboral</code> - Filtrar por tipo<br/>
            <code>http://localhost:3001/demands?status=abierta</code> - Filtrar por estado<br/>
            <code>http://localhost:3001/available_demand_types</code> - Tipos disponibles<br/>
            <code>http://localhost:3001/available_statuses</code> - Estados disponibles<br/>
            <code>http://localhost:3001/available_clients</code> - Clientes disponibles
          </div>

          <div className="data-structure">
            <h3>📊 Estructura de datos:</h3>
            <p><strong>Cada demanda incluye:</strong></p>
            <ul>
              <li><code>id, name, client, description</code></li>
              <li><code>demandType</code>: tipo de demanda (string)</li>
              <li><code>status</code>: estado ("abierta" o "cerrada")</li>
              <li><code>documents</code>: array de documentos asociados (máximo 2)</li>
            </ul>
          </div>

          <div className="tech-stack">
            <h3>🔧 Stack requerido:</h3>
            <ul>
              <li><strong>React con Vite</strong></li>
              <li><strong>CSS/Tailwind CSS</strong> (Tailwind Recomendado)</li>
              <li><strong>Manejo de estado global</strong> (Context API o Redux Toolkit)</li>
              <li><strong>Integración con API REST</strong></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App