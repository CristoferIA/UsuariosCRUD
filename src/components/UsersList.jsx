import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import axios from "axios";

const UsersList = ({ result, renderContainer, setUpdateInfo, updateUser, form_delete }) => {
  const deleteCard = (obj) => {
    const name_user= obj.first_name + obj.last_name;
    axios
      .delete(`http://users-crud.academlo.tech/users/${obj.id}/`)
      .then(() => {
        form_delete(name_user)
        renderContainer(true);
      })
      .catch((err) => console.log(err));
  };

  const formEdit = (data)=>{
    setUpdateInfo(data)
    updateUser()
  } 

  return (
    <div className="container">
      {result?.map((obj) => (
        <div key={obj.id} className="card">
          <div className="card__name">
            <h3>
              {obj.first_name} {obj.last_name}
            </h3>
          </div>
          <div className="card__email">
            <label htmlFor="">Correo:</label>
            <label htmlFor="">{obj.email}</label>
          </div>
          <div className="card__birthday">
            <label htmlFor="">Cumpleaños:</label>
            <div>
              <FaBirthdayCake className="card__icon" />
              <label htmlFor="">{obj.birthday}</label>
            </div>
          </div>
          <div className="card__line"></div>
          <div className="card__btn">
            <button onClick={() => deleteCard(obj)}>
              <RiDeleteBinLine />
            </button>
            <button onClick={()=>{formEdit(obj)}}>
              <FiEdit2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
