import { useNavigate } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Lottie from "lottie-react";
import donationAnimation from '../../assets/lottie file/Donation animation.json';

const CartDetails = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
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
        };
        const res = await axiosSecure.post('/donar-info', donarData);
        if (res.data.insertedId) {
            navigate('/payment');
            toast.success(`${data.name}, processing your payment and saving info.`);
            reset();
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 mt-16 mb-28">
            <SectionTitle
                heading="Kindly fill in the required details"
                subHeading="We’d love to hear from you! Share your thoughts, questions, or feedback using the form below and help us connect with you better."
            />

            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-white mb-4">
                        Please fill up the form
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="text-gray-700 dark:text-gray-200">
                                    Donor Name
                                </label>
                                <input
                                    {...register('name', { required: true })}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">Name is required</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="date" className="text-gray-700 dark:text-gray-200">
                                    Donate Date
                                </label>
                                <input
                                    {...register('date', { required: true })}
                                    type="date"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-xs mt-1">Date is required</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="comment" className="text-gray-700 dark:text-gray-200">
                                Comment
                            </label>
                            <input
                                {...register('comment', { required: true })}
                                type="text"
                                placeholder="Write your message..."
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.comment && (
                                <p className="text-red-500 text-xs mt-1">Comment is required</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="price" className="text-gray-700 dark:text-gray-200">
                                Amount
                            </label>
                            <input
                                {...register('price', { required: true })}
                                type="number"
                                placeholder="Enter donation amount"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.price && (
                                <p className="text-red-500 text-xs mt-1">Amount is required</p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                            >
                                Payment Now
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden">
                    <div className="w-full max-w-md h-64 sm:h-80 md:h-[500px]">
                        <Lottie
                            className="w-full h-full"
                            animationData={donationAnimation}
                            loop={true}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartDetails;