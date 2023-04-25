import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, VehicleGrid, VehicleView, Test, Login, NotFound } from "./routes";
import "./main.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/vehicles",
          element: <VehicleGrid />,
        },
        {
          path: "/vehicles/:slug",
          element: <VehicleView />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
