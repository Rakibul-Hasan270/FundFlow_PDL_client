import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data, 'isAdmin from useAdmin');
            return res.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading];
};

export default useAdmin;