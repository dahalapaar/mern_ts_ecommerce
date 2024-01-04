import { Col, Row } from "react-bootstrap"
import { sampleProducts } from "../data"
import { Link } from "react-router-dom"
import { Product } from "../types/Product"

type State = {
  products: Product[]
  loading: boolean
  error: string
}

type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS"
      payload: Product[]
    }
  | { type: "FETCH_FAIL"; payload: string }

const initialState: State = {
  products: [],
  loading: true,
  error: "",
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true }
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false }
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const HomePage = () => {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <Link to={"/product/" + product.slug}>
            <img className="product-image" src={product.image} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default HomePage
