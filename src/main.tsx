import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TicTacToeHome from './home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicTacToeHome />
  </StrictMode>,
)
