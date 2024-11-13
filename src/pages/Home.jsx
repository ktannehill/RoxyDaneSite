import CardGridSection from '../components/CardGridSection'
import Hero from '../components/Hero'
import ImageTextSection from '../components/ImageTextSection'

const Home = () => {

  const fillerContent = [
    {
      "image": "filler image",
      "subtitle": "Children’s Books",
      "content": "Engaging and educational books for young minds."
    },
    {
      "image": "filler image",
      "subtitle": "Watercolor Books",
      "content": "Beautifully illustrated books for artists of all ages."
    },
    {
      "image": "filler image",
      "subtitle": "Mindfulness Books",
      "content": "Books to inspire mindfulness and relaxation."
    }
  ]

  return (
    <div>
      <Hero />
      <CardGridSection 
        title="Explore Our Books"
        cards={fillerContent}
      />
      <ImageTextSection 
        image="filler image"
        title="Kid's Corner"
        content="Discover coloring and learning books designed just for kids!"
      />
      <CardGridSection 
        title="Teens & Adults"
        cards={fillerContent}
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