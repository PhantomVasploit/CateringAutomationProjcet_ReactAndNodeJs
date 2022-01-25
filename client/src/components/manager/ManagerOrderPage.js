import {useContext} from "react";
import {UserAuthContext} from "../../contexts/UserAuthContext";
const ManagerOrderPage = () =>{
  const{user} = useContext(UserAuthContext);

  return(
    <h1 className="text-muted text-uppercase text-bold">username</h1>
  )
}

export default ManagerOrderPage;
