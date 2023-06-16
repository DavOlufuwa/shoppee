import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  typography:{
    fontFamily:[
      'Nunito'
    ]
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="text-3xl">
        Hello
      </div>
    </ThemeProvider>
  )
}

export default App
