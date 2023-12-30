import "./App.css"
import { sampleProducts } from "./data"

function App() {
  return (
    <>
      <header>Ecommerce</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img className="product-image" src={product.image} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights reserved @Apaar</footer>
    </>
  )
}

export default App
