// import { useMutation } from "@apollo/client";
import React from "react";
// import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
// import { REMOVE_COMMENT } from "../../utils/mutations";
// import { QUERY_COMMENTS, QUERY_ME } from "../../utils/queries";

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  // const [removeComment, { error }] = useMutation(REMOVE_COMMENT, {
  //   update(cache, { data: { removeComment } }) {
  //     try {
  //       const { comments } = cache.readQuery({ query: QUERY_COMMENTS });
  //       cache.writeQuery({
  //         query: QUERY_COMMENTS,
  //         data: { comments: [removeComment, ...comments] },
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }

  //     // remove comment from me object
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, comments: [...me.comments, removeComment] } },
  //     });
  //   },
  // });

  // const handleDeleteComment = async (commentId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const response = await handleDeleteComment(commentId, token);
  //     if (!response.ok) {
  //       throw new Error("something went wrong");
  //     }
  //     const updateComment = "d";
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    // <div className="comment-body-styles">
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map((comment) => (
          // <div key={comment._id} className="card mb-3">
          <div key={comment._id} className="comment-body-styles">
            <div className="card-body">
              <div className="body-font-styles">
                <div className="text-dec">
                  <p>{comment.commentText}</p>
                  {/* <p className="mb-0">
                  Response(s): {comment.reactionCount} || Click to{" "}
                  {comment.reactionCount ? "see" : "start"} the discussion!
                </p> */}
                  {/* <p className="mb-0">
                  This comment has {comment.reactionCount} response(s). Click to{" "}
                  {comment.reactionCount ? "see" : "start"} the discussion!
                </p> */}
                </div>
              </div>
            </div>

            <p className="card-header">
              <div
                // to={`/profile/${comment.username}`}
                // style={{ fontWeight: 600 }}
                className="text-light"
              >
                Written By: {comment.username}
              </div>{" "}
              <div className="text-light">on {comment.createdAt} </div>
            </p>
            {/* <div className="card-body">
              <Link to={`/comment/${comment._id}`}>
                <p>{comment.commentText}</p>
                <p className="mb-0">
                  Response(s): {comment.reactionCount} || Click to{" "}
                  {comment.reactionCount ? "see" : "start"} the discussion!
                </p>
              </Link>
            </div> */}
          </div>
        ))}
    </div>
  );
};

export default CommentList;
