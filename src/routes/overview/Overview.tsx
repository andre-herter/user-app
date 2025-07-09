import { useContext } from "react";
import UserCard from "../../components/usercard/UserCard";
import { UserContext } from "../../context/UserContext";

function Overview() {
  const { users } = useContext(UserContext);

  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
export default Overview;
