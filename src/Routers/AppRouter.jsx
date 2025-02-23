import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Restaurant from "../Pages/Restaurant/Restaurant";


import NoUrl from "../Pages/NoUrl/NoUrl"; // Ensure this import is correct


const router1 = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "restaurant",
        element: <Restaurant />,
      },
      {
        path: "*",
        element: <NoUrl />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router1} />;
};

export default AppRouter;
