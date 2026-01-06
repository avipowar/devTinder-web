import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
  return (
    <div className="navbar bg-base-300 fixed top-0 left-0 w-full h-16 z-50">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img
            className="h-8 invert"
            alt="navbar-logo"
            src="https://cdn.iconscout.com/icon/free/png-512/free-programmer-icon-svg-download-png-9293160.png?f=webp&w=512"
          />
          DevTinder
        </Link>
      </div>

      {user && (
        <div className="flex-none gap-2 mx-5">
          <div className="bg-base-300 text-xl">
            <h1>Welcome {user.firstName}</h1>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="login-user-photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/Settings"}>Settings</Link>
              </li>
              <li>
                {/* <Link to={"/login"} onClick={handleLogOut}>
                  {" "}
                  Logout
                </Link> */}
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
