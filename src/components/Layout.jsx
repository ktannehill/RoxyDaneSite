import { useEffect, useRef } from "react"
import { useLocation, Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const aboutRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [location.hash])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <div id="flex">
        <Header />
        <main id="outlet">
          <div ref={aboutRef}>
            <Outlet context={{ scrollToTop }} />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout