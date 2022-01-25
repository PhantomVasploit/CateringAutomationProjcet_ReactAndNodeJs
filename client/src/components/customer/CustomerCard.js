import {useState} from "react";
import { Link } from "react-router-dom";
import CustomerCardDetails from "./CustomerCardDetails";

const CustomerCard = ({data})=>{
const [orders, setOrders] = useState([]);
  return(
    <div className="container mt-4">
      <div className="row">
        {
          data.e_menu.map((item)=>(
            <CustomerCardDetails
            className="mb-2"
            addToCart = { item => setOrders([...orders, item]) }
            item={item}
            key={item._id} />
          ))
        }
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link className="btn btn-outline-success mb-3" to="/customer/cart" state={{orders: orders}}> Submit to Cart </Link>
      </div>
    </div>
  )
}

export default CustomerCard;
