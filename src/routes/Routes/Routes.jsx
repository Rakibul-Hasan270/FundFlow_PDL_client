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
import AddReview from "../../pages/AddReview/AddReview";
import ManageUser from "../../pages/Dashboard/ManageUser/ManageUser";
import AddCampaigns from "../../pages/Dashboard/AddCampaigns/AddCampaigns";
import EditCampaigns from "../../pages/Dashboard/EditCampaigns/EditCampaigns";
import UpdateCampaigns from "../../pages/Dashboard/UpdateCampaigns/UpdateCampaigns";
import AdminRoutes from "../AdminRoutes/AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            // user role path 
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
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path: '/payment-history',
                element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
            },
            {
                path: '/add-review',
                element: <PrivateRoutes><AddReview></AddReview></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

            // admin role path
            {
                path: '/manage-user',
                element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
            },
            {
                path: '/add-campaigns',
                element: <AdminRoutes><AddCampaigns></AddCampaigns></AdminRoutes>
            },
            {
                path: '/edit-campaigns',
                element: <AdminRoutes><EditCampaigns></EditCampaigns></AdminRoutes>
            },
            {
                path: '/update-campaigns/:id',
                element: <AdminRoutes><UpdateCampaigns></UpdateCampaigns></AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            }
        ]
    }
])

export default router;