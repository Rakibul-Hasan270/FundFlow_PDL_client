import { Link, NavLink } from "react-router-dom";



const Navbar = () => {

    const links = <div className='md:flex justify-end items-center'>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>Home</NavLink></li>
        <li><NavLink to="/campaigns" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>Campaigns</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "text-cyan-400 font-bold underline" : "text-cyan-500"}>Login</NavLink></li>
    </div>

    return (
        <div className="max-w-6xl mx-auto navbar bg-base-100 shadow-sm md:flex md:justify-center md:items-center">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="hidden lg:block w-[50px]" to='/'>PDL<img className="rounded-full bg-cyan-800" src='' alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end bg-pink-600 mr-4 md:w-[100px]">
                {/* <div className="dropdown dropdown-end rounded-field border-2 border-cyan-400 rounded-full">
                    <div title={user ? user.displayName : 'Profile'} tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user?.photoURL} alt="" /> : <img alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <button disabled={true} className="hover:bg-cyan-700">
                                <CgProfile></CgProfile> Profile
                            </button>
                        </li>
                        < li >
                            {
                                user ?
                                    isAdmin ? <Link className="hover:bg-cyan-700" to='/dashboard/manageMenuItem'><span className="flex items-center gap-[7px]"><MdDashboardCustomize></MdDashboardCustomize>Dashboard</span></Link> : <Link className="hover:bg-cyan-700" to='/dashboard/userCart'><span className="flex items-center gap-[7px]"><MdDashboardCustomize></MdDashboardCustomize>Dashboard</span></Link>
                                    :
                                    ''
                            }
                        </li>
                        <li onClick={() => logOut()}><a className="hover:bg-cyan-700"><BiLogOutCircle></BiLogOutCircle> Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div >
    );
};

export default Navbar;