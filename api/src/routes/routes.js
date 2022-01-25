const express = require("express");
const router = express.Router();
const { login, register, managerUpdate, managerDelete, getManagerAccounts, getManager } = require("../controller/manager/manager.auth.controller");
const { chefLogin, chefRegister, chefUpdate, chefDelete, getChefAccounts, chefAccount} = require("../controller/chef/chef.auth.controller");
const { cashierLogin, cashierRegister, cashierUpdate, cashierDelete, getCashierAccounts, cashierAccount } = require("../controller/cashier/cashier.auth.controller");
const { customerLogin, customerRegister, customerUpdate, customerDelete, getCustomerAccounts, addOrders, getCustomer, getCustomerOrders } = require("../controller/customer/customer.auth.controller");
const { getFoodItems, postFoodItems, createE_Menu, getE_Menu, createOrder, getOrders, updateE_Menu, deleteE_Menu, getSales, getStock, generateReciept, getReciept } = require("../controller/foodItems/foodItem.controller");
const {requireAuth} = require("../middleware/auth.middleware");

// manager routes
router.post("/manager/register", register);
router.post("/manager/login", login);
router.get("/manager/sales/:date", requireAuth, getSales);
router.get("/manager/stock/:date", requireAuth, getStock);
router.get("/manager", requireAuth, getManagerAccounts);
router.get("/manager/:managerId", requireAuth, getManager);
router.put("/manager/:managerId", requireAuth, managerUpdate);
router.delete("/manager/:managerId", requireAuth, managerDelete);

// chef routes
router.post("/chef/register", chefRegister);
router.post("/chef/login", chefLogin);
router.get("/chef", requireAuth, getChefAccounts);
router.get("/chef/account/:chefId", chefAccount);
router.put("/chef/:chefId", requireAuth, chefUpdate);
router.delete("/chef/:chefId", requireAuth, chefDelete);

// cashier authentication routes
router.post("/cashier/register", cashierRegister);
router.post("/cashier/login", cashierLogin);
router.get("/cashier", requireAuth, getCashierAccounts);
router.get("/cashier/account/:cashierId", cashierAccount);
router.post("/cashier/reciept/:orderId", requireAuth, generateReciept);
router.get("/cashier/reciept", requireAuth, getReciept);
router.put("/cashier/:cashierId", requireAuth, cashierUpdate);
router.delete("/cashier/:cashierId", requireAuth, cashierDelete);
router.post("/cashier/reciept/:orderId", requireAuth, generateReciept);

// customer authentication routes
router.post("/customer/register", customerRegister);
router.post("/customer/login", customerLogin);
router.get("/customer", requireAuth, getCustomerAccounts);
router.get("/customer/:customerId", getCustomer);
router.post("/customer/order/:customerId", requireAuth, addOrders);
router.get("/customer/order/:customerId", getCustomerOrders);
router.put("/customer/:customerId", requireAuth, customerUpdate);
router.delete("/customer/:customerId", requireAuth, customerDelete);

// get all the foodItems
router.get("/chef/foodItems", getFoodItems);
router.post("/foodItems", requireAuth, postFoodItems); // run this route only once when runnig the app for the very first time.

// create e_emenu
router.post("/chef/e_menu/:foodItemId/:chefId", requireAuth, createE_Menu);
router.get("/e_menu", getE_Menu);
router.put("/chef/e_menu/:foodItemId", requireAuth, updateE_Menu);
router.delete("/chef/e_menu/:foodItemId", requireAuth, deleteE_Menu);

// create order
router.post("/order/:itemOrderedId/:cashierId", requireAuth, createOrder);
router.get("/orders", getOrders);
module.exports = router;
