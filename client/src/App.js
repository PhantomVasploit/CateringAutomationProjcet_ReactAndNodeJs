import './App.css';
import UserAuthContextProvider from "./contexts/UserAuthContext";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error";
import FoodItems from "./components/foodItems/FoodItems";
import CreateMenu from "./components/chef/CreateMenu";

import ManagerRegister from "./components/manager/ManagerRegister"
import ManagerLogin from "./components/manager/ManagerLogin";
import ManagerHome from "./components/manager/ManagerHome";
import ManagerOrderPage from "./components/manager/ManagerOrderPage";
import ManagerUserAccountsPage from "./components/manager/ManagerUserAccountsPage";
import Sales from "./components/manager/Sales";
import Stock from "./components/manager/Stock";
import Receipt from "./components/manager/Receipt";
import CustomerAccounts from "./components/manager/CustomerAccounts";
import CashierAccounts from "./components/manager/CashierAccounts";
import ChefAccounts from "./components/manager/ChefAccounts";
import ManagerAccounts from "./components/manager/ManagerAccounts";
import CustomerUpdate from "./components/manager/CustomerUpdate";
import CashierUpdate from "./components/manager/CashierUpdate";
import ChefUpdate from "./components/manager/ChefUpdate";
import ManagerUpdate from "./components/manager/ManagerUpdate";

import Orders from "./components/chef/Orders";
import ChefLogin from "./components/chef/ChefLogin";
import ChefRegister from "./components/chef/ChefRegister";
import ChefHome from "./components/chef/ChefHome";

import CashierLogin from "./components/cashier/CashierLogin";
import CashierRegister from "./components/cashier/CashierRegister";
import CashierHome from "./components/cashier/CashierHome";
import CreateOrder from "./components/cashier/CreateOrder";
import NextCustomer from "./components/cashier/NextCustomer";
import Cart from "./components/cashier/Cart";

import CustomerLogin from "./components/customer/CustomerLogin";
import CustomerRegister from "./components/customer/CustomerRegister";
import CustomerHome from "./components/customer/CustomerHome";
import CustomerMenu from "./components/customer/CustomerMenu";
import CustomerCart from "./components/customer/CustomerCart";
import CustomerOrders from "./components/customer/CustomerOrders";

function App() {
  return (
    <div className="App">
      <Router>
      <UserAuthContextProvider>
          <Routes>

            <Route exact path="/" element={ <LandingPage /> } />
            <Route path="/emenu" element={<FoodItems />} />
            <Route path="/error" element={<Error/>} />

            <Route path="/manager/register" element={ <ManagerRegister /> } />
            <Route path="/manager/login" element={ <ManagerLogin /> } />
            <Route path="/manager/home" element={ <ManagerHome /> } />
            <Route path="/manager/orders/:date" element={ <ManagerOrderPage/> } />
            <Route path="/manager/accounts" element={ <ManagerUserAccountsPage /> } />
            <Route path="/manager/customer" element={ <CustomerAccounts /> } />
            <Route path="/manager/cashier" element={ <CashierAccounts /> } />
            <Route path="/manager/manager" element={ <ManagerAccounts /> } />
            <Route path="/manager/chef" element={ <ChefAccounts /> } />
            <Route path="/manager/customer/update" element={<CustomerUpdate/>} />
            <Route path="/manager/cashier/update" element={<CashierUpdate/>} />
            <Route path="/manager/chef/update" element={<ChefUpdate/>} />
            <Route path="/manager/manager/update" element={<ManagerUpdate/>} />
            <Route path="/manager/sales" element={ <Sales /> } />
            <Route path="/manager/stock" element={ <Stock /> } />
            <Route path="/manager/receipt" element={ <Receipt /> } />


            <Route path="/chef/login" element={<ChefLogin />} />
            <Route path="/chef/register" element={<ChefRegister/>} />
            <Route path="/chef/home" element={<ChefHome />} />
            <Route path="/chef/createMenu" element={<CreateMenu />} />
            <Route path="/chef/orders" element={<Orders/>} />


            <Route path="/cashier/login" element={<CashierLogin />} />
            <Route path="/cashier/register" element={<CashierRegister />} />
            <Route path="/cashier/home" element={<CashierHome />} />
            <Route path="/cashier/createorder" element={<CreateOrder />} />
            <Route path="/cashier/cart" element={<Cart />} />
            <Route path="/cashier/nextCustomer" element={<NextCustomer/>} />

            <Route path="/customer/login" element={<CustomerLogin/>} />
            <Route path="/customer/register" element={<CustomerRegister/>} />
            <Route path="/customer/home" element={<CustomerHome/>} />
            <Route path="/customer/menu" element={<CustomerMenu/>} />
            <Route path="/customer/cart" element={<CustomerCart/>} />
            <Route path="/customer/orders" element={<CustomerOrders/>} />
            </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
