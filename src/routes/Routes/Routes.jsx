import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Campaigns from "../../pages/Campaigns/Campaigns";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Secret from "../../components/Secret/Secret";
import Payment from "../../pages/Payment/Payment";

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
                element: <Payment></Payment>
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