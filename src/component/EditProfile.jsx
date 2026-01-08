import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  console.log(user.firstName);
  // const { firstName, lastName, photoUrl, about, age, gender } = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          about,
          age,
          gender,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setInterval(() => {
        setShowToast();
      }, 3000);
    } catch (error) {
      if (error.status === 404) {
        setError("Invalid Credentials");
      }
    }
  };

  return (
    <div className="flex justify-center my-20 ">
      <div className="flex items-start justify-center mx-10">
        <div className="card w-96 bg-neutral text-neutral-content shadow-xl border-primary">
          <div className="card-body  overflow-visible">
            <h2 className="card-title justify-center">Edit Profile</h2>

            <form className="space-y-4">
              {/* firstName */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">FirstName</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* lastName */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LastName</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              {/* PhotoUrl */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>

              {/* AGE */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              {/* ✅ Gender  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>

                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="select"
                >
                  <option disabled={true}>Select Gender</option>
                  <option>male</option>
                  <option>female</option>
                  <option>others</option>
                </select>
              </div>

              {/* about */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">About</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder=""
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>

              <p className="text-red-500 text-center">{error}</p>

              {/* button */}
              <div className="form-control my-10 flex justify-center">
                <button
                  className="btn btn-primary  w-40 mx-auto"
                  type="button"
                  onClick={handleSaveProfile}
                >
                  Save Profiles
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <UserCard
          feedData={{ firstName, lastName, photoUrl, about, age, gender }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center mt-16">
          <div className="alert alert-success">
            <span>Update Profile successfully.</span>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default EditProfile;
