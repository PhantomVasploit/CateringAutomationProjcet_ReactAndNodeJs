import {useContext} from "react";
import {useNavigate, Link} from "react-router-dom";
import { UserAuthContext }from "../../contexts/UserAuthContext";
import useAuthAxios from "../../customHooks/useAuthAxios";
import Navbar from "./Navbar";
import Loading from "../Loading";
import Error from "../Error";

const CustomerHome = () =>{
  const { user } = useContext(UserAuthContext);
  const authenticatedUser = user || JSON.parse(localStorage.getItem('authenticatedUser'));
  const navigate = useNavigate();
  const {data, isPending, error} = useAuthAxios(`http://127.0.0.1:5000/api/customer/${authenticatedUser._id}`);
  let totalExpenditure = 0;
  let biteCoin = 0;
  if(!authenticatedUser){
    navigate('/customer/login');
  }
  return(
    <div className="container">
      <div className="row">

        { isPending && <Loading /> }

        {
          data &&
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="container">
              <Navbar />
                <div className="row">

                <div className="d-flex justify-content-center mt-4">
                  <p className="lead">Balance</p>
                </div>

                <div className="d-flex justify-content-center">
                  <p className="text-bold">{data.customer.balance}</p>
                </div>

                  <div className="col-md-6 mt-4">
                    <div className="card text-center shadow p-3 rounded">
                      <div className="card-header">
                        <h1 className="lead">My Profile</h1>
                        <img className="mt-2" src="https://img.icons8.com/ios/100/000000/user--v1.png" alt="User Icon"/>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <p className="card-text text-start text-bold text-uppercase">Username</p>
                          </div>
                          <div className="col">
                            <p className="card-text text-end text-bold text-uppercase">{data.customer.username}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text text-start text-bold text-uppercase">Email</p>
                          </div>
                          <div className="col">
                            <p className="card-text text-end text-bold text-uppercase">{data.customer.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <p className="card-text text-start text-bold text-uppercase">Registration</p>
                          </div>
                          <div className="col">
                            <p className="card-text text-end text-bold text-uppercase">{data.customer.registrationNumber}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mt-4">
                    <div className="card text-center shadow p-3 rounded">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h1 className="lead text-uppercase">Total Expenditure</h1>
                            {
                              data.customer.orders.map((order)=>{
                                totalExpenditure += order.orderCost;
                              })
                            }
                            <p className="">KSH. {totalExpenditure}</p>
                          </div>
                          <div className="col">
                            <h1 className="badge bg-info text-uppercase">Bite Coin</h1>
                              {
                                data.customer.orders.map((order)=>{
                                  let coin = parseInt(order.orderCost)/10;
                                  biteCoin += coin
                                })
                              }
                            <p> {biteCoin} </p>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="row">
                            <div className="col">
                              <p className="card-text text-lead text-center text-uppercase">Be of the look out for our Bite Fridays and Weekends where we let you registered customers redeem Bite Coins gathered for food. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {
                    data.customer.orders.length <= 0
                    ?
                      (
                        <div className="container mt-4">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
                              <div className="alert alert-info">
                                <h4 className="alert-heading text-uppercase">No orders Made</h4>
                                <p>You've not placed an order with us before</p>
                                <Link className="btn btn-info" to="/customer/menu">Place Order</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    :
                      (
                        <div>
                          <div className="card text-center shadow p-3 rounded mt-4">
                            <div className="card-headers lead text-start">My Expenses</div>
                            <div className="card-headers text-end">
                              <Link to="/customer/orders" className="rounded-pill btn btn-outline-info text-uppercase">View all Expenses</Link>
                            </div>
                              <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <p className="card-text-start text-bold text-uppercase">Transcation Number</p>
                                </div>
                                <div className="col">
                                  <p className="card-text-start text-bold text-uppercase">Cost</p>
                                </div>
                              </div>
                              {
                                data.customer.orders.map((order)=>(
                                  <div className="row" key={data.customer._id}>
                                    <div className="col">
                                      <p className="card-text-start text-bold text-uppercase">{order._id}</p>
                                    </div>
                                    <div className="col">
                                      <p className="card-text-end text-bold text-uppercase">- KSH. {order.orderCost}</p>
                                    </div>
                                  </div>
                                ))
                              }
                              </div>
                          </div>
                          <div className="d-flex justify-content-center mt-4">
                            <Link to="/customer/menu" className="rounded-pill btn btn-outline-info text-uppercase">Place Order</Link>
                          </div>
                        </div>
                      )
                  }

                </div>
              </div>
            </div>
          </div>
        }

        { error && <Error /> }

      </div>
    </div>



  );
}

export default CustomerHome;
