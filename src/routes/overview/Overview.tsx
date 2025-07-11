import { useContext } from "react";
import UserCard from "../../components/usercard/UserCard";
import { UserContext } from "../../context/UserContext";
import "./Overview.css";

function Overview() {
  const { users } = useContext(UserContext);
  console.log(users);

  return (
    <div className="overview-body">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
export default Overview;
