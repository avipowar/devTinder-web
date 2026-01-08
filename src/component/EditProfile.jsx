import React, { useState } from "react";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  console.log(user.firstName);
  // const { firstName, lastName, photoUrl, about, age, gender } = user;
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender || "");

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
                  onChange={(e) => e.target.value}
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
                  onChange={(e) => setPhotoUrl(e.target.value)}
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
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>male</option>
                  <option>female</option>
                  <option>other</option>
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
                  onChange={(e) => e.target.value}
                ></textarea>
              </div>

              {/* button */}
              <div className="form-control my-10 flex justify-center">
                <button
                  className="btn btn-primary  w-40 mx-auto"
                  type="button"
                  onClick={handleSaveProfile()}
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
    </div>
  );
};

export default EditProfile;
