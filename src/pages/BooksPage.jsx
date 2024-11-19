import { useNavigate, useParams } from 'react-router-dom'
import booksData from '../assets/data/booksData'
import CardGridSection from '../components/CardGridSection'
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

  const categories = booksData[type]

  console.log(typeof categories)

  const mappedCategories = Object.entries(categories).map(([category, books]) => (
    <CardGridSection key={category} title={category} cards={books} />
  ))

  return (
    <div className='container'>
      <h1>{type === "kids" ? "Kids" : "Teens and Adults"} Books</h1>
      {mappedCategories}
    </div>
  )
}

export default BooksPage