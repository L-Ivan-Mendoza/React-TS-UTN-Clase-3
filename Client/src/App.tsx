import Header from "./components/Header/Header.tsx"
import Product from "./components/Product/Product.tsx"
import Carrusel from "./components/Carrousel/Carousel.tsx"

function App() {

  return (
    <>
      <Header/>
      <Carrusel/>
      <h2 className="text-center m-3">Nuestros productos</h2>
      <div className="d-flex">
      <Product 
      name ="Producto 1" 
      description ="Descripción del producto 1"
      price = {150} sku = "caf32455" stock = {37}
      url = "https://img.freepik.com/foto-gratis/sabroso-cappuccino-italiano-tradicional-cafe-clasico-mesa-cafe-luz-dia-vista-superior-espacio-copia_1220-1334.jpg?w=740&t=st=1699897738~exp=1699898338~hmac=21e4e27e2a46c942a69c891d39c4ccc0f8b0d1bb5a217b0a545d35f6bc98d1f6" />
      <Product 
      name ="Producto 2" 
      description ="Descripción del producto 2"
      price = {300} sku = "caf23463" stock = {45}
      url = "https://img.freepik.com/foto-gratis/primer-plano-cafe-turco-servido-taza-tradicional_181624-38945.jpg?w=740&t=st=1699897867~exp=1699898467~hmac=6ff90dc8160da0705abad128dda0828e0aacb6de895371a920eca6c0e5bf9d13" />
      <Product 
      name ="Producto 3" 
      description ="Descripción del producto 3"
      price = {80} sku = "caf3342523455" stock = {12}
      url = "https://img.freepik.com/vector-gratis/ilustracion-cafe-amarillo-brillante-realista_1284-56216.jpg?w=740&t=st=1699897928~exp=1699898528~hmac=dfc511afaae52a122372fe170871ff929a0b8fb0186102e869d15b534f835fd2" />
      </div>
    </>
  )
}

export default App
