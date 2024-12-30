import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Products from "./components/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers/userReducer";
import products from "./services/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (!user.isAuthenticated) {
      let loggedInUser = window.localStorage.getItem("loggedInUser");
      loggedInUser = JSON.parse(loggedInUser);
      if (loggedInUser) {
        dispatch(setUser(loggedInUser));
        products.setToken(loggedInUser.token);
      }
    }
  }, [user]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
