import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import Users from "./pages/users";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Userid from "./pages/user_id";
import Room from "./pages/room";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/signin", element: <Signin /> },
    { path: "/signup", element: <Signup /> },
    { path: "/user/:id", element: <Userid /> },
    { path: "/conv", element: <Room /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
