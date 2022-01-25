import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import { UserAuthContext }from "../../contexts/UserAuthContext";
import Navbar from "../Navbar";
const CashierHome = () =>{
  const { user } = useContext(UserAuthContext);
  const authenticatedUser = user || JSON.parse(localStorage.getItem("authenticatedUser"));
  const navigate = useNavigate();

  if(!authenticatedUser){
    navigate("/cashier/login");
  }

  return(
    <div className="row">
      <div className="col-lg-12">
        <div className="container">
          <Navbar />
          <div className="row justify-content-center">
            <div className="row">

            <div className="col mt-3">
              <div className="card text-center shadow p-3 mb-5 rounded">
                <div className="card-body">
                  <h4 className="card-title text-uppercase">
                    <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-order-food-delivery-wanicon-lineal-color-wanicon.png" alt="cutsomer order icon"/>
                    <span> Make Orders </span>
                  </h4>
                  <p className="card-text text-muted">
                    Place the customer's order...
                  </p>
                  <Link to="/cashier/createOrder"  className="btn btn-outline-success">Make Orders</Link>
                </div>
              </div>
            </div>

            <div className="col mt-3">

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashierHome;
