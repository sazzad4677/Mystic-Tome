import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
