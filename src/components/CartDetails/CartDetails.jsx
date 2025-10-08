import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxiosSecure";

const CartDetails = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const campaigns = useLoaderData();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const donarData = {
            name: data.name,
            date: data.date,
            commenet: data.comment,
            amount: data.price,
            email: user.email,
            // donateCartId: campaigns._id
        }
        const res = await axiosSecure.post('/donar-info', donarData);
        if (res.data.insertedId) {
            navigate('/payment');
            toast.success(`${data.name} your reqest is saved`);
            reset();
        }
    }

    return (
        <div className="mt-20 mb-28">
            <SectionTitle heading='Kindly fill in the required details' subHeading='We’d love to hear from you! Please fill out the form'></SectionTitle>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
                    Please fill up form
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="name"
                                className="text-gray-700 dark:text-gray-200"
                            >
                                Donar Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-2">Name is required</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="date"
                                className="text-gray-700 dark:text-gray-200"
                            >
                                Donate Date
                            </label>
                            <input
                                {...register('date', { required: true })}
                                type="date"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-2">Date is required</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="comment"
                                className="text-gray-700 dark:text-gray-200"
                            >
                                Comment
                            </label>
                            <input
                                {...register('comment', { required: true })}
                                type="comment"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.comment && <p className="text-red-500 text-xs mt-2">Comment is required</p>}
                        </div>

                        <div>
                            <label
                                htmlFor="price"
                                className="text-gray-700 dark:text-gray-200"
                            >
                                Amount
                            </label>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                            {errors.price && <p className="text-red-500 text-xs mt-2">Price is required</p>}
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                            Payment now
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CartDetails;