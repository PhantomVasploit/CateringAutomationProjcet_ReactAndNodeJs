import useAuthAxios from "../../customHooks/useAuthAxios";
import Navbar from "../Navbar";
import Error from "../Error";
import Loading from "../Loading";
import Card from "./Card";

const FoodItems = ()=>{
  const {data, isPending, error} = useAuthAxios("http://127.0.0.1:5000/api/e_menu");
  return(
    <div className="row">
      <div className="col-lg-12 bg-image backgroundImage ">
      <div className="container">
        <Navbar />
        <div className="row">
          { isPending && <Loading />}
          { data && <Card data={data} />}
          { error && <Error error={error} /> }
        </div>
      </div>
      </div>
    </div>

  );
}

export default FoodItems;
