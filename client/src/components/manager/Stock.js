import useAuthAxios from "../../customHooks/useAuthAxios";
import Loading from "../Loading";
import Navbar from "./Navbar";
import Error from "../Error";

const Stock = ()=>{
  const {data, isPending, error} = useAuthAxios("/e_menu");
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
                    data.e_menu.length <= 0
                    ?
                      <div className="container mt-4">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
                            <div className="alert alert-info">
                              <h4 className="alert-heading text-uppercase">No Stock</h4>
                              <p className=""> There are no stock recorded</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    :
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                        <th scope="col">Food Item</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount Prepared</th>
                        <th scope="col">Chef</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        data.e_menu.map((item)=>(
                          <tr>
                            <td>{item.foodItem.itemName}</td>
                            <td>{item.date}</td>
                            <td>{item.amountPrepared}</td>
                            <td>{item.chef.username}</td>
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

export default Stock;
