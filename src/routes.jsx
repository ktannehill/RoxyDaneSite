import App from "./App"
import Error from "./pages/ErrorPage"
import Home from "./pages/Home"
import BooksPage from "./pages/BooksPage"
import About from "./pages/About"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                index: true,
                element: <Home />
            },
            {
                path: "/books/:type",
                element: <BooksPage />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]

export default routes