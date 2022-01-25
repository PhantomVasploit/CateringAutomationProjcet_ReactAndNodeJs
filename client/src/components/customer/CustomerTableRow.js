const CustomerTableRow = ({order})=>{
  return(
    <tr>
      <td>{order.e_menu._id}</td>
      <td>{order.e_menu.foodItem.itemName}</td>
      <td>{order.orderAmount}</td>
      <td>{order.orderCost}</td>
    </tr>
  )
}

export default CustomerTableRow;
