import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import type { User } from "../../types/User";
import UserForm from "../../components/userForm/UserForm";

function Create() {
  const { usersDispatch } = useContext(UserContext);

  function handleSubmitNewUser(user: User) {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Benutzer eingefügt");
  }
  return <UserForm user={undefined} onSubmit={handleSubmitNewUser} />;
}

export default Create;
