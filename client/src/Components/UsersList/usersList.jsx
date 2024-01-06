import { deleteUser } from "../../Features/Users/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const Users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateForm = () => {
    dispatch(navigate("/form"));
  };

  const handleClick = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      {Users.map((user) => (
        <div key={user.id}>
          <h2>{user.title}</h2>
          <p>{user.description}</p>
          <button onClick={() => handleClick(user.id)}>Delete</button>
        </div>
      ))}
      <div>
        <button onClick={navigateForm}>Form</button>
      </div>
    </div>
  );
}

export default UsersList;
