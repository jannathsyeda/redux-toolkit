import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddBooks from '../features/books/AddBooks'
import EditBooks from '../features/books/EditBooks'
import ViewBooks from '../features/books/ViewBooks'
import Navbar from '../layouts/Navbar'
import Error from '../pages/Error'
import Home from '../pages/Home'
const Index = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/show-books" element={<ViewBooks/>}></Route>
    <Route path="/add-book" element={<AddBooks/>}></Route>
    <Route path="/edit-book" element={<EditBooks/>}></Route>

    <Route path="*" element={<Error/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default Index