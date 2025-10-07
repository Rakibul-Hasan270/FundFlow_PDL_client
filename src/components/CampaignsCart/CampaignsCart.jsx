import { Link } from "react-router-dom";

const CampaignsCart = ({ campaigns }) => {

    const handelDonate = async (campaigns) => {

        console.log(campaigns);
    }

    return (
        <div className="relative card bg-white shadow-lg rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <figure className="relative h-48 overflow-hidden">
                <img
                    src={campaigns.image}
                    alt={campaigns.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h2 className="text-white font-bold text-lg">{campaigns.title}</h2>
                    <p className="text-gray-200 text-sm">{campaigns.location}</p>
                </div>
            </figure>
            <div className="card-body p-4">
                <p className="text-gray-700 text-sm line-clamp-3">{campaigns.description}</p>
                <div className="md:flex items-center justify-between">
                    <div className="flex flex-wrap gap-2 mt-2">
                        {campaigns.tags.map((tag, index) => (
                            <span key={index} className="badge badge-primary badge-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <Link to={`/payment`} className="w-full md:w-1/3 btn-sm mt-2 self-start">
                        <button onClick={() => handelDonate(campaigns)} className="btn btn-primary">Donate Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignsCart;