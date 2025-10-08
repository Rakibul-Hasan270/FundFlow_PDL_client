import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Campaigns from "../../pages/Campaigns/Campaigns";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Secret from "../../components/Secret/Secret";
import Payment from "../../pages/Payment/Payment";
import CartDetails from "../../components/CartDetails/CartDetails";

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
                path: '/secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            },
            {
                path: '/payment',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            {
                path: '/cart-detail/:id',
                element: <PrivateRoutes><CartDetails></CartDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
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