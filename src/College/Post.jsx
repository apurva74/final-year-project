import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { MoreVertical, ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";

const Post = ({ name, description, content, postType, postOption, internshipDetails, eventDetails, hackathonDetails, seminarDetails, guidanceDetails }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  // Handle Like Button
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Handle Comment Submission
  const handleComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Handle Share Action
  const handleShare = () => {
    alert("Post shared successfully! 🚀");
  };

  return (
       <div className="bg-white p-4 shadow-md rounded-xl mt-4">
         {/* Header */}
         <div className="flex justify-between items-center mb-3">
           <div className="flex items-center space-x-3">
             <Avatar />
             <div>
               <h3 className="text-sm font-semibold">{name}</h3>
               <p className="text-xs text-gray-500">{description}</p>
             </div>
           </div>
           <MoreVertical className="text-gray-500 cursor-pointer" />
         </div>
   
         {/* Content */}
         <div className="text-sm text-gray-700 mb-3">
           <p>{content}</p>
         </div>
   
         {/* Post Type Badge */}
         {postType && (
           <div className="text-black font-bold px-1 py-1 bg-[#FFD700] rounded-full inline-block">
             {postType} {postOption && `- ${postOption}`}
           </div>
         )}
   
         {/* Internship & Job Details */}
         {internshipDetails && (
           <div className="mt-2 text-xs bg-gray-100 p-2 rounded-lg">
             <p><strong>📍 Location:</strong> {internshipDetails.location}</p>
             <p><strong>🏢 Company:</strong> {internshipDetails.companyName} ({internshipDetails.companyType})</p>
             <p><strong>📅 Duration:</strong> {internshipDetails.startDate} - {internshipDetails.endDate}</p>
             <p><strong>💰 Type:</strong> {internshipDetails.paidType}</p>
             <p><strong>💼 Mode:</strong> {internshipDetails.mode}</p>
             {internshipDetails.position && <p><strong>🔖 Position:</strong> {internshipDetails.position}</p>}
           </div>
         )}
   
         {/* Event Details */}
         {eventDetails && (
           <div className="mt-2 text-xs bg-gray-100 p-2 rounded-lg">
             <p><strong>📅 Date:</strong> {eventDetails.startDate} - {eventDetails.endDate}</p>
             <p><strong>⏰ Time:</strong> {eventDetails.time}</p>
             <p><strong>🎭 Type:</strong> {eventDetails.eventType}</p>
             <p><strong>📍 Location:</strong> {eventDetails.location}</p>
             {eventDetails.organizer && <p><strong>👥 Organizer:</strong> {eventDetails.organizer}</p>}
             {eventDetails.description && <p><strong>📝 Description:</strong> {eventDetails.description}</p>}
           </div>
         )}
   
         {/* Hackathon Details */}
         {hackathonDetails && (
           <div className="mt-2 text-xs bg-gray-100 p-2 rounded-lg">
             <p><strong>🏆 Name:</strong> {hackathonDetails.name}</p>
             <p><strong>📅 Date:</strong> {hackathonDetails.date}</p>
             <p><strong>📍 Location:</strong> {hackathonDetails.place}</p>
             <p><strong>💰 Prizes:</strong> {hackathonDetails.prizeDetails}</p>
           </div>
         )}
   
         {/* Seminar Details */}
         {seminarDetails && (
           <div className="mt-2 text-xs bg-gray-100 p-2 rounded-lg">
             <p><strong>🎤 Title:</strong> {seminarDetails.title}</p>
             <p><strong>👨‍🏫 Speaker:</strong> {seminarDetails.speaker}</p>
             <p><strong>📍 Location:</strong> {seminarDetails.location}</p>
             <p><strong>📅 Date:</strong> {seminarDetails.date}</p>
           </div>
         )}
   
         {/* Guidance Details */}
         {guidanceDetails && (
           <div className="mt-2 text-xs bg-gray-100 p-2 rounded-lg">
             <p><strong>📚 Topic:</strong> {guidanceDetails.topic}</p>
             <p><strong>📝 Description:</strong> {guidanceDetails.description}</p>
           </div>
         )}

      {/* Footer - Like, Comment, Share, Send */}
      <div className="border-t pt-2 flex justify-between text-gray-600 text-sm">
        {/* Like */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600" onClick={handleLike}>
          <ThumbsUp size={18} className={liked ? "text-blue-600" : ""} />
          <span>{liked ? "Liked" : "Like"} ({likes})</span>
        </div>

        {/* Comment */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600" onClick={() => setShowComments(!showComments)}>
          <MessageCircle size={18} />
          <span>Comment ({comments.length})</span>
        </div>

        {/* Share */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600" onClick={handleShare}>
          <Share2 size={18} />
          <span>Share</span>
        </div>

        {/* Send */}
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
          <Send size={18} />
          <span>Send</span>
        </div>
      </div>

      {/* Comment Section */}
      {showComments && (
        <div className="mt-3 bg-gray-100 p-2 rounded-lg">
          {comments.map((comment, index) => (
            <p key={index} className="text-sm text-gray-700 bg-white p-2 rounded-md my-1">{comment}</p>
          ))}

          {/* Add Comment */}
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button onClick={handleComment} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
