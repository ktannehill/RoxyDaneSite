import { useNavigate, useParams, useOutletContext } from 'react-router-dom'
import { useEffect } from 'react'
import booksData from '../assets/data/booksData'
import CardGridSection from '../components/CardGridSection'
import '../styles/sections.css'

const BooksPage = () => {
  const { type } = useParams()
  const navigate = useNavigate()
  const { scrollToTop } = useOutletContext()

  useEffect(() => {
    if(type !== "kids" && type !== "teensadults") {
      navigate("/")
    }

    scrollToTop()
    
  }, [type, scrollToTop])

  const categories = booksData[type]

  const mappedCategories = Object.entries(categories).map(([category, books]) => (
    <CardGridSection key={category} title={category} cards={books} />
  ))

  return (
    <div>
      <h1  className='container'>
        {type === "kids" ? "Kids" : "Teens and Adults"} Books
      </h1>
      {mappedCategories}
    </div>
  )
}

export default BooksPage