import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCampaigns = () => {
    const axiosPublic = useAxiosPublic();

    const { data: campaigns = [], refetch, isLoading } = useQuery({
        queryKey: ['campaigns'],
        queryFn: async () => {
            const res = await axiosPublic.get('/campaigns');
            return res.data;
        }
    })
    return [campaigns, refetch, isLoading];
};

export default useCampaigns;