import { Link } from "react-router-dom"
import ProductItem from "../ProductItem/ProductItem"
import "./Home.css"
const Home = () => {
    let products = [
        {
            "id":1,
            "name":"Product 1",
            "description":"This is product 1",
            "price":100,
            "image": "https://picsum.photos/id/1/150/150",
        },
        {
            "id":2,
            "name":"Product 2",
            "description":"This is product 2",
            "price":200,
            "image": "https://picsum.photos/id/1/150/150"
        },
        {
            "id":3,
            "name":"Product 3",
            "description":"This is product 3",
            "price":300,
            "image": "https://picsum.photos/id/1/150/150",
        },
        {
            "id":4,
            "name":"Product 4",
            "description":"This is product 4",
            "price":400,
            "image": "https://picsum.photos/id/1/150/150"
        },
        {
            "id":5,
            "name":"Product 5",
            "description":"This is product 5",
            "price":500,
            "image": "https://picsum.photos/id/1/150/150",
        },
        {
            "id":6,
            "name":"Product 6",
            "description":"This is product 6",
            "price":600,
            "image": "https://picsum.photos/id/1/150/150",
        },
        {
            "id":7,
            "name":"Product 7",
            "description":"This is product 7",
            "price":700,
            "image": "https://picsum.photos/id/1/150/150"
        }
    ]
    
  return (
    <section className="main">
      {products.map((product:any)=>{
        return (
            <Link key={product.id} to={`/product/${product.id}`}>
                <ProductItem key={product.id} product={product}/>    
            </Link>
        )
      })}
    </section>
  )
}

export default Home
