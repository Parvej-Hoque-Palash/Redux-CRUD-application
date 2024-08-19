import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layouts/Navbar'
import ViewBooks from '../features/books/ViewBooks'
import AddBook from '../features/books/AddBook'
import Footer from '../layouts/Footer'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/show-books' element={<ViewBooks />} ></Route>
        <Route path='/add-book' element={<AddBook />} ></Route>
        <Route path='/edit-book' element={<EditBook />} ></Route>
        <Route path='*' element={<Error />} ></Route>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default Index