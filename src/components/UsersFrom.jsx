import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDateRange } from "react-icons/md";
import axios from "axios";
import { useForm } from "react-hook-form";

const UsersFrom = ({ renderContainer, closeNewUser }) => {
  const { register, reset, handleSubmit } = useForm()

  const submit = (data) => {
    axios
      .post("https://users-crud.academlo.tech/users/", data)
      .then(() => {
        renderContainer(true);
        reset({
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          birthday: "",
        });
        closeNewUser()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form">
      <h1>New User</h1>
      <form className="user__form" onSubmit={handleSubmit(submit)}>
        <div>
          <FaUserAlt className="icon" />
          <div className="user__from-name">
            <input
              autoComplete="of"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              {...register("first_name")}
            />
            <input
              autoComplete="of"
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              {...register("last_name")}
            />
          </div>
        </div>
        <div>
          <MdEmail className="icon" />
          <input
            autoComplete="of"
            type="text"
            name="email"
            placeholder="Email"
            required
            {...register("email")}
          />
        </div>

        <div>
          <RiLockPasswordFill className="icon" />
          <input
            autoComplete="of"
            type="password"
            name="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </div>
        <div>
          <MdDateRange className="icon" />
          <input
            autoComplete="of"
            type="date"
            name="birthday"
            placeholder="Birthday"
            required
            {...register("birthday")}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UsersFrom;
