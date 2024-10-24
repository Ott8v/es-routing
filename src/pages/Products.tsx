import { useNavigate } from "react-router-dom"
import { NavBar } from "../components"
import productData from "../productsData"

export function Products() {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar/>
            <div>
                <h1>Products</h1>
                <div style={{display:'flex', flexDirection:'row', gap: '10px'}}>
                    {productData.map((product) => (
                        <div key={product.id} style={{border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}} 
                        onClick={() =>{
                            navigate(`/products/${product.id}`)
                        }}>
                            <h2>{product.name}</h2>
                            <p>{product.price}€</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}