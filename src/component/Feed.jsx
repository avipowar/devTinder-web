import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => {
    store.feed;
  });

  const getFeed = async () => {
    try {
      const feed = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(feed.data.users[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feedData && (
      <div className="flex justify-center mt-9">
        <UserCard feedData={feedData} />
      </div>
    )
  );
};

export default Feed;
