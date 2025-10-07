import CampaignsCart from "../../components/CampaignsCart/CampaignsCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCampaigns from "../../hook/useCampaigns";

const Campaigns = () => {
    const [campaigns] = useCampaigns();

    return (
        <div className="max-w-7xl mx-auto mt-16 mb-10">
            <div className="text-center mb-10">
                <p className="flex items-center justify-center gap-2 md:w-xl mb-3 mx-auto font-bold text-cyan-500">Donate to Active Campaigns</p>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    Together, We Can Create a <br /> Better
                    <span className="text-transparent ml-4 bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
                        Tomorrow
                    </span>
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl md:w-10/12 mx-auto mt-6 dark:text-gray-400">
                    Support meaningful campaigns that bring food, shelter, education, and hope to those who need it most.Every donation counts. Together, we can empower communities and bring lasting change.
                </p>
            </div>

            <SectionTitle heading='Campiagns List' subHeading='Support meaningful campaigns that bring food, shelter, education, and hope to those who need it most.Every donation counts. Together, we can empower communities and bring lasting change.'></SectionTitle>
            <div className="grid grid-cols-1 mx-auto gap-2.5 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    campaigns.slice(0, 9).map(campaigns => <CampaignsCart key={campaigns._id} campaigns={campaigns}></CampaignsCart>)
                }
            </div>
        </div>
    );
};

export default Campaigns;