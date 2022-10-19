import Home from "./home/home"
import Order from "./order/order"
import Payment from "./payment/payment"
import Escrow from "./escrow/escrow"
import Product from "./product/product"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
imp
const Layout = () => {
    return (
        <>
        <Home/>
        <Order/>
        <Payment/>
        <Escrow/>
        <Product/>
        </>
    )
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/order",
                element: <Order/>,
            },
            {
                path: "/payment",
                element: <Payment/>,
            },
            {
                path: "/escrow",
                element: <Escrow/>,
            },
            {
                path: "/products",
                element: <Product/>,
            },
        ],
    },
    {
        path: "/order",
        element: <Order/>,
    },
    {
        path: "/payment",
        element: <Payment/>,
    },
    {
        path: "/escrow",
        element: <Escrow/>,
    },
    {
        path: "/products",
        element: <Product/>,
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}