import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../components";
import productData from "../productsData";

export function Product() {
    const { id } = useParams<{ id: string }>();
    const item = productData.find((item) => item.id === Number(id));
    const navigate = useNavigate();
    return (
        <div>
            <NavBar/>
            <div>
                <button onClick={() => navigate('/products')}>Back</button>
                <h1>Product</h1>
                <p>{item?.name} {item?.price}€</p>
            </div>
        </div>
    )
}