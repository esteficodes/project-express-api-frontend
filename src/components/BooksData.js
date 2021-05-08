import React, { useState, useEffect } from 'react'

import BookCard from './BookCard'
import image from  '../assets/books.jpg'

const BooksData = () => {
    const [books, setBooks] = useState(undefined)
  

    const API_URL = 'https://books-by-estefi.herokuapp.com/books'

    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

   

    return (
      <>
        <header className='header'>
          <img className='books' src={image} alt="books" />
        </header>
        {!books ?
          <h1 classname='loading'>Loading...</h1>
        :
          <>
             <div className='books-container'>
             <BookCard books={books} />
             </div>
          </>
            }
      </>
    )
}

export default BooksData