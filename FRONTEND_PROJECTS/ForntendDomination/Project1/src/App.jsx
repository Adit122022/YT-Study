import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
import CategoryPage from './Components/CategoryPage'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='category/:category' element={<CategoryPage/>}/>
    </Routes>
     
    </div>
  )
}

export default App