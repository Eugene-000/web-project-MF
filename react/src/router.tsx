import { createBrowserRouter } from "react-router-dom";
import { PATH_CART, PATH_CATALOG, PATH_HOME, PATH_LOGIN, PATH_NOT_FOUND, PATH_PROFILE, PATH_SIGN_UP } from "./constants/routes";
import { Cart, Catalog, Home, Login, Profile, SignUp } from "./pages";
import { NotFound } from "./pages/notFound";

export const router = createBrowserRouter([
    {
        path: PATH_HOME,
        element: <Home />
    },
    {
        path: PATH_LOGIN,
        element: <Login />
    },
    {
        path: PATH_CATALOG,
        element: <Catalog />
    },
    {
        path: PATH_SIGN_UP,
        element: <SignUp />
    },
    {
        path: PATH_PROFILE,
        element: <Profile />
    },
    {
        path: PATH_CART,
        element: <Cart />
    },
    {
        path: PATH_NOT_FOUND,
        element: <NotFound />
    },
])