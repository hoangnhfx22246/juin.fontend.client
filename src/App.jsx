import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Root from "./Root";
import IntroducePage from "./Pages/IntroducePage";
import ProductsPage from "./Pages/ProductsPage";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";
import MyProfilePage from "./Pages/MyProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <IntroducePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },

      // 🔒 Bảo vệ bằng PrivateRoute
      {
        element: <PrivateRoute />, // wrapper route
        children: [
          {
            path: "/profile",
            element: <MyProfilePage />,
          },
          // có thể thêm nhiều route được bảo vệ khác tại đây
        ],
      },

      // 🔓 Public route
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/forgot-password",
            element: <ResetPasswordPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
