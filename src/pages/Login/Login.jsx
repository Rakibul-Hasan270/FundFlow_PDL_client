import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;
        try {
            await signInUser(email, password);
            toast.success('successfully login');
            reset();
            navigate(from, { replace: true });
        } catch (err) {
            toast.error(err?.message);
            console.log(err.message);
        }
    }

    return (
        <div className="max-w-xl p-2 md:p-16 border mx-auto rounded-2xl">
            <p className="text-2xl text-center font-bold mb-8">Please Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="name@example.com"
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>

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
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="password"
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </button>
                <p className="mt-2.5">New here? <Link className="text-blue-300" to='/register'>please register</Link></p>
            </form>
        </div>
    );
};

export default Login;