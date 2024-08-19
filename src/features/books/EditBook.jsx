import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BooksSlice'

const EditBook = () => {
  const location = useLocation()
  console.log(location)
  const [ id, setId] = useState(location.state.id)
  const [ title, setTitle] = useState(location.state.title)
  const [ author, setAuthor] = useState(location.state.author)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({id, title, author}));
    navigate("/show-books", {replace: true})
  }
  return (
    <div>
        <h1>Edit Book...</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input 
            type="title" 
            id='title' 
            name='title' 
            value={title} 
            onChange={(e) => setTitle(e.target.value) } 
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input 
            type="author" 
            id='author' 
            name='author' 
            value={author} 
            onChange={(e) => setAuthor(e.target.value) } 
            required
          />
        </div>
        <div>
          <button type='submit'>Update Book</button>
        </div>
      </form>
    </div>
  )
}

export default EditBook