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
    if(type !== "kids" && type !== "teens" && type !== "adults") {
      navigate("/")
    }
    scrollToTop()
  }, [type, scrollToTop])

  const categories = booksData[type]

  const mappedCategories = Object.entries(categories).map(([category, books]) => (
    <CardGridSection key={category} title={category} cards={books} page="books" />
  ))

  const typeTitle = type.charAt(0).toUpperCase() + type.slice(1)

  return (
    <div>
      <h1  className='container'>
        {typeTitle} Books
      </h1>
      {mappedCategories}
    </div>
  )
}

export default BooksPage