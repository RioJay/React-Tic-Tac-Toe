import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import TicTacToeHome from './components/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicTacToeHome />
  </StrictMode>,
)
