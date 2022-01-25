const mongoose = require("mongoose");
const FoodItem = require("../../models/foodItems.model");
const E_Menu = require("../../models/e_menu.model");
const {Order} = require("../../models/order.model");
const Reciept = require("../../models/reciept.model");


module.exports.getFoodItems = async (req, res)=>{
    try {
      const foodItems = await FoodItem.find({});
      if(foodItems)
      {
        console.log("Fetch successful");
        return res.status(200).json({"Message": "Fetch successful", foodItems});
      }else{
        console.log("Fetch failed");
        return res.status(401).json({"Message": "Fetch Failed"});
      }
    } catch (e) {
      console.log(`Error at the foodItems handler: ${e.message}`);
    }
}

// seeding the database with the data
module.exports.postFoodItems = (req, res)=>{

  let data = [
  {"itemName":"ALVARO","codeNumber":"001","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"AROMATIC RICE-","codeNumber":"002","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"BREAD-1/4 loaf","codeNumber":"003","staffCafeteriaPrice":"15.00","studentCafeteriaPrice":"11.00"},
  {"itemName":"BEEF","codeNumber":"004","staffCafeteriaPrice":"90.00","studentCafeteriaPrice":"84.00"},
  {"itemName":"BEANS STEW","codeNumber":"005","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"BANDIKA","codeNumber":"006","staffCafeteriaPrice":"15.00","studentCafeteriaPrice":"15.00"},
  {"itemName":"BEEF BURGER","codeNumber":"007","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"BONES","codeNumber":"008","staffCafeteriaPrice":"100.00","studentCafeteriaPrice":"100.00"},
  {"itemName":"BLACK FOREST CAKES","codeNumber":"009","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"60.00"},
  {"itemName":"FRIED STEAK - BEEF","codeNumber":"010","staffCafeteriaPrice":"350.00","studentCafeteriaPrice":"350.00"},
  {"itemName":"COFFEE BLACK","codeNumber":"011","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"6.00"},
  {"itemName":"COFFEE WHITE","codeNumber":"012","staffCafeteriaPrice":"25.00","studentCafeteriaPrice":"15.00"},
  {"itemName":"CHAPATI","codeNumber":"013","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"CABBAGES FRIED","codeNumber":"014","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"CHIPS","codeNumber":"015","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"60.00"},
  {"itemName":"CAKE - SOFT","codeNumber":"016","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"CHICKEN","codeNumber":"017","staffCafeteriaPrice":"150.00","studentCafeteriaPrice":"150.00"},
  {"itemName":"CHOCOLATE -DRINKING","codeNumber":"018","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"SMALL BOTLED WATER","codeNumber":"019","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"GRILLED CHICKEN","codeNumber":"020","staffCafeteriaPrice":"350.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"CHOCOLATE - SPOON","codeNumber":"021","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"CHICKEN STEW-LOCAL","codeNumber":"022","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"DOUGHNUT","codeNumber":"023","staffCafeteriaPrice":"25.00","studentCafeteriaPrice":"25.00"},
  {"itemName":"MUTHOKOI","codeNumber":"024","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"EGG - BOILED","codeNumber":"025","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"15.00"},
  {"itemName":"EGG - FRIED","codeNumber":"026","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"EGG - SAVOURY","codeNumber":"027","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"FRUITS","codeNumber":"028","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"FRUITS - SALAD","codeNumber":"029","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"FISH -TILAPIA","codeNumber":"030","staffCafeteriaPrice":"150.00","studentCafeteriaPrice":"150.00"},
  {"itemName":"FRUIT JUICE","codeNumber":"031","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"FISH - FILLET","codeNumber":"032","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"WHOLE FISH TILAPIA JUMBO","codeNumber":"033","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"JUMBO Q. CAKE","codeNumber":"034","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"FISH - FRIED","codeNumber":"035","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"60.00"},
  {"itemName":"GITHERI","codeNumber":"036","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"HOT DOG ROLL","codeNumber":"037","staffCafeteriaPrice":"45.00","studentCafeteriaPrice":"45.00"},
  {"itemName":"IRIO","codeNumber":"038","staffCafeteriaPrice":"45.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"KEBAB","codeNumber":"039","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"KALES","codeNumber":"040","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"LIVER","codeNumber":"041","staffCafeteriaPrice":"100.00","studentCafeteriaPrice":"100.00"},
  {"itemName":"MARGARINE","codeNumber":"042","staffCafeteriaPrice":"4.00","studentCafeteriaPrice":"4.00"},
  {"itemName":"MILK","codeNumber":"043","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"MATUMBO","codeNumber":"044","staffCafeteriaPrice":"80.00","studentCafeteriaPrice":"80.00"},
  {"itemName":"MANDAZI","codeNumber":"045","staffCafeteriaPrice":"15.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"MEAT PIES","codeNumber":"046","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"MILO","codeNumber":"047","staffCafeteriaPrice":"25.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"MILO - SPOON","codeNumber":"048","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"MANAGU","codeNumber":"049","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"MATOKE","codeNumber":"050","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"60.00"},
  {"itemName":"MALTA - GUINESS","codeNumber":"051","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"MALA","codeNumber":"052","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"MURENDA","codeNumber":"053","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"NDENGU","codeNumber":"054","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"11.00"},
  {"itemName":"NESCAFE - MILK","codeNumber":"055","staffCafeteriaPrice":"25.00","studentCafeteriaPrice":"6.00"},
  {"itemName":"NESCAFE - SPOON","codeNumber":"056","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"NDUMA","codeNumber":"057","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"NOVIDA","codeNumber":"058","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"ONIONS","codeNumber":"059","staffCafeteriaPrice":"2.00","studentCafeteriaPrice":"2.00"},
  {"itemName":"OMENA","codeNumber":"060","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"POTATOES - MASHED","codeNumber":"061","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"POTATOES - SWEET","codeNumber":"062","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"POTATOES - WHITE","codeNumber":"063","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"PICANA","codeNumber":"064","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"PILAU","codeNumber":"065","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"QUEEN CAKE","codeNumber":"066","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"RICE-FULL","codeNumber":"067","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"13.00"},
  {"itemName":"ROCK BUN (BIG)","codeNumber":"068","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"ROCK BUN (SMALL)","codeNumber":"069","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"SAUSAGE","codeNumber":"070","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"SAMOSA (BEEF)","codeNumber":"071","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"SODA (SMALL)","codeNumber":"072","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"STEAK","codeNumber":"073","staffCafeteriaPrice":"100.00","studentCafeteriaPrice":"100.00"},
  {"itemName":"SODA (BIG)","codeNumber":"074","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"SOUP","codeNumber":"075","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"SAUSAGE ROLL","codeNumber":"076","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"SODA (DIET)","codeNumber":"077","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"SODA (WATER)","codeNumber":"078","staffCafeteriaPrice":"25.00","studentCafeteriaPrice":"25.00"},
  {"itemName":"SAMOSA (NDENGU)","codeNumber":"079","staffCafeteriaPrice":"15.00","studentCafeteriaPrice":"15.00"},
  {"itemName":"SAGET","codeNumber":"080","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"SODA (LIGHT)","codeNumber":"081","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"TEA - BLACK","codeNumber":"082","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"6.00"},
  {"itemName":"TEA - WHITE","codeNumber":"083","staffCafeteriaPrice":"15.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"TATTON","codeNumber":"084","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"16.00"},
  {"itemName":"TEA SCONCE","codeNumber":"085","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"TEA BAG","codeNumber":"086","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"TOMATOE","codeNumber":"087","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"TONIC WATER","codeNumber":"088","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"TAKE AWAY","codeNumber":"089","staffCafeteriaPrice":"5.00","studentCafeteriaPrice":"5.00"},
  {"itemName":"UGALI","codeNumber":"090","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"8.00"},
  {"itemName":"UJI","codeNumber":"091","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"VIMTO","codeNumber":"092","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"VEGETABLES - MIXED","codeNumber":"093","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"HIGHLAND MINERALWATER","codeNumber":"094","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"SANDWICH","codeNumber":"095","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"KUNDE","codeNumber":"096","staffCafeteriaPrice":"40.00","studentCafeteriaPrice":"40.00"},
  {"itemName":"BOILED MAIZE","codeNumber":"097","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"BUTTERNUTS","codeNumber":"098","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"MARA BUNS","codeNumber":"099","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"UGALI WIMBI","codeNumber":"100","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"BANANA","codeNumber":"101","staffCafeteriaPrice":"10.00","studentCafeteriaPrice":"10.00"},
  {"itemName":"KERINGET MINERWATER","codeNumber":"102","staffCafeteriaPrice":"45.00","studentCafeteriaPrice":"45.00"},
  {"itemName":"MURSIK","codeNumber":"103","staffCafeteriaPrice":"35.00","studentCafeteriaPrice":"35.00"},
  {"itemName":"BHAJIA","codeNumber":"104","staffCafeteriaPrice":"60.00","studentCafeteriaPrice":"60.00"},
  {"itemName":"SAFARI PRIDE WATER","codeNumber":"105","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"BLACK MILO","codeNumber":"106","staffCafeteriaPrice":"20.00","studentCafeteriaPrice":"20.00"},
  {"itemName":"JUMBO (BIG SIZE) TILAPIA","codeNumber":"107","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"Hot Dog Big","codeNumber":"108","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"Hot Dog Small","codeNumber":"109","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"Smoky","codeNumber":"110","staffCafeteriaPrice":"30.00","studentCafeteriaPrice":"30.00"},
  {"itemName":"Roast Chicken / chips/ugali/chapatti","codeNumber":"111","staffCafeteriaPrice":"250.00","studentCafeteriaPrice":"250.00"},
  {"itemName":"Beef Casserole","codeNumber":"112","staffCafeteriaPrice":"170.00","studentCafeteriaPrice":"170.00"},
  {"itemName":"Fried Steak","codeNumber":"113","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"Fried T-Bone Steak","codeNumber":"114","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"Fried Liver","codeNumber":"115","staffCafeteriaPrice":"200.00","studentCafeteriaPrice":"200.00"},
  {"itemName":"Ngengu Curry","codeNumber":"116","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"Bean Stew / Curry","codeNumber":"117","staffCafeteriaPrice":"50.00","studentCafeteriaPrice":"50.00"},
  {"itemName":"Fried Tilapia (ugali/chips/chapatti/)","codeNumber":"118","staffCafeteriaPrice":"250.00","studentCafeteriaPrice":"250.00"},
  {"itemName":"Chips and Salad","codeNumber":"119","staffCafeteriaPrice":"100.00","studentCafeteriaPrice":"100.00"},
  {"itemName":"Rice Pilau","codeNumber":"120","staffCafeteriaPrice":"100.00","studentCafeteriaPrice":"100.00"}
  ]



  try {
    data.forEach((item) => {
      try {
        FoodItem.create(item)
        .then(()=>{
          console.log("Collection created successfully");
        })
        .catch((e)=>{
          console.log(`Error in creating the collection: ${e.message}`);
        })
      } catch (e) {
          console.log("Error at creating foodItem collection");
      }
    });

  } catch (e) {
      console.log(`Error on loop: ${e.message}`);
  }

}

module.exports.createE_Menu = async (req, res)=>{
  try {
    const body = JSON.parse(req.body.body);
    console.log(`Body is ${body}`);
    const toId = mongoose.Types.ObjectId;
    const foodItemId = toId(req.params.foodItemId);
    const chefId = toId(req.params.chefId);
    const e_menu = new E_Menu({
      amountPrepared: body,
      foodItem: foodItemId,
      chef: chefId
    })

    await e_menu.save(function(err, result){
      if(err){
        res.status(400).json({"Message":`Error in saving foodItem to the E_Menu model: ${err.message}`});
        console.log(`Error creating e_menu: ${err.message}`);
      }
      if(result){
        console.log(`FoodItem added to the database: ${result}`);
        res.status(201).json({"Message":"Item added to the e_menu successfully", result});
      }
    })
  } catch (e) {
    console.log(`Error at the e_menu handler: ${e.message}`);
  }
}

module.exports.getE_Menu = async(req, res)=>{
  try {
    const today = new Date().toLocaleDateString();
    const e_menu = await E_Menu.find({date: today}).populate([ { path: "foodItem", model: "foodItem" },{ path: "chef", model:"chef" }]);
    if(e_menu){
      console.log(`Fetch successful`);
      res.status(200).json({"Message": "Fetch Successful", e_menu});
    }else{
      console.log(`Fetch failed`);
      res.status(400).json({"Message": "Fetch failed"});
    }
  } catch (e) {
    console.log(`Error at the fetch e_menu handler: ${e.message}`);
  }
}

module.exports.updateE_Menu = (req, res)=>{
  try{
      const today = new Date().toLocaleDateString();
      const data = JSON.parse(req.body.body);
      console.log(`Data is: ${JSON.stringify(data)}`);
      const toId = mongoose.Types.ObjectId;
      const foodItemId = toId(req.params.foodItemId);
      E_Menu.findOneAndUpdate({foodItem: foodItemId, date: today}, {
        amountPrepared: data
      })
      .then(()=>{
        E_Menu.findOne({foodItem: foodItemId, date: today})
        .then((e_menu)=>{
          res.status(200).json({"Message": "Update successful", e_menu});
        })
      })

  } catch(e){
    console.log(`Error on update EMenu handler: ${e.message}`);
  }
}

module.exports.deleteE_Menu = (req, res)=>{
  try {
    const today = new Date().toLocaleDateString();
    const toId = mongoose.Types.ObjectId;
    const foodItemId = toId(req.params.foodItemId);
    E_Menu.findOneAndRemove({foodItem: foodItemId, date: today})
    .then(()=>{
      res.status(200).json({"Message": "Food Item is deleted from the E_Menu"})
    })
  } catch (e) {
    console.log(`Error on delete E_Menu handler: ${e.message}`);
  }
}

module.exports.createOrder = async(req, res)=>{
  const response = req;
  const data = response.body.body
  try {
    const toId = mongoose.Types.ObjectId;
    const itemOrderedId = toId(req.params.itemOrderedId);
    const cashierId = toId(req.params.cashierId);
    const order = new Order({
      e_menu: itemOrderedId,
      orderAmount: data.orderAmount,
      orderCost: data.orderCost,
      cashier: cashierId
    });
    // update amountPrepared of the food by decrementing the value based on the amount ordered
    let foodItem = await E_Menu.findOneAndUpdate({_id: itemOrderedId}, {$inc:{amountPrepared: parseInt(-order.orderAmount)}});
    foodItem = await E_Menu.findOne({_id: itemOrderedId});
    await order.save(function(err, result){
      if(err){
        console.log(`Error in creating order`);
        res.status(401).json({"Message":`Unable to save order: ${err.message}`})
      }
      if(result){
        console.log(`Order created successfully`);
        res.status(201).json({"Message":"Order created successfully", result, foodItem});;
      }
    })

  } catch (e) {
    console.log(`Error at the create order handler: ${e.message}`);
  }
}

module.exports.getOrders = async(req, res)=>{
  try{
    const today = new Date().toLocaleDateString();
    const orders = await Order.find({dateToday: today}).populate([ { path: "e_menu", populate:{ path: "foodItem", model: "foodItem" } } ,{ path: "cashier", model: "cashier" }]);
    if(orders){
      res.status(200).json({"Message":"Fetch Successful", orders});
    }else {
      res.status(400).json({"Message":"Fetch Successful"});
    }
  }catch(e){
    console.log(`Error on the fetch orders handler: ${e.message}`);
  }
}

module.exports.getSales = async(req, res)=>{
  try {
    const dateOfSale = req.params.date;
    const orders = await Order.find({dateToday: dateOfSale}).populate([ {path: "e_menu", populate:{path: "foodItem", model: "foodItem" }}, { path: "cashier", model: "cashier"} ]);
    if(orders){
      res.status(200).json({"Message": "Fetch Successful", orders});
    }else {
      res.status(400).json({"Message": "Fetch Failed"});
    }
  } catch (e) {
    console.log(`Error on the getSales handler: ${e.message}`);
  }
}

module.exports.getStock = async(req, res)=>{
  try {
    const dateOfStock = req.params.date;
    const stock = await E_Menu.find({date: dateOfStock}).populate([{path: "foodItem", model: "foodItem"}, {path: "chef", model: "chef"}]);
    if(stock){
      res.status(200).json({"Message": "Fetch Successful", stock});
    }else {
      res.status(400).json({"Message": "Fetch Failed"});
    }
  } catch (e) {

  }
}


module.exports.generateReciept = async(req, res)=>{
  try {
      const toId = mongoose.Types.ObjectId;
      const orderId = toId(req.params.orderId);
      const reciept = new Reciept({
        order: orderId
      })
      await reciept.save(function(err, result){
        if(result){
          res.status(201).json({"Message": "Reciept Generated Successfully", reciept});
        }
        if(err){
          res.status(400).json({"Message": "Error in Generating Reciept", error: err.message});
        }
      })
  } catch (e) {
    console.log(`Error at the Generate Reciept handler: ${e.message}`);
  }
}

module.exports.getReciept = async (req, res)=>{
  try {
    const reciept = await Reciept.find({}).populate({path: "order", populate:{ path: "e_menu", populate:{path: "foodItem", model: "foodItem"}}});
    if(reciept){
      res.status(200).json({"Message": "Fetch Successful", reciept});
    }else {
      res.status(400).json({"Message": "Fetch Failed"})
    }
  } catch (e) {
    console.log(`Error on the Get Reciept handler: ${e.message}`);
  }
}
