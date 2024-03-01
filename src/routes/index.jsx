import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home';
import Debug from '../pages/Debug';
import Splash from '../pages/Splash';
import NotFound from "../pages/NotFound";

function RoutesIndex() {
    const router = createBrowserRouter([
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/debug",
          element: <Debug />,
        },
        {
          path: "/",
          element: <Splash />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]);

    return (
        <RouterProvider router={router} />
    )
}

export default RoutesIndex;
