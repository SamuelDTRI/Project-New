import { addUser } from "../../Features/Users/UserSlice";
import { useNavigate } from "react-router-dom";
import style from "./usersForm.module.css";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function UsersForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        ...user,
        id: uuid(),
      })
    );
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={style.UsersForm}>
      <label className={style.title}>Title For User</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        className={style.input}/>

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange} className={style.textarea}></textarea>

      <button className={style.buttonForm}>Save</button>
    </form>
  );
}

export default UsersForm;
