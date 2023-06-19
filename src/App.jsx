import { createTheme, ThemeProvider } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import Categories from './routes/Categories'
import Home from './routes/Home'


const theme = createTheme({

})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<Categories/>} />
    </Route>
  )
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
