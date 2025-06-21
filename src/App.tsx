import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "./routes/overview/Overview";
import Create from "./routes/create/Create";
import Edit from "./routes/edit/Edit";
import Root from "./routes/root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/overview", element: <Overview /> },
        { path: "/create", element: <Create /> },
        { path: "/edit/:id", element: <Edit /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
