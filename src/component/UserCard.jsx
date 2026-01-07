import React from "react";

const UserCard = ({ feedData }) => {
  console.log(feedData);
  const { firstName, lastName, about, photoUrl } = feedData;

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn  btn-error  mx-5">Ignored</button>
          <button className="btn btn-success">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
