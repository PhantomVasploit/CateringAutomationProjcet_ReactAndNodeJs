import TableRow from "./TableRow";
const Table = ({data, user})=>{

   return(
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Code Number</th>
                <th scope="col">Food Item</th>
                <th scope="col"></th>
                <th scope="col">Amount Prepared</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                data.foodItems.map((foodItem)=>(
                  <TableRow key={foodItem._id} foodItem={foodItem} user={user} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
