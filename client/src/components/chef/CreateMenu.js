import {useContext} from "react";
import {UserAuthContext} from "../../contexts/UserAuthContext";
import useAuthAxios from "../../customHooks/useAuthAxios";
import ChefNavbar from "./ChefNavbar";
import Loading from "../Loading";
import Error from "../Error";
import Table from "./Table";
const CreateMenu = ()=>{
  const { user } = useContext(UserAuthContext);
  const authenticatedUser = user || JSON.parse(localStorage.getItem("authenticatedUser"));
  const {data, isPending, error} = useAuthAxios('/chef/foodItems');
  return (
    <div className="container">
      <div className="row">
      <ChefNavbar />
        { isPending && <Loading /> }
        { data && <Table data={data} user={authenticatedUser} /> }
        { error && <Error error={error} /> }
      </div>
    </div>
  )
}

export default CreateMenu;
