import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../authentications/Auth";

const Header = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/applied ">Applied Jobs</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="  ">
      <div className="navbar bg-gradient-to-r from-[#c8cff3dc] from-0%   to-[#cec0f1] to-100%  ">
        <div className="navbar-start ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-xl">
            Career Hub
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end font-semibold text-xl  ">
          {user ? (
            <NavLink to={"/"} className="px-2 py-1  btn-gradient rounded-md ">
              Register/Login
            </NavLink>
          ) : (
            <NavLink
              to={"/register"}
              className="px-2 py-1 btn-gradient rounded-md"
            >
              Sign Out
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
