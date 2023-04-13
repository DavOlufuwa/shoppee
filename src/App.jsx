import { createTheme, ThemeProvider } from '@mui/material'
import About from './components/About'
import Header from './components/Header'


const theme = createTheme({
  typography:{
    fontFamily:[
      'Manrope'
    ]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <About />
      </div>
    </ThemeProvider>
  )
}

export default App
