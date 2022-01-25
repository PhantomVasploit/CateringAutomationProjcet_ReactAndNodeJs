import {Link} from "react-router-dom";
import Navbar from "./Navbar"

const ManagerUserAccountsPage = () =>{

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
                      <h1 className="lead text-uppercase">Customer Accounts</h1>
                      <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-customer-business-and-management-kiranshastry-solid-kiranshastry.png" alt=""/>
                    </div>
                    <div className="card-body">
                      <p className="card-text text-center text-bold text-uppercase">View all customer accounts</p>
                      <Link to="/manager/customer" className="btn btn-info">Customer Accounts</Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mt-4">
                  <div className="card text-center shadow p-3 rounded">
                    <div className="card-header">
                      <h1 className="lead text-uppercase">Cashier Accounts</h1>
                      <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-cashier-female-occupation-avatar-itim2101-lineal-itim2101-1.png" alt=""/>
                    </div>
                    <div className="card-body">
                    <p className="card-text text-center text-bold text-uppercase">View all cashier</p>
                    <Link to="/manager/cashier" className="btn btn-info">Cashier Accounts</Link>
                    </div>
                  </div>
                </div>



                  <div className="col-md-6 mt-4">
                    <div className="card text-center shadow p-3 rounded ">
                      <div className="card-header">
                        <h1 className="lead text-uppercase">Chef Accounts</h1>
                        <img src="https://img.icons8.com/glyph-neue/64/000000/cook-male.png" alt=""/>
                      </div>
                      <div className="card-body">
                      <p className="card-text text-center text-bold text-uppercase">View all chef accounts</p>
                      <Link to="/manager/chef" className="btn btn-info">Cashier Accounts</Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className="card text-center shadow p-3 rounded ">
                      <div className="card-header">
                        <h1 className="lead text-uppercase">Manager Accounts</h1>
                        <img src="https://img.icons8.com/ios-glyphs/64/000000/manager--v3.png" alt=""/>
                      </div>
                      <div className="card-body">
                      <p className="card-text text-center text-bold text-uppercase">View all manager accounts</p>
                      <Link to="/manager/manager" className="btn btn-info">Manager Accounts</Link>
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

export default ManagerUserAccountsPage;
