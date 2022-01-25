import useAuthAxios from "../../customHooks/useAuthAxios";
import Loading from "../Loading";
import Navbar from "./Navbar";
import Error from "../Error";

const Receipt = ()=>{
  const {data, isPending, error} = useAuthAxios("/cashier/reciept");
  console.log(`Data is ${JSON.stringify(data)}`);
  return(
    <div className="container">
      <Navbar />
      {isPending && <Loading />}
      {
      data &&
        <div className="container mt-3">
          <div className="row">
            <div className="col">
                  {
                    data.reciept.length <= 0
                    ?
                      <div className="container mt-4">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
                            <div className="alert alert-info">
                              <h4 className="alert-heading text-uppercase">No Receipt</h4>
                              <p className=""> There are no receipt recorded</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    :
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                        <th scope="col">Food Item</th>
                        <th scope="col">Date And Time Of Order</th>
                        <th scope="col">Order Amount</th>
                        <th scope="col">Order Cost</th>
                        <th scope="col">Cashier</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        data.reciept.map((item)=>(
                          <tr>
                            <td>{item.order.e_menu.foodItem.itemName}</td>
                            <td>{item.e_menu.orderDateAndTime}</td>
                            <td>{item.e_menu.orderAmount}</td>
                            <td>{item.e_menu.orderCost}</td>
                            <td>{item.e_menu.cashier.username}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>
                  }
            </div>
          </div>
        </div>
      }
      {error && <Error error={error} />}
    </div>
  )
}

export default Receipt;
