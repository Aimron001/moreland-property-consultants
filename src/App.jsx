import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Listings from './pages/Listings'
import Services from './pages/Services'
import Blog from './pages/Blog'
import About from './pages/About'
import ContactUs from './pages/ContactUs'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='listing' element={<Listings />} />
          <Route path='services' element={<Services />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Route>
    </>
  ))
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
