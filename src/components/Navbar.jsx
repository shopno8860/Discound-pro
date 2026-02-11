import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Grid, User, Info, LogIn, UserPlus, LogOut } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          <Home size={18} /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
        >
          <Grid size={18} /> Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive ? "text-secondary font-bold" : ""
            }
          >
            <User size={18} /> My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/about-dev"
          className={({ isActive }) =>
            isActive ? "text-secondary font-bold" : ""
          }
        >
          <Info size={18} /> About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-lg px-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-black gap-0"
        >
          <span className="text-primary">Discount</span>
          <span className="text-secondary">PRO</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-bold text-primary">
                {user.displayName}
              </p>
              <p className="text-[10px] opacity-70 truncate max-w-[120px]">
                {user.email}
              </p>
            </div>
            <div className="avatar dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:opacity-80 transition-opacity overflow-hidden">
                  <img
                    src={user.photoURL || "https://i.ibb.co/m0mq66p/user.png"}
                    alt="User"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="p-2 border-b border-base-200 mb-2">
                  <p className="font-bold">{user.displayName}</p>
                  <p className="text-xs opacity-60 truncate">{user.email}</p>
                </li>
                <li>
                  <Link to="/my-profile" className="flex gap-2">
                    <User size={16} /> Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex gap-2 text-error"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </li>
              </ul>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm hidden md:flex gap-1"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary btn-sm flex gap-1">
              <LogIn size={16} /> Login
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary btn-sm flex gap-1 hidden sm:flex"
            >
              <UserPlus size={16} /> Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
