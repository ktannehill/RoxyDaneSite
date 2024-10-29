import Hero from '../components/Hero'
import Section from '../components/Section'

const Home = () => {
  return (
    <div>
      <Hero />
      <Section 
        title="Explore Our Books"
        content="Discover books for children, teens, and adults."
      />
      <Section 
        title="Kid's Corner"
        content="Coloring and Learning books for children."
      />
      <Section 
        title="Teens & Adults"
        content="Explore our collection of watercolor, mindfulness, and more."
      />
      <Section 
        title="About Roxy Dane"
        content="Meet Laura and her inspiration for creativity, Roxy."
      />
    </div>
  )
}

export default Home