import { createTheme, ThemeProvider } from '@mui/material'
import About from './components/About'
import Blog from './components/Blog'
import Header from './components/Header'
import Properties from './components/Properties'
import Testimonials from './components/Testimonials'


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
        <Properties />
        <Blog />
        <Testimonials />
      </div>
    </ThemeProvider>
  )
}

export default App
