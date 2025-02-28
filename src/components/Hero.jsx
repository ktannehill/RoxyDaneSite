import "../styles/sections.css"
import books from '../assets/data/booksData'
import { useState, useEffect } from "react";

const flattenBooks = () => {
  const allBooks = []

  Object.values(books).forEach(section => {
      Object.values(section).forEach(subsection => {
          allBooks.push(...subsection); 
      })
  })
  return allBooks
}

const shuffleArray = (arr) => {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

const Hero = () => {
  const [randomizedBooks, setRandomizedBooks] = useState([])

  useEffect(() => {
    const booksArray = shuffleArray(flattenBooks(books))
    setRandomizedBooks([...booksArray, ...booksArray])

    const updateScrollSpeed = () => {
      const container = document.querySelector(".scrolling-container")
      if (!container) return
  
      const columns = getComputedStyle(container).gridTemplateColumns.split(" ").length
      const speed = Math.min(90, 180 / columns) + "s"
      container.style.setProperty("--scroll-speed", speed)
    }
  
    updateScrollSpeed()
    window.addEventListener("resize", updateScrollSpeed)
    return () => window.removeEventListener("resize", updateScrollSpeed)
  }, [])

  return (
    <section id="hero">
      <img src="https://images.unsplash.com/photo-1694370806388-e372ee118336?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Watercolor landscape from Birmingham Museums Trust" className="background" />
      <div className="content">
        <h1>Roxy Dane</h1>
        <h3>
          Explore books for every age - watercolor templates, creative coloring, learning, and mindfulness.
        </h3>
        <h3>
          Spark creativity, fun, and relaxation today!
        </h3>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-container">
          {randomizedBooks.map((book, index) => (
            <div key={`${book.id || index}-${index >= randomizedBooks.length / 2 ? "copy" : "orig"}`} className="hero-cover">
              <img src={book.image} alt={book.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero