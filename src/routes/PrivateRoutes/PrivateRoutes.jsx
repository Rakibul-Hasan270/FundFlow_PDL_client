import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <p className="text-2xl font-bold text-yellow-400 mt-16">Loading...</p>

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;