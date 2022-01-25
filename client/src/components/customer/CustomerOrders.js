import useAuthAxios from "../../customHooks/useAuthAxios";
import CustomerTableRow from "./CustomerTableRow";
import Navbar from "./Navbar";
import Loading from "../Loading";
import Error from "../Error";
const CustomerOrders = ()=>{
  const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
  const {data, isPending, error} = useAuthAxios(`/customer/order/${authenticatedUser._id}`);
  return(
    <div>
      {isPending && <Loading/>}
      {error && <Error error={error}/>}
      {
        data &&
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <Navbar />
              <table className="table table-striped table-hover mt-4">
                <thead>
                  <tr>
                    <th scope="col">Transcation Number</th>
                    <th scope="col">Food Item</th>
                    <th scope="col">Amount Ordered</th>
                    <th scope="col">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.customer.orders.map((order)=>(
                      <CustomerTableRow order={order} key={order.e_menu._id} />
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CustomerOrders;
