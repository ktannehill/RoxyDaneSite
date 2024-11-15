import CardGridSection from '../components/CardGridSection'
import Hero from '../components/Hero'
import ImageTextSection from '../components/ImageTextSection'
import homeData from '../assets/data/homeData'

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
        image="filler image"
        title="Kid's Corner"
        content="Discover coloring and learning books designed just for kids!"
      />
      <CardGridSection 
        title="Teens & Adults"
        cards={teensAdultsContent}
      />
      <ImageTextSection 
        image="filler image"
        title="About Roxy Dane"
        content="Meet Laura and her inspiration for creativity, Roxy."
        reverse
      />
    </div>
  )
}

export default Home