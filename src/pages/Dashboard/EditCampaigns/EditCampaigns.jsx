import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loading from "../../../components/Loading/Loading";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCampaigns from "../../../hook/useCampaigns";
import Notiflix from "notiflix";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const EditCampaigns = () => {
    const [campaigns, refetch, isLoading] = useCampaigns();
    const axiosSecure = useAxiosSecure();

    const handleDelete = camp => {
        Notiflix.Confirm.show(
            'Are you sure?',
            'You won’t be able to revert this!',
            'Yes, Delete it',
            'Cancel',
            async () => {
                try {
                    const resDelete = await axiosSecure.delete(`/campaigns/${camp._id}`);
                    if (resDelete.data.deletedCount > 0) {
                        Notiflix.Report.success(
                            'Deleted!',
                            `${camp.name} has been deleted successfully.`,
                            'OK'
                        );
                        refetch();
                        toast.success(`${camp.name} has been deleted`);
                    }
                } catch (error) {
                    console.error(error);
                    Notiflix.Report.failure(
                        'Error',
                        'Failed to delete user. Please try again.',
                        'OK'
                    );
                }
            },
            {
                width: '320px',
                okButtonBackground: '#3085d6',
                titleColor: '#e84118',
            }
        );
    }

    if (isLoading) return <Loading></Loading>;
    return (
        <div className="max-w-6xl mx-auto mt-8 md:mt-16">
            <SectionTitle heading='Edit Campaign Details' subHeading='Update the campaign information to keep it accurate and up to date.'></SectionTitle>

            <p className="text-xl md:text-2xl font-semibold md:font-bold text-center mb-3.5 md:mb-6">Total campaigns: ({campaigns.length})</p>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            campaigns.map((camp, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={camp.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{camp.title}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {camp.description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{camp.tags.map((tag, idx) => <p className="badge" key={idx}>{tag}</p>)}</span>
                                </td>
                                <td>
                                    <Link to={`/update-campaigns/${camp._id}`}>
                                        <button title="Edit campaigns" className="btn"><FaEdit className="text-cyan-400"></FaEdit></button>
                                    </Link>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(camp)} title="Delete campaigns" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditCampaigns;