import { CircularProgress, createTheme, ThemeProvider } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import { axiosCartItems } from './features/shopSlice'
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

const {isLoading, isError} = useSelector((state)=> state.shop)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(axiosCartItems())
}, [])


if(isLoading || isError){
  return(
    <div className='w-full min-h-screen flex flex-col gap-4 items-center justify-center'>
      <CircularProgress sx={{color: '#b744b8'}} />
      <p className='text-3xl text-primary-brand font-bold'>Loading...</p>
    </div>
  )           
}



  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
