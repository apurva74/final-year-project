import React, { useState } from "react";
import { Avatar } from "@mui/material";
import PostC from "../Company/PostC";

function FeedC() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [postType, setPostType] = useState("");
  const [showInput, setShowInput] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // Job & Internship Fields
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  const [paidType, setPaidType] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");

  // Seminar Fields
  const [employeeName, setEmployeeName] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState("");

  // Hackathon Fields
  const [hackathonTitle, setHackathonTitle] = useState("");
  const [hackathonLocation, setHackathonLocation] = useState("");
  const [hackathonDate, setHackathonDate] = useState("");

  const postOptions = ["Job", "Internship", "Seminar", "Hackathon"];

  const handlePost = () => {
    if (postText.trim() === "" || postType === "") return;

    const newPost = {
      id: posts.length + 1,
      name: "Company Name",
      description: "Industry - Location",
      content: postText,
      postType,
      postDetails: {
        startDate,
        endDate,
        paidType,
        location,
        mode,
        position,
        description,
        employeeName,
        employeeDetails,
        hackathonTitle,
        hackathonLocation,
        hackathonDate,
      },
    };

    setPosts([newPost, ...posts]);

    // Reset all input fields after posting
    setPostText("");
    setPostType("");
    setStartDate(today);
    setEndDate("");
    setPaidType("");
    setLocation("");
    setMode("");
    setPosition("");
    setDescription("");
    setEmployeeName("");
    setEmployeeDetails("");
    setHackathonTitle("");
    setHackathonLocation("");
    setHackathonDate("");
    setShowInput(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-4">
      {/* Start a Post */}
      {!showInput ? (
        <div
          className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => setShowInput(true)}
        >
          <Avatar />
          <input
            type="text"
            placeholder="Start a post..."
            className="flex-grow bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none cursor-pointer"
            disabled
          />
        </div>
      ) : (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex items-center gap-3">
            <Avatar />
            <input
              type="text"
              placeholder="Write your post..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="flex-grow bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
            />
          </div>

          {/* Post Type Dropdown */}
          <div className="mt-3">
            <select
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 bg-white text-sm focus:outline-none"
            >
              <option value="">Select Post Type</option>
              {postOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Job & Internship Fields */}
          {(postType === "Job" || postType === "Internship") && (
            <div className="mt-3 space-y-2 bg-white p-3 rounded-md shadow-md">
              <input
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                min={today}
              />
              <input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                min={startDate}
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}

          {/* Seminar Fields */}
          {postType === "Seminar" && (
            <div className="mt-3 space-y-2 bg-white p-3 rounded-md shadow-md">
              <input
                type="text"
                placeholder="Employee Name"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <textarea
                placeholder="Employee Details"
                value={employeeDetails}
                onChange={(e) => setEmployeeDetails(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}

          {/* Hackathon Fields */}
          {postType === "Hackathon" && (
            <div className="mt-3 space-y-2 bg-white p-3 rounded-md shadow-md">
              <input
                type="text"
                placeholder="Hackathon Title"
                value={hackathonTitle}
                onChange={(e) => setHackathonTitle(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Location"
                value={hackathonLocation}
                onChange={(e) => setHackathonLocation(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="date"
                placeholder="Date"
                value={hackathonDate}
                onChange={(e) => setHackathonDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          )}

          <button
            onClick={handlePost}
            className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 mt-3"
          >
            Post
          </button>
        </div>
      )}

      {/* Render Posts */}
      {posts.map((post) => (
        <PostC key={post.id} {...post} />
      ))}
    </div>
  );
}

export default FeedC;
