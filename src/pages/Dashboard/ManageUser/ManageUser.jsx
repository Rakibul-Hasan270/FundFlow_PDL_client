import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Notiflix from "notiflix";
import Loading from "../../../components/Loading/Loading";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleDelete = (user) => {
        Notiflix.Confirm.show(
            'Are you sure?',
            'You won’t be able to revert this!',
            'Yes, Delete it',
            'Cancel',
            async () => {
                try {
                    const resDelete = await axiosSecure.delete(`/users/${user._id}`);
                    if (resDelete.data.deletedCount) {
                        Notiflix.Report.success(
                            'Deleted!',
                            'User has been deleted successfully.',
                            'OK'
                        );
                        refetch();
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
    };


    if (isLoading) return <Loading></Loading>
    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle heading='Manage Your People' subHeading='Empower admins, organize members, and streamline access'></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image/Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) =>
                                <tr key={user._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold">{user.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.role === 'admin' ? <p className="text-cyan-500">Admin</p> : <button title="Make Admin" className="btn"><FaUsers className="text-cyan-400"></FaUsers></button>}
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(user)} title="Delete User" className="btn"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;