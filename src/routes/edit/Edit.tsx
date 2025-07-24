import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/userForm/UserForm";
import type { User } from "../../types/User";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users, usersDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  function updatedUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Benutzer aktualisiert");
    navigate(-1);
  }

  function displayUserForm() {
    if (editUser) {
      return <UserForm user={editUser} onSubmit={updatedUser} />;
    } else {
      return "User not found";
    }
  }
  return displayUserForm();
}

export default Edit;
