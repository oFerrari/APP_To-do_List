import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import { Home } from './pages/Home';

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
