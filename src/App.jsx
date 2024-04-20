import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ImagesContainer from './components/ImagesContainer'
import Test from './components/Test'
import { BrowserRouter, Outlet, Route, Routes, json, useParams, useSearchParams } from 'react-router-dom'
import Home from './routes/Image'
import Root from './routes/Root'
import NotFound from './routes/NotFound'



const User = () => {

  const { username } = useParams()

  const [q] = useSearchParams()

  const x = q.get("x")




  return <>
    <h1>User: {username}</h1>
    <>
      x: {x}
    </>
    <Outlet />
  </>
}



export default function App() {
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/image' element={<Home />} />

        <Route path='/user'>
          <Route path=':username' element={<h1>
            {<User />}
          </h1>} />
          <Route path='create' element={<h1>create user</h1>} />
          <Route path='update' element={<h1>update user</h1>} />
          <Route path='update' element={<h1>update user</h1>} />
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>

    </BrowserRouter >


  )
}

