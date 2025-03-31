import React from "react";
import "../css file/college.css";

function LatestComments({ comments }) {
  return (
    <div className="latest-comments">
      <h3>Latest Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.slice(-5).map((comment, index) => (
          <div key={index} className="comment-item">
            <strong>{comment.user}</strong>: {comment.text}
          </div>
        ))
      )}
    </div>
  );
}

export default LatestComments;
