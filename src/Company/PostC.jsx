import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function PostC({ name, description, content, postType, postDetails }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentText.trim() === "") return;
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 mb-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-2">
        <Avatar />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Post Content */}
      <div> <p className="mb-3">{content}</p></div>
     

      {/* Dynamically Render Post Details */}
      {postType === "Job" || postType === "Internship" ? (
        <div className="bg-gray-100 p-3 rounded-md">
          <p><strong>Position:</strong> {postDetails.position}</p>
          <p><strong>Location:</strong> {postDetails.location}</p>
          <p><strong>Start Date:</strong> {postDetails.startDate}</p>
          <p><strong>End Date:</strong> {postDetails.endDate}</p>
          <p><strong>Mode:</strong> {postDetails.mode}</p>
          <p><strong>Paid Type:</strong> {postDetails.paidType}</p>
          <p><strong>Description:</strong> {postDetails.description}</p>
        </div>
      ) : null}

      {postType === "Seminar" ? (
        <div className="bg-gray-100 p-3 rounded-md">
          <p><strong>Employee Name:</strong> {postDetails.employeeName}</p>
          <p><strong>Employee Details:</strong> {postDetails.employeeDetails}</p>
          <p><strong>Location:</strong> {postDetails.location}</p>
        </div>
      ) : null}

      {postType === "Hackathon" ? (
        <div className="bg-gray-100 p-3 rounded-md">
          <p><strong>Hackathon Title:</strong> {postDetails.hackathonTitle}</p>
          <p><strong>Location:</strong> {postDetails.hackathonLocation}</p>
          <p><strong>Date:</strong> {postDetails.hackathonDate}</p>
        </div>
      ) : null}

      {/* Like, Comment, Share, Send Section */}
      <div className="flex items-center justify-between mt-4 border-t pt-2 text-gray-500">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLike}>
          <ThumbUpIcon />
          <span>Like ({likes})</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <ChatBubbleOutlineIcon />
          <span>Comment ({comments.length})</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <ShareIcon />
          <span>Share</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <SendIcon />
          <span>Send</span>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-3">
        <input
          type="text"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full border rounded-md p-2"
        />
        <button
          onClick={handleComment}
          className="bg-blue-500 text-white px-3 py-1 rounded-md mt-2"
        >
          Comment
        </button>

        {/* Render Comments */}
        {comments.map((comment, index) => (
          <div key={index} className="mt-2 border-t pt-2">
            <p><strong>User:</strong> {comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostC;
