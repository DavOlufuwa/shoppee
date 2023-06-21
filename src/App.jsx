import { createTheme, ThemeProvider } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import Categories from './routes/Categories'
import Category from './routes/Category'
import Home from './routes/Home'
import ProductInfo from './routes/ProductInfo'


const theme = createTheme({

})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<Categories/>} />
      <Route path='category' element={<Category />} />
      <Route path='productinformation' element={<ProductInfo/>} />
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
