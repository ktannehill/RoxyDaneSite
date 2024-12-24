import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

const Layout = () => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div id="flex">
        <Header />
        <main id="outlet">
          <Outlet context={{ scrollToTop }} />
        </main>
        <Footer />
    </div>
  )
}

export default Layout