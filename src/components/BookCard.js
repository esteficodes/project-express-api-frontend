import React from 'react'
import image from '../assets/book.jpg'


const BookCard = ({ books, visible }) => {
    return (
        <>
          {books.slice(0,visible).map(book => ( 
             <div className='book-item' key={book.id}>
             <img className='image' src={image} alt="book and glasses"/>
             <p className='book-title'>{book.title}</p>
             </div>
          ))
             }
        </>
    )
}

export default BookCard