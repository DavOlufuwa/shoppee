import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import { axiosCartItems } from './features/shopSlice'
import Categories from './routes/Categories'
import Category from './routes/Category'
import Home from './routes/Home'
import ProductInfo from './routes/ProductInfo'
import Cart from './routes/Cart'
import SavedItems from './routes/SavedItems'
import { SnackbarProvider } from 'notistack'





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<Categories/>} />
      <Route path='category' element={<Category />} />
      <Route path='productinformation' element={<ProductInfo/>} />
      <Route path='cart' element={<Cart />} />
      <Route path='savedItems' element={<SavedItems />} />
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
    <SnackbarProvider
            maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      style={{
        fontSize: '18px',
        background: '#d48bd5',
        fontWeight : '300',
        color: 'black',
        letterSpacing: '1px',
        border: '1px solid #4c49b1',
        borderRadius: '0',
        boxShadow: 'none',
      }}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  )
}

export default App
