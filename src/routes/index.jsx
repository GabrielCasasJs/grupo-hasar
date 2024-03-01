import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home';
import Debug from '../pages/Debug';
import Splash from '../pages/Splash';
import NotFound from "../pages/NotFound";
import BreendsDetails from '../pages/BreedsDetails';
import FavoriteBreends from '../pages/FavoriteBreeds';

function RoutesIndex() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Splash />
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/debug",
      element: <Debug />,
    },
    {
      path: "/sub-breeds/:breed",
      element: <BreendsDetails />
    },
    {
      path: "/favorite-breends",
      element: <FavoriteBreends />
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
