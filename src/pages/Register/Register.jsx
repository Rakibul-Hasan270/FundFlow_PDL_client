import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hook/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    const onSubmit = async (data) => {
        const imageFile = { image: data.photo[0] };
        const resImg = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (resImg.data.success) {
            const name = data.name;
            const email = data.email;
            const password = data.password;
            const photo = resImg.data.data.display_url;
            const userInfo = { name, email, photo };
            try {
                await createUser(email, password);
                await updateUserProfile(name, photo);
                // post user server 
                const resUser = await axiosPublic.post('/users', userInfo);
                if (resUser.data.insertedId) {
                    toast.success('successfully register');
                    navigate(from, { replace: true });
                    reset();
                }
            } catch (err) {
                toast.error(err?.message);
                console.log(err.mesage);
            }
        }

    }

    return (
        <div>
            <div className="max-w-xl p-2 md:p-16 border mx-auto rounded-2xl">
                <p className="text-2xl text-center font-bold mb-8 text-yellow-300"> Please Register</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name fild  */}
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Name
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-xs-light"
                            placeholder="name"
                        />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>

                    {/* photo url  */}
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Photo
                        </label>
                        <input
                            {...register('photo', { required: true })}
                            type="file" className="file-input  file-input-warning w-full"
                        />
                        {errors.photo && <span className="text-red-500">Photo is required</span>}
                    </div>

                    {/* email fild  */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-xs-light"
                            placeholder="name@example.com"
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>

                    {/* password fild  */}
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            {...register('password', { required: true })}
                            type="password"
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-xs-light" placeholder="password"
                        />
                        {errors.password && <span className="text-red-500">Password is required</span>}
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                    >
                        Login
                    </button>
                    <p className="mt-2.5">Already have account? <Link className="text-yellow-300" to='/login'>please login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;