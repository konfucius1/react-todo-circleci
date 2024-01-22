import { ThemeProvider } from '@/components/providers/theme-provider'
import Todo from './pages/Todo'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Todo />
    </ThemeProvider>
  )
}

export default App
