import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="navbar bg-base-300 fixed top-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img
            className="h-8 invert"
            alt="navbar-logo"
            src="https://cdn.iconscout.com/icon/free/png-512/free-programmer-icon-svg-download-png-9293160.png?f=webp&w=512"
          />
          DevTinder
        </a>
      </div>

      {user && (
        <div className="flex-none gap-2 mx-5">
          <div className="bg-base-300 text-xl">
            <h1>Welcome {user.user.firstName}</h1>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="login-user-photo" src={user.user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
