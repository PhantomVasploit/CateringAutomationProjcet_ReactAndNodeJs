import {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext }from "../../contexts/UserAuthContext";
import ChefNavbar from "./ChefNavbar";
const ChefHome = () =>{
  const navigate = useNavigate();
  const {user} =  useContext(UserAuthContext);
  const authenticatedUser = user || JSON.parse(localStorage.getItem("authenticatedUser"));

  if(!authenticatedUser){
    navigate("/chef/login");
  }

  return(
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="container">
        <ChefNavbar />
          <h1 className="lead text-uppercase mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
          <img src="https://img.icons8.com/ios/64/000000/user-male-circle.png" alt="User Icon"/> Hi Chef {authenticatedUser.username}
          </h1>
          <div className="row justify-content-center">
            <div className="row">

              <div className="col mt-3">
                <div className="card text-center shadow p-3 mb-5 rounded">
                  <div className="card-body">
                    <h4 className="card-title text-uppercase">
                      <img src="https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-menu-restaurant-photo3ideastudio-gradient-photo3ideastudio.png" alt="Menu Icon"/>
                      <span> Day's Menu </span>
                    </h4>
                    <p className="card-text text-muted">
                      Create today's Menu.
                    </p>
                    <Link to="/chef/createMenu" className="btn btn-outline-success">Create Menu </Link>
                  </div>
                </div>
              </div>

              <div className="col  mt-3">
                <div className="card text-center shadow p-3 mb-5 rounded">
                  <div className="card-body">
                    <h4 className="card-title text-uppercase">
                      <img src="https://img.icons8.com/color/64/000000/waiter.png" alt="Orders Icon"/>
                      <span> Day's Orders </span>
                    </h4>
                    <p className="card-text text-muted">
                      Serve the today's order.
                    </p>
                    <Link to="/chef/orders" className="btn btn-outline-success">Serve Orders</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefHome;
