import { Navigate, useNavigate, useParams } from 'react-router-dom'
import booksData from '../assets/data/booksData'
import Card from '../components/Card'
import '../styles/sections.css'
import { useEffect } from 'react'

const BooksPage = () => {
  const { type } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if(type !== "kids" && type !== "teensadults") {
      navigate("/")
    }
    
  }, [type])

  const books = booksData.filter(book => book.type === type)
  
  const categories = [...new Set(books.map(book => book.category))]

  console.log(categories)

  return (
    <div className='container'>
      <h1>{type === "kids" ? "Kids" : "Teens and Adults"} Books</h1>
    </div>
  )
}

export default BooksPage