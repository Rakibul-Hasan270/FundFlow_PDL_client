import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Campaigns from "../../pages/Campaigns/Campaigns";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Payment from "../../pages/Payment/Payment";
import CartDetails from "../../components/CartDetails/CartDetails";
import PaymentHistory from "../../pages/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/campaigns',
                element: <Campaigns></Campaigns>
            },
            {
                path: '/payment',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            {
                path: '/cart-detail/:id',
                element: <PrivateRoutes><CartDetails></CartDetails></PrivateRoutes>,
                // loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path: '/payment-history',
                element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;