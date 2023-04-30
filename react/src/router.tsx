import { createBrowserRouter } from "react-router-dom";
import { PATH_ABOUT, PATH_CART, PATH_CATALOG, PATH_HOME, PATH_LOGIN, PATH_NOT_FOUND, PATH_PRODUCT, PATH_PROFILE, PATH_SIGN_UP } from "./constants/routes";
import { Cart, Catalog, Home, Login, Profile, SignUp, About, NotFound, Product } from "./pages";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GuestLayout } from "./layouts/GuestLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: PATH_HOME,
                element: <Home />
            },
            {
                path: PATH_CATALOG,
                element: <Catalog />
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
                path: PATH_PRODUCT,
                element: <Product />
            },
            {
                path: PATH_ABOUT,
                element: <About />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: PATH_LOGIN,
                element: <Login />
            },
            {
                path: PATH_SIGN_UP,
                element: <SignUp />
            },
        ]
    },
    {
        path: PATH_NOT_FOUND,
        element: <NotFound />
    },
])