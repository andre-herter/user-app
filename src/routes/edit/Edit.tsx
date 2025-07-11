import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/userForm/UserForm";
import type { User } from "../../types/User";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";

function Edit() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users, usersDispatch } = useContext(UserContext);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  function updatedUser(user: User) {
    usersDispatch({ type: "UPDATE_USER", user: user });
    alert("Updated user");
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
