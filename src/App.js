import React, { lazy, Suspense } from "react"; 
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";

// import Instamart from "./components/Instamart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On Demand loading
// Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    return (
        <>  
            <Header/>
            <Outlet />
            <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/Instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            }
        ]
    }
])

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<RouterProvider router={appRouter} />);     