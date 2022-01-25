import {useState, Fragment} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const TableRow = ({foodItem, user})=>{

const [amountPrepared, setAmountPrepared] = useState('');
const [inSubmitMode, setSubmitMode] = useState({
  status: false,
  update: false,
  toggleUpdateAndDelete: false,
  rowKey: null
})
const [addAttributes, setaddAttribute] = useState("btn btn-outline-info");
const [url, setUrl] = useState("");
const [updateUrl, setUpdateUrl] = useState("");
const [deleteUrl, setDeleteUrl] = useState("");
const add = document.getElementById('add');
const updateBtn = document.getElementById('update');
const deleteBtn = document.getElementById('delete');
const navigate = useNavigate();

const authAxios = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
});

const addMode = (id)=>{

  setSubmitMode({
    status: true,
    rowKey: id
  })
  setUrl(`/chef/e_menu/${id}/${user._id}`)
  setaddAttribute("visually-hidden")
  add.setAttribute("class", `${addAttributes}`);
}


const hideUpdateAndDelete = ()=>{
  updateBtn.setAttribute('class', 'visually-hidden');
  deleteBtn.setAttribute('class', 'visually-hidden');
  add.setAttribute('class', 'btn btn-outline-info');
}

const updateFunc = (id)=>{
  deleteBtn.setAttribute('class', 'visually-hidden');
  updateBtn.setAttribute('class', 'visually-hidden');
  setSubmitMode({
    update: true,
    rowKey: id
  });
  setUpdateUrl(`/chef/e_menu/${id}`);
  console.log(`Update Url is ${updateUrl} inSubmitMode is ${JSON.stringify(inSubmitMode)}`);
}

const deleteFunc = (id)=>{
  setDeleteUrl(`/chef/e_menu/${id}`)
}

const createEmenu = async()=>{
  try {
    if(amountPrepared === '' || !amountPrepared){
      navigate("/error");
    }else {
      const requestOption = {
        headers:{
          "Acess-Controll-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
          "accept":"application/json"
        },
        body: JSON.stringify(amountPrepared)
      }
      console.log(`Request is: ${requestOption}`);
      const response = await authAxios.post(url, requestOption);
      console.log(`Response: ${response}`);
      await setUrl("");
      await setSubmitMode({
        status: false,
        toggleUpdateAndDelete: true
      });

      console.log(`Url is: ${url} inSubmitMode is ${JSON.stringify(inSubmitMode)}`);
    }
  } catch (e) {
      console.log(`Error submiting amount prepared: ${e.message}`);
  }
}

const updateEmenu = async()=>{
  try {
    console.log(`Amount Prepared is: ${amountPrepared}`);
    if(amountPrepared === '' || !amountPrepared){
      navigate("/error");
    }else {
      const requestOption = {
        headers:{
          "Acess-Controll-Allow-Origin": "*",
          "Content-Type": "application/json;charset=UTF-8",
          "accept":"application/json"
        },
        body: JSON.stringify(amountPrepared)
      }
      console.log(`Request is: ${requestOption}`);
      const response = await authAxios.put(updateUrl, requestOption);
      console.log(`Response: ${response}`);
      await setUpdateUrl("");
      await setSubmitMode({
        update: false,
        rowKey: null
      });
      console.log(`Url is: ${updateUrl} inSubmitMode is ${JSON.stringify(inSubmitMode)}`);
    }
  } catch (e) {
    console.log(`Error updating amount prepared: ${e.message}`);
  }
}

const deleteE_MenuItem = async ()=>{
  try {
    const requestOption = {
      headers:{
        "Acess-Controll-Allow-Origin": "*",
        "Content-Type": "application/json;charset=UTF-8",
        "accept":"application/json"
      }
    }
    const response = await authAxios.delete(deleteUrl, requestOption);
    console.log(`Response is: ${JSON.stringify(response)}`);
    await hideUpdateAndDelete();
  } catch (e) {
    console.log(`Error error deleting e-Menu Item: ${e.message}`);
  }
}

  return(
      <tr>

        <td>{foodItem.codeNumber} </td>

        <td>{foodItem.itemName}</td>

        <td>
          <button
          id="add"
          className={`${addAttributes}`}
          onClick={()=>{
            addMode(foodItem._id);
          }}>
          Add To Menu</button>
        </td>
        {
            inSubmitMode.status && inSubmitMode.rowKey === foodItem._id ? (
              <Fragment>
                <td>
                  <input
                  className="form-control shadow-none"
                  id="amountPrepared"
                  placeholder="Amount Prepared"
                  name="amountPrepared"
                  autoComplete="off"
                  onChange={ e => setAmountPrepared(e.target.value) }
                  type="text" />
                </td>

                <td>
                  <button
                  id="submit1"
                  className="btn btn-outline-success"
                  onClick={()=>{
                    createEmenu();
                  }}>
                  Submit</button>
                </td>

              </Fragment>
            ) : (
              <td></td>
            )
        }
        {
            inSubmitMode.update && inSubmitMode.rowKey === foodItem._id ? (
              <Fragment>
                <td>
                  <input
                  className="form-control shadow-none"
                  id="amountPrepared"
                  placeholder="Amount Prepared"
                  name="amountPrepared"
                  autoComplete="off"
                  onChange={ e => setAmountPrepared(e.target.value) }
                  type="text" />
                </td>

                <td>
                  <button
                  id="submit1"
                  className="btn btn-outline-success"
                  onClick={()=>{
                    updateEmenu()
                  }}>
                  Submit</button>
                </td>

              </Fragment>
            ) : (
              <td></td>
            )
        }
        {
            inSubmitMode.toggleUpdateAndDelete && inSubmitMode.rowKey === foodItem._id &&
            <Fragment>

              <td>
                <button
                id="update"
                className="btn btn-outline-info"
                onClick={
                  ()=>{
                    updateFunc(foodItem._id)
                  }
                }
                > update
                </button>
              </td>

              <td>
                <button
                id="delete"
                className="btn btn-outline-danger"
                onMouseEnter = {()=>{
                  deleteFunc(foodItem._id);
                }}
                onMouseLeave = {()=>{
                  setDeleteUrl("");
                }}
                onClick = {
                  ()=>{
                    deleteE_MenuItem(foodItem._id);
                  }
                }
                > delete
                </button>
              </td>
            </Fragment>
        }


      </tr>
  )

}

export default TableRow;
