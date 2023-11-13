import Header from "./components/Header/Header.tsx"
import Product from "./components/Product/Product.tsx"
import Carrusel from "./components/Carrousel/Carousel.tsx"

function App() {

  return (
    <>
      <Header/>
      <Carrusel/>
      <div className="d-flex">
      <Product/>
      <Product/>
      <Product/>
      </div>
    </>
  )
}

export default App
