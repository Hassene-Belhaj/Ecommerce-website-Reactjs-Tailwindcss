import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContextData from './Context/ContextData'
import ContextToggle from './Context/ContextToggle'
import ContextCart from './Context/ContextCart'
import ContextNavbarColor from './Context/ContextNavbarColor'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <ContextData>
      <ContextCart>
      <ContextToggle>
        <ContextNavbarColor>
        <React.StrictMode>     
          <App />
        </React.StrictMode>,
        </ContextNavbarColor>
      </ContextToggle>
      </ContextCart>
    </ContextData>

)
