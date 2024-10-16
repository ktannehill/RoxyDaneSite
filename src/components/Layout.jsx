import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div id="flex">
        <Header />
        <main id="outlet">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout