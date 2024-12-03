import Header from '../components/Header'
import Footer from '../components/Footer'

const ErrorPage = () => {
  return (
    <div id="flex">
      <Header />
      <div id="outlet">
        <div className='container'>
          <h2>
            Oops!
          </h2>
          <p>
            This page hasn't been colored in yet!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage