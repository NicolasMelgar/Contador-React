import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contador } from './Contador/Contador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador value={0}/>
  </React.StrictMode>,
)
