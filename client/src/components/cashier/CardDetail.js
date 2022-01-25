const CardDetail = ({addToCart, item}) =>{
  
const disable = ()=>{
  const addBtn = document.getElementById('add');
  const alert = document.getElementById('alert');
  addBtn.setAttribute("class", "visually-hidden");
  alert.setAttribute("class", "alert alert-sucess");
}

  return(
    <div className="col-md-4  mb-3">
      <div className="card text-center shadow p-3 rounded">
        <div className="card-header">
          {item.foodItem.itemName}
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.foodItem.itemName}</h5>
          <p className="card-text">Staff Price: {item.foodItem.staffCafeteriaPrice}</p>
          <p className="card-text">Student Price: {item.foodItem.studentCafeteriaPrice}</p>
          <button
          id="add"
          className="btn btn-outline-info"
          onClick={
            ()=>{
              addToCart(item);
              disable();
            }}
          >
          Add To Cart
          </button>
          <div className="visually-hidden" id="alert" role="alert">
            Item added to cart
          </div>
        </div>
        <div className="card-footer">
          <p className="text-muted text-end text-uppercase"> Courtesy of Chef {item.chef.username}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail;
