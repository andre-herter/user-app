import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Overview from "./routes/overview/Overview";
import Create from "./routes/create/Create";
import Edit from "./routes/edit/Edit";
import Root from "./routes/root/Root";
import { useReducer } from "react";
import userManagementReducer from "./hooks/userManagementReducer";
import { UserContext } from "./context/UserContext";
import type { User } from "./types/User";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Navigate to="overview" replace /> },
        { path: "overview", element: <Overview /> },
        { path: "create", element: <Create /> },
        { path: "edit/:id", element: <Edit /> },
      ],
    },
  ],
  {
    basename: "/user-app/",
  }
);

function App() {
  const [users, usersDispatch] = useReducer(
    userManagementReducer,
    [],
    fetchInitUserData
  );
  console.log(users);

  function fetchInitUserData(): User[] {
    const stringUsers = localStorage.getItem("users");
    if (stringUsers) {
      return JSON.parse(stringUsers);
    }
    return [];
  }

  return (
    <UserContext.Provider value={{ users, usersDispatch }}>
      <RouterProvider router={router} />;
    </UserContext.Provider>
  );
}

export default App;
