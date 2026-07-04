import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const link = document.createElement('link')
link.rel = 'preload'
link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap'
link.as = 'style'
document.head.appendChild(link)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-slate-950" />}>
      <App />
    </Suspense>
  </StrictMode>,
)
