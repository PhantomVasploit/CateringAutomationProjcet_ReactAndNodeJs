import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const UserAuthContext= createContext();


const UserAuthContextProvider = (props)=>{
  const[user, setUser] = useState(null);
  const[token, setToken] = useState(null);
  const navigate = useNavigate();

  const addUser = (user)=>{
      setUser(user);
      localStorage.setItem('authenticatedUser', JSON.stringify(user));
  }

  const addToken = (token)=>{
    setToken(token);
    localStorage.setItem('jwt', token);
  }

  const managerLoginSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/manager/login", requestOption);
    console.log(`Response is: ${response}`);
    await addUser(response.data.manager);
    await addToken(response.data.token);
    navigate("/manager/home");
  }

  const chefLoginSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Values: ${values}`);
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/chef/login", requestOption);
    console.log(`Response is: ${response}`);
    await addUser(response.data.chef);
    await addToken(response.data.token);
    navigate("/chef/home");
  }

  const cashierLoginSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Values: ${values}`);
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/cashier/login", requestOption);
    console.log(`Response is: ${response}`);
    await addUser(response.data.cashier);
    await addToken(response.data.token);
    navigate("/cashier/home");
  }

  const customerLoginSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Values: ${values}`);
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/customer/login", requestOption);
    console.log(`Response is: ${response}`);
    await addUser(response.data.customer);
    await addToken(response.data.token);
    navigate("/customer/home");
  }

  const managerRegisterSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/manager/register", requestOption);
    console.log(`Response is: ${response}`);
    await addUser(response.data.manager);
    await addToken(response.data.token);
    navigate("/manager/home");
  }

  const chefRegisterSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/chef/register", requestOption);
    console.log(`Response is: ${response.data}`);
    await addUser(response.data.chef);
    await addToken(response.data.token);
    navigate("/chef/home");
  }

  const cashierRegisterSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/cashier/register", requestOption);
    console.log(`Response is: ${response.data}`);
    await addUser(response.data.cashier);
    await addToken(response.data.token);
    navigate("/cashier/home");
  }

  const customerRegisterSubmit = async (values)=>{
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      },
      body: JSON.stringify(values)
    }
    console.log(`Request is: ${requestOption}`);
    const response = await axios.post("http://127.0.0.1:5000/api/customer/register", requestOption);
    console.log(`Response is: ${response.data}`);
    await addUser(response.data.customer);
    await addToken(response.data.token);
    navigate("/customer/home");
  }

  return(
    <UserAuthContext.Provider value={{token, user, managerLoginSubmit, managerRegisterSubmit, chefLoginSubmit, chefRegisterSubmit, cashierLoginSubmit, cashierRegisterSubmit, customerLoginSubmit, customerRegisterSubmit}}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContextProvider;
