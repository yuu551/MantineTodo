import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./index.css"


const theme = createTheme({
  /** Put your mantine theme override here */
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
)
