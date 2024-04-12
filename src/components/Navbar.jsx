import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import profile from "../assets/profile.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const listItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/profile">User Profile</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-xl  bg-red-50 rounded-lg font-merriweather uppercase">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-50 rounded-box w-52 font-bold"
          >
            {listItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost relative">
          <div className="md:h-6 md:w-6 md:absolute md:top-2 left-0 md:block hidden">
            <img src={profile} alt="" />
          </div>
          <div className="relative md:left-4 text-base md:text-2xl  font-extrabold bg-gradient-to-r from-pink-600 via-lime-500 to-orange-500 inline-block text-transparent bg-clip-text">
            Axis Commercial
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 font-bold">{listItems}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <label
            htmlFor=""
            className="flex justify-center items-center md:gap-2 md:flex-row flex-col-reverse "
          >
            <button
              className=" tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <img
                src={user ? user?.photoURL : ""}
                className="rounded-full h-10 w-10"
              />
            </button>
            <Link to="/login" onClick={handleSignOut}>
              <button className="px-1 md:px-4 py-1 md:py-2 rounded-3xl text-white bg-black  md:font-medium bg-opacity-70">
                Log out
              </button>
            </Link>
          </label>
        ) : (
          <Link to="/login">
            <button className="px-1 md:px-4 py-1 md:py-2 rounded-3xl text-white   bg-black font-thin md:font-medium bg-opacity-70">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
