import CampaignsCart from "../../../components/CampaignsCart/CampaignsCart";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCampaigns from "../../../hook/useCampaigns";

const PopularCampaigns = () => {
    const [campaigns, , isLoading] = useCampaigns();
    console.log(campaigns);

    if (isLoading) return <Loading></Loading>;
    return (
        <div>
            <SectionTitle heading='Popular Campaigns' subHeading='lorem20fshkh  '></SectionTitle>
            <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    campaigns.slice(0, 6).map(campaigns => <CampaignsCart key={campaigns._id} campaigns={campaigns}></CampaignsCart>)
                }
            </div>
        </div>
    );
};

export default PopularCampaigns;