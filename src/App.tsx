import { Home } from './pages/Home/index'
import './App.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...dark
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
    
  )
}

export default App
