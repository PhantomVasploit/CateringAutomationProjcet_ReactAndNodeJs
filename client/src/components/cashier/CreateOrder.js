import useAuthAxios from "../../customHooks/useAuthAxios";
import Navbar from "../Navbar";
import Loading from "../Loading";
import Error from "../Error"
import OrderCard from "./OrderCard"
const CreatOrder = () =>{
  const {data, isPending, error} = useAuthAxios("/e_menu")
  return(
    <div className="container">
      <div className="row">
      <Navbar />
      {isPending && <Loading />}
      {data && <OrderCard data={data} />}
      {error && <Error error={error} />}
      </div>
    </div>
  )
}

export default CreatOrder;
