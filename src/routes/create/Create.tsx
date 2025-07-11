import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import UserForm from "../../components/userForm/UserForm";
import { useNavigate } from "react-router-dom";

function Create() {
  const { usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmitNewUser(user: User) {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Benutzer eingefügt");
    navigate(-1);
  }
  return <UserForm user={undefined} onSubmit={handleSubmitNewUser} />;
}

export default Create;
