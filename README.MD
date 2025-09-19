# 📋 Prueba Técnica Frontend - LegalSuite

## 🎯 Objetivo

Desarrollar un **dashboard simple de demandas legales** utilizando React 18. Es una prueba sencilla que muestra 12 cards de demandas con funcionalidades básicas de búsqueda y filtrado.

## ⚙️ Configuración

### Instalación
```bash
npm install
```

### Levantar servicios
```bash
# API fake (puerto 3001)
npm run server

# Frontend (puerto 5173)
npm run dev

# Ambos servicios
npm run dev:full
```

## 🔧 Stack Requerido

- **React con Vite**
- **CSS/Tailwind CSS (Tailwind Recomendado)**
- **Manejo de estado global** (Context API o Redux Toolkit)
- **Integración con API REST**


## ✨ Funcionalidades a Implementar

### 1. Dashboard de Demandas
- **12 cards de demandas** en grid responsivo
- Cada card muestra:
  - **Nombre** de la demanda
  - **Tipo de demanda** (single tag/chip)
  - **Cliente**
  - **Descripción**
  - **Estado** (abierta/cerrada)
  - **Documentos asociados** (máximo 2)
- **Responsivo:** 1 columna (mobile), 2-3 (tablet), 4+ (desktop)

### 2. Búsqueda Global
- Barra de búsqueda que filtra por **cualquier campo** del card
- Búsqueda en tiempo real
- Busca en: nombre, tipo de demanda, cliente, descripción

### 3. Sistema de Filtros
- **Botón "Filtrar"** que abre modal
- Modal con filtros **checkbox** para selección múltiple:
  - Por tipo de demanda
  - Por cliente
  - Por estado (abierta/cerrada)
- **Chips de filtros activos** visibles debajo de la búsqueda
- Opción de **quitar filtros uno por uno** (click en chip)
- Botón **"Resetear filtros"**
- Botón **"Aplicar filtros"** en el modal

### 4. Vista de Detalle
- Click en card para **ver documentos asociados**
- Modal/panel que muestra:
  - Información de la demanda
  - **Lista de documentos asociados** (solo nombres, no descarga)
- Botón cerrar para volver al dashboard

## 📡 API Endpoints

API disponible en `http://localhost:3001`:

```bash
GET /demands                               # Todas las demandas (12 items)
GET /demands?q=busqueda                   # Búsqueda global en todos los campos
GET /demands?demandType=laboral          # Filtrar por tipo de demanda exacto
GET /demands?status=abierta               # Filtrar por estado exacto
GET /demands?client=Pedro%20Martínez%20García  # Filtrar por cliente exacto (URL encoded)
GET /demands?demandType=civil&status=cerrada   # Filtros combinados
GET /available_demand_types               # Todos los tipos de demanda disponibles
GET /available_statuses                   # Todos los estados disponibles
GET /available_clients                    # Todos los clientes disponibles
```

### Estructura de Datos
Cada demanda incluye:
- `id`, `name`, `client`, `description`
- `demandType`: tipo de demanda (string)
- `status`: estado de la demanda ("abierta" o "cerrada")
- `documents`: array de documentos asociados (máximo 2)

## 📝 Entregables

1. **Repositorio en GitHub** con código fuente
2. **Aplicación funcionando** con todas las funcionalidades
3. **Responsive design** funcionando en móvil, tablet y desktop

## 💡 Consejos

- Enfócate en la **funcionalidad** y que se vea bien
- El **design system de Figma** es tu guía principal, revisa el prototipo para ver las formas de abrir el modal en móvil y desktop.
- **Pregunta si tienes dudas** durante el desarrollo

---

¡Desarrolla la solución paso a paso y envía el enlace del repositorio cuando esté listo!