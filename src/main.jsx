import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ensure all inline font overrides are removed so Poppins renders purely
try {
  document.documentElement.style.removeProperty('--font-heading');
  document.documentElement.style.removeProperty('--font-body');
  localStorage.removeItem('wts_nova_font_theme');
  localStorage.removeItem('wts_font_preset');
} catch (e) {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
