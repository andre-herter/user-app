import { useContext } from "react";
import UserCard from "../../components/usercard/UserCard";
import { UserContext } from "../../context/UserContext";
import "./Overview.css";

function Overview() {
  const { users } = useContext(UserContext);
  console.log(users);

  if (!users || users.length === 0) {
    return <div>Bitte erstellen Sie einen Benutzer !</div>;
  }

  return (
    <div className="overview-body">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
export default Overview;
