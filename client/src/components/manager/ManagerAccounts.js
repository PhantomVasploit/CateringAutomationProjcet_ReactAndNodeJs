import useAuthAxios from "../../customHooks/useAuthAxios";
import Loading from "../Loading";
import Error from "../Error";
import ManagerCard from "./ManagerCard";
import Navbar from "./Navbar";

const CashierAccounts = ()=>{
  const {data, isPending, error} = useAuthAxios("/manager");
  return(
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="container">
          <Navbar />
          {isPending && <Loading/>}
          {error && <Error  error={error}/>}
          {
              data && <ManagerCard className="mt-4" data={data} />
          }
        </div>
      </div>
    </div>
  )
}

export default CashierAccounts;
