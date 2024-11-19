import CardGridSection from '../components/CardGridSection'
import Hero from '../components/Hero'
import ImageTextSection from '../components/ImageTextSection'
import homeData from '../assets/data/homeData'
import authorPic from '../assets/images/author-Roxy.jpg'

const Home = () => {

  const exploreContent = homeData.find((section) => section.section === "explore").items
  const teensAdultsContent = homeData.find((section) => section.section === "teens-adults").items

  return (
    <div>
      <Hero />
      <CardGridSection 
        title="Explore Our Books"
        cards={exploreContent}
      />
      <ImageTextSection 
        image="https://images.unsplash.com/photo-1620398722262-969d8f2bc875?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Kid's Corner"
        content="Discover coloring and learning books designed just for kids!"
      />
      <CardGridSection 
        title="Teens & Adults"
        cards={teensAdultsContent}
      />
      <ImageTextSection 
        id="about"
        image={authorPic}
        title="About Roxy Dane"
        content="Meet Laura and her inspiration for creativity, Roxy."
        reverse
      />
    </div>
  )
}

export default Home