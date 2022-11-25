import React from 'react'
import {BrowerRouter,Routes,Route} from "react-router-dom"
import Error from '../pages/Error'
import Home from '../pages/Home'
const index = () => {
  return (
   <BrowerRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="*" element={<Error/>}></Route>
   </Routes>
   </BrowerRouter>
  )
}

export default index