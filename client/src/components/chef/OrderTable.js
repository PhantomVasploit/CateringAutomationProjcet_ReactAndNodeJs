import {useState} from "react";
const OrderTable = ({data})=>{

  const [served, setServed] = useState({
    status: false,
    rowKey: null
  });

  let items = [];

  data.orders.map((item)=>{
    item.status = served.status;
    item.rowKey = served.rowKey;
    items.push(item);
  });

  console.log(`Items: ${JSON.stringify(items)}`);

  const checked = ()=>{
    const confirmBtn = document.getElementById('confirmBtn');
    const orderAmount = document.getElementById('orderAmount');
    const foodItem = document.getElementById('foodItem');
    confirmBtn.setAttribute('class', 'visually-hidden');
    foodItem.setAttribute('class', 'text-decoration-line-through');
    orderAmount.setAttribute('class', 'text-decoration-line-through');
    items.map((item)=>{
      item.status = setServed({status:true, rowKey: item._id});
    })
    console.log(`State: ${JSON.stringify(served)}`);
  }


  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Food Item</th>
          <th scope="col">Amount Ordered</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((order)=>(
            <tr key={order._id}>
              <td>
                <p id='foodItem'>{order.e_menu.foodItem.itemName}</p>
              </td>

              <td>
                <p id='orderAmount'>{order.orderAmount}</p>
              </td>

              <td>
                <button
                className="btn btn-outline-info"
                onClick={
                  ()=>{
                    checked();
                  }
                }
                id="confirmBtn"
                >
                  Serve
                </button>
              </td>

              {
                order.status && order.rowKey === order._id
                ?
                  <td>
                    <p id='confirm' className="badge bg-info text-wrap">Served!</p>
                  </td>
                :
                  <td>
                    <p id='confirm' className="visually-hidden">Served!</p>
                  </td>
              }

            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default OrderTable;
