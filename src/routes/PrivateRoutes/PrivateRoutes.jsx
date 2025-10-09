import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Loading from "../../components/Loading/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <Loading></Loading>;

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;