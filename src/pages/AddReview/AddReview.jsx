import toast from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hook/useAxiosSecure";

const AddReview = () => {
    const axiosSecure = useAxiosSecure();

    const handelSubmitReview = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const role = form.role.value;
        const image = form.image.value;
        const comment = form.comment.value;

        const reviewInfo = { name, role, image, review: comment };

        try {
            const resReview = await axiosSecure.post('/reviews', reviewInfo);
            if (resReview.data.insertedId) {
                toast.success(`collect your review Mr.${name}`);
                form.reset();
            }
        } catch (error) {
            toast.error(error?.message);
            console.log(error);
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md">
            <SectionTitle heading="Your Voice Matters" subHeading="Share your experience! Add your review to let others know how this donation platform has made a difference." />

            <form onSubmit={handelSubmitReview} className="mt-6 space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Type your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Role / Company Name</label>
                    <input
                        type="text"
                        name="role"
                        placeholder="Your role or company name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Upload Image Url</label>
                    <input
                        type="text"
                        name="image"
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Your Review / Comment</label>
                    <textarea
                        name="comment"
                        placeholder="Write your review here..."
                        className="textarea textarea-bordered w-full"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-full mt-4"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
