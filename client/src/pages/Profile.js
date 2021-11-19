import React from "react";
import { Redirect, useParams } from "react-router-dom";
// import CommentList from "../components/CommentList";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
// import CommentForm from "../components/CommentForm";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>
      </div>

      <div className="posts-container">
        <h2>Created Components</h2>
      </div>

      <div className="user-comp-cont-styles">
        <div className="user-comp-styles">
          <p className="comp-header">Your Components</p>
        <div className="space-image"></div>
        </div>
        <div className="comp-header">
          <p>Users Preferences</p>
        </div>

        {/* <div className="comments-layout">
          <CommentList
            comments={user.comments}
            title={`${user.username}'s comments...`}
          />
        </div> */}
      </div>
      {/* <div className="mb-3">{!userParam && <CommentForm />}</div> */}
    </div>
  );
};

export default Profile;
