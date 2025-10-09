import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCampaigns = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] };
        const resImg = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (resImg.data.success) {
            try {
                const formattedData = { ...data, image: resImg.data.data.display_url, tags: data.tags.split(",").map(tag => tag.trim()) };
                const resPostData = await axiosSecure.post('/campaigns', formattedData);
                if (resPostData.data.insertedId) {
                    console.log(formattedData);
                }
            } catch (err) {
                toast.error(err?.message);
                console.log(err?.message);
            }
        }
        reset();
    };

    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle heading='Create a New Campaign' subHeading='Start a meaningful journey by launching a new donation campaign. Share your cause, inspire others, and make a real difference in the community.'></SectionTitle>

            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-semibold">Title</label>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Free Health Camp for Rural Families"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-1 font-semibold">Category</label>
                        <select
                            {...register("category", { required: true })}
                            className="w-full border p-2 rounded"
                        >
                            <option value="">Select a category</option>
                            <option value="Medical">Medical</option>
                            <option value="Education">Education</option>
                            <option value="Food">Food</option>
                            <option value="Shelter">Shelter</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-1 font-semibold">Description</label>
                        <textarea
                            {...register("description", { required: true })}
                            rows={3}
                            placeholder="Providing free checkups, medicines, and health awareness to rural communities."
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    {/* image fild  */}
                    <div>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            id="image"
                            className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg 
               file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full 
               dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 
               dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring 
               focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 
               dark:focus:border-blue-300"
                        />
                        {errors.image && <span className="text-red-500 text-xs">Image is required</span>}
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-semibold">Location</label>
                        <input
                            {...register("location", { required: true })}
                            type="text"
                            placeholder="Kushtia, Bangladesh"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block mb-1 font-semibold">Tags (comma separated)</label>
                        <input
                            {...register("tags", { required: true })}
                            type="text"
                            placeholder="health, rural"
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                    >
                        Add Campaign
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddCampaigns;