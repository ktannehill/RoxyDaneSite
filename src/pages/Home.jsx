import CardGridSection from '../components/CardGridSection'
import Hero from '../components/Hero'
import ImageTextSection from '../components/ImageTextSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <CardGridSection 
        title="Explore Our Books"
        content="Discover books for children, teens, and adults."
      />
      <ImageTextSection 
        title="Kid's Corner"
        content="Coloring and Learning books for children."
      />
      <CardGridSection 
        title="Teens & Adults"
        content="Explore our collection of watercolor, mindfulness, and more."
      />
      <ImageTextSection 
        title="About Roxy Dane"
        content="Meet Laura and her inspiration for creativity, Roxy."
      />
    </div>
  )
}

export default Home