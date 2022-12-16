import "./App.css";
import { useEffect, useState } from "react";
import UsersFrom from "./components/UsersFrom";
import UsersList from "./components/UsersList";
import UpdateForm from "./components/UpdateForm";
import axios from "axios";
import {MdPersonAddAlt} from "react-icons/md";
import {GrClose} from "react-icons/gr";

function App() {
  const [result, setResult] = useState();
  const [updateInfo, setUpdateInfo] = useState()
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => {
        setResult(res.data);
        renderContainer(false);
      })
      .catch((err) => console.log(err));
  }, [render]);

  const renderContainer = (bol) => {
    setRender(bol);
  };

  const newUser = ()=>{
     const new_form =  document.querySelector(".App__new-user")
     new_form.classList.add("App__new-user-block")
  }
  const updateUser = ()=>{
    const update_form =  document.querySelector(".App__update")
    update_form.classList.add("App__new-user-block")
 }
  const closeNewUser = ()=>{
    const new_form =  document.querySelector(".App__new-user")
    new_form.classList.remove("App__new-user-block")
 }
 const closeUpdate = ()=>{
  const update_form =  document.querySelector(".App__update")
  update_form.classList.remove("App__new-user-block")
}
const form_delete = (name)=>{
  document.querySelector(".nameUser").innerHTML = name
  const update_form =  document.querySelector(".App__delete")
  update_form.classList.add("App__delete-block")
}
const closeDelete = ()=>{
  const update_form =  document.querySelector(".App__delete")
  update_form.classList.remove("App__delete-block")
}

  return (
    <div className="App">
      
      <div className="App__new-user">
        <button className="btn_close" onClick={closeNewUser}> <GrClose className="icon-close"/> </button>
        <UsersFrom renderContainer={renderContainer} closeNewUser={closeNewUser}/>        
      </div>
      <div className="App__update">
        <button className="btn_close" onClick={closeUpdate}><GrClose className="icon-close"/></button>
        <UpdateForm updateInfo={updateInfo} renderContainer={renderContainer} closeUpdate={closeUpdate}/>
      </div>

      <div className="App__delete">
        <div>
          <h3>Delete User</h3>
          <p>The user <b><span className="nameUser"></span></b> has been deleted</p>
          <button onClick={closeDelete}>to accept</button>
        </div>
      </div>

      <header>
        <div>
        <h1>Users</h1>
        <button className="btn_new-user" onClick={newUser}><MdPersonAddAlt className="icon-new-user"/><span>Create new user</span></button>
        </div>
      </header>
      
        <UsersList result ={result} renderContainer={renderContainer} setUpdateInfo={setUpdateInfo} updateUser={updateUser} form_delete={form_delete}/>     
    </div>
  );
}

export default App;
