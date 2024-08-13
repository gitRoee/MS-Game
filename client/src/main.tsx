import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ErrorProvider } from './hooks/useErrorContext.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ErrorProvider>
  </StrictMode>,
)
