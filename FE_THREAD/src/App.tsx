import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailThread, Home, Login, Register } from "./pages";
import { PrivateRoute } from "./privateRoute/privateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/detail-thread",
          element: <DetailThread />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
