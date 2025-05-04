import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/allTreatments">All Treatments</NavLink>{" "}
      </li>
      {user && (
        <li>
          <NavLink to="/myProfile">My Profile</NavLink>{" "}
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/myAppointments">My Appointments</NavLink>{" "}
        </li>
      )}
    </>
  );

  return (
    <div className="px-10 bg-blue-950">
      <div className="navbar  text-white ">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            Teeth Wizerd
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <img src="" alt="" />
          {user ? (
            <button onClick={logOut} className="border-2 px-4 py-2 rounded-lg">
              LogOut
            </button>
          ) : (
            <Link to="/login" className="border-2 px-6 py-2 rounded-lg">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
