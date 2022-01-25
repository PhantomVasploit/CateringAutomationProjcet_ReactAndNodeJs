import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "./Navbar";
import {UserAuthContext} from "../../contexts/UserAuthContext";
const ManagerHome = () =>{
  const{user} = useContext(UserAuthContext);
  const authenticatedUser = user || JSON.parse(localStorage.getItem('authenticatedUser'));
  const navigate = useNavigate();
  if(!authenticatedUser){
    navigate("/manager/login");
  }

  return(
    <div className="container">
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="container">
              <Navbar />

              <div className="row">

                <div className="col-md-6 mt-4">
                  <div className="card text-center shadow p-3 rounded">
                    <div className="card-header">
                      <h1 className="lead text-uppercase">User Accounts</h1>
                      <img src="https://img.icons8.com/ios/64/000000/user-male-circle.png" alt="user icon"/>
                    </div>
                    <div className="card-body">
                      <p className="card-text text-center text-bold text-uppercase">View all user accounts</p>
                      <Link to="/manager/accounts" className="btn btn-info">User Accounts</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-4">
                  <div className="card text-center shadow p-3 rounded">
                    <div className="card-header">
                      <h1 className="lead text-uppercase">Stock</h1>
                      <img src="https://img.icons8.com/dotty/64/000000/stock-share.png" alt=""/>
                    </div>
                    <div className="card-body">
                    <p className="card-text text-center text-bold text-uppercase">View all user stock records</p>
                    <Link to="/manager/stock" className="btn btn-info">Stock</Link>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-6 mt-4">
                  <div className="card text-center shadow p-3 rounded">
                    <div className="card-header">
                      <h1 className="lead text-uppercase">Sales</h1>
                      <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-sales-due-diligence-icongeek26-outline-icongeek26.png" alt=""/>
                    </div>
                    <div className="card-body">
                    <p className="card-text text-center text-bold text-uppercase">View all user sales records</p>
                    <Link to="/manager/sales" className="btn btn-info">Sales</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-4">
                  <div className="card text-center shadow p-3 rounded">
                    <div className="card-header">
                      <h1 className="lead text-uppercase">Receipts</h1>
                      <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-sales-due-diligence-icongeek26-outline-icongeek26.png" alt=""/>
                    </div>
                    <div className="card-body">
                    <p className="card-text text-center text-bold text-uppercase">View all receipt record</p>
                    <Link to="/manager/receipt" className="btn btn-info">Receipt</Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerHome;
