import { Link } from "react-router-dom";
import useCampaigns from "../../hook/useCampaigns";
import Loading from "../Loading/Loading";

const CampaignsCart = ({ campaigns }) => {
    const [, , isLoading] = useCampaigns();

    if (isLoading) return <Loading></Loading>;
    return (
        <div className="relative card bg-white shadow-lg rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative h-48 overflow-hidden">
                <img
                    src={campaigns.image}
                    alt={campaigns.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h2 className="text-white font-bold text-lg">{campaigns.title}</h2>
                    <p className="text-gray-200 text-sm">{campaigns.location}</p>
                </div>
            </figure>

            <div className="card-body p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-700 text-sm line-clamp-6 md:line-clamp-3">
                    {campaigns.description}
                </p>

                <div className="mt-3 md:mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <div className="flex flex-wrap gap-2">
                        {campaigns.tags.map((tag, index) => (
                            <span key={index} className="badge badge-primary badge-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <Link to={`/cart-detail/${campaigns._id}`} className="w-full md:w-auto">
                        <button className="btn btn-primary btn-sm w-full md:w-auto">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignsCart;