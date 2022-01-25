const Card = ({data})=>{
  return(
    <div className="container mt-4">
    <div   className="row">
      {
        data.e_menu.map((item)=>(

        <div className="col-md-4  mb-3">
          <div className="card text-center shadow p-3 rounded">
            <div className="card-header">
              {item.foodItem.itemName}
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.foodItem.itemName}</h5>
              <p className="card-text">Staff Price: {item.foodItem.staffCafeteriaPrice}</p>
              <p className="card-text">Student Price: {item.foodItem.studentCafeteriaPrice}</p>
            </div>
            <div className="card-footer">
              <p className="text-muted text-end text-uppercase"> Courtesy of Chef {item.chef.username}</p>
            </div>
          </div>
        </div>
        ))
      }
    </div>
    </div>
  );
}

export default Card;
