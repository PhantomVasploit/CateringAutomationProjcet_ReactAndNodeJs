import {useState} from "react";
import { useLocation, Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "../Navbar";

const CustomerCart = ()=>{
  const location = useLocation();
  const {orders} = location.state;
  let quantity = 1
  const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const authAxios = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  });


  orders.forEach((order) => {
      order.quantity = quantity;
      order.cashier = authenticatedUser;
      items.push(order);
  });

const decrementQuantity = (id, order)=>{
    setCurrentItem({...order, quantity: quantity-1});
    console.log(`Current Item is: ${JSON.stringify(currentItem)}`);
    const newItems = items.filter(order);
    console.log(`newItems: ${JSON.stringify(newItems)}`);
    // setItems({...newItems, currentItem});
}

const uploadOrder = ()=>{

  let data = [];
  let singleData = {};
  items.map((item)=>{
    singleData = Object.assign({}, {
                                      itemOrdered: item._id,
                                      orderAmount: item.quantity,
                                      orderCost: item.quantity * parseInt(item.foodItem.studentCafeteriaPrice)
                                    });
    data.push(singleData);
    return data;
  });
  console.log(`Data is: ${JSON.stringify(data)}`);

  const setRequestOption = (item) => {

    const requestOption = {
      headers:{
        "Access-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept": "application/json"
      },
      body: item
    }
    console.log(`Response Data is: ${JSON.stringify(requestOption)}`);
    return requestOption;
  }

  data.map(async(item)=>{
    const response = await authAxios.post(`/customer/order/${authenticatedUser._id}/`, setRequestOption(item));
    console.log(`Response is ${JSON.stringify(response)}`);
  })

}

  return(
    <div className="row">
      <div className="container">
        <div className="container">
          <Navbar />

          <h1 className="lead text-uppercase mt-5 float-md-center">
            <hr/>
              <img src="https://img.icons8.com/nolan/64/food-cart.png" alt="cart icon"/> Cart
              <hr/>
          </h1>

          <div className="row">
            <div className="col">
              <Link to="/cashier/createorder" className="btn btn-outline-success">Back To Menu</Link>
            </div>
            <div className="col">
              <h1 className="badge bg-success text-uppercase">Pay via Mpesa</h1>
            </div>
            <div className="col">
              <h1 className="badge bg-danger text-uppercase">Pay via Airtel Money</h1>
            </div>
            <div className="col">
              <h1 className="badge bg-info text-uppercase">Pay via TKash</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <hr />
              <h3 className="lead text-uppercase">Items Added To Your Food Cart({orders.length})</h3>
              {
                !orders
                ?
                <p className="badge bg-primary text-wrap text-center"></p>
                :
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Food Item</th>
                      <th scope="col">Staff Price</th>
                      <th scope="col">Student Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Cost</th>
                    </tr>
                  </thead>
                    <tbody>
                      {
                        items.map((order)=>(
                          <tr key={order.foodItem._id}>
                            <th scope="row">{order.foodItem.itemName}</th>
                            <td>{order.foodItem.staffCafeteriaPrice}</td>
                            <td>{order.foodItem.studentCafeteriaPrice}</td>
                            <td>
                              <div className="row">
                                <div className="col">
                                  <button
                                  className="btn btn-info btn-sm"
                                  onClick = {
                                    ()=>{
                                      console.log(`order: ${JSON.stringify(order)}`);
                                      decrementQuantity(order._id, order);
                                    }}
                                  >-</button>
                                </div>
                                <div className="col">
                                  <p>{order.quantity}</p>
                                </div>
                                <div className="col">
                                  <button
                                  className="btn btn-info btn-sm"
                                  onClick = {
                                    ()=>{
                                      setItems((prevState)=>{
                                        prevState.items.map((item)=>{
                                          if(item._id === order._id){
                                            return {...item, quantity: quantity + 1}
                                          }else {
                                            return item
                                          }
                                        })
                                      })
                                    }
                                  }>+</button>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="ms-2">{quantity * parseInt(order.foodItem.studentCafeteriaPrice)}</p>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                </table>
              }
              <div className="d-flex justify-content-center mt-4">
                <Link
                to="/customer/home"
                className="btn btn-outline-success"
                onClick = {()=>{uploadOrder(); }}
                > Check Out </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCart;
