import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Post from "../College/Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");
  const [postType, setPostType] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [postOption, setPostOption] = useState("");

  // Common Date Setup
  const today = new Date().toISOString().split("T")[0];

  // Internship & Job Fields
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  const [paidType, setPaidType] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");
  const [position, setPosition] = useState("");

// Event Fields
const [eventType, setEventType] = useState("");
const [eventLocation, setEventLocation] = useState("");
const [eventDate, setEventDate] = useState(today);
const [eventTime, setEventTime] = useState("");
const [eventOrganizer, setEventOrganizer] = useState("");


  // Hackathon Fields
  const [hackathonName, setHackathonName] = useState("");
  const [hackathonDate, setHackathonDate] = useState("");
  const [hackathonPlace, setHackathonPlace] = useState("");
  const [prizeDetails, setPrizeDetails] = useState("");

  // Seminar Fields
  const [seminarTitle, setSeminarTitle] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [seminarLocation, setSeminarLocation] = useState("");
  const [seminarDate, setSeminarDate] = useState("");

  // Guidance Fields
  const [guidanceTopic, setGuidanceTopic] = useState("");
  const [guidanceDescription, setGuidanceDescription] = useState("");

  const postOptions = ["Internship", "Event", "Hackathon", "Job", "Seminar", "Guidance"];
  const companyTypes = ["IT", "Healthcare", "Finance", "Education", "E-commerce", "Manufacturing", "Marketing", "Consulting", "Telecommunication", "Media", "Government", "Energy", "Automobile", "Real Estate"];

  const positions = ["Software Engineer", "Data Analyst", "Product Manager", "Marketing Executive", "HR Specialist", "Financial Analyst"];
  const handlePost = () => {
    if (postText.trim() === "" || postType === "") return;

    const newPost = {
      id: posts.length + 1,
      name: "Faculty Name",
      description: "Department - College Name",
      content: postText,
      postType,
      postOption: postType !== "Guidance" ? postOption : "",
      ...(postType === "Internship" || postType === "Job"
        ? {
            internshipDetails: {
              startDate,
              endDate,
              paidType,
              companyType,
              companyName,
              location,
              mode,
              ...(postType === "Job" && { position }),
            },
          }
        : {}),
        ...(postType === "Event" && {
          eventDetails: { 
            eventType, 
            location: eventLocation, 
            date: eventDate, 
            time: eventTime, 
            organizer: eventOrganizer 
          },
        }),
        
      ...(postType === "Hackathon" && {
        hackathonDetails: { name: hackathonName, date: hackathonDate, place: hackathonPlace, prizeDetails },
      }),
      ...(postType === "Seminar" && {
        seminarDetails: { title: seminarTitle, speaker: speakerName, location: seminarLocation, date: seminarDate },
      }),
      ...(postType === "Guidance" && {
        guidanceDetails: { topic: guidanceTopic, description: guidanceDescription },
      }),
    };

    setPosts([newPost, ...posts]);

    // Reset inputs after posting
    setPostText("");
    setPostType("");
    setPostOption("");
    setStartDate(today);
    setEndDate("");
    setPaidType("");
    setCompanyType("");
    setCompanyName("");
    setLocation("");
    setMode("");
    setPosition("");
    setEventType("");
    setEventLocation("");
    setHackathonName("");
    setHackathonDate("");
    setHackathonPlace("");
    setPrizeDetails("");
    setSeminarTitle("");
    setSpeakerName("");
    setSeminarLocation("");
    setSeminarDate("");
    setGuidanceTopic("");
    setGuidanceDescription("");
    setShowInput(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-4">
      {/* Start a Post */}
      {!showInput ? (
        <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer" onClick={() => setShowInput(true)}>
          <Avatar />
          <input type="text" placeholder="Start a post..." className="flex-grow bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none cursor-pointer" disabled />
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
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>


          {/* Internship & Job Fields */}
          {(postType === "Internship" || postType === "Job") && (
            <div className="mt-3 space-y-2 bg-white p-3 rounded-md shadow-md">
              <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full p-2 border rounded-md" />
              <select value={companyType} onChange={(e) => setCompanyType(e.target.value)} className="w-full p-2 border rounded-md">
                <option value="">Select Company Type</option>
                {companyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="date" placeholder="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" min={today} />
              <input type="date" placeholder="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" min={startDate} />
              <select value={mode} onChange={(e) => setMode(e.target.value)} className="w-full p-2 border rounded-md">
                <option value="">Select Mode</option>
                <option value="Remote">Remote</option>
                <option value="On-Site">On-Site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
              <select value={paidType} onChange={(e) => setPaidType(e.target.value)} className="w-full p-2 border rounded-md">
                <option value="">Select Paid Type</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
              {postType === "Job" && (
                <select value={position} onChange={(e) => setPosition(e.target.value)} className="w-full p-2 border rounded-md">
                  <option value="">Select Position</option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          {/* Hackathon Fields */}
          {postType === "Hackathon" && (
            <div className="mt-3 bg-white p-3 rounded-md shadow-md">
              <input type="text" placeholder="Hackathon Name" value={hackathonName} onChange={(e) => setHackathonName(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="date" value={hackathonDate} onChange={(e) => setHackathonDate(e.target.value)} className="w-full p-2 border rounded-md" min={today} />
              <input type="text" placeholder="Hackathon Location" value={hackathonPlace} onChange={(e) => setHackathonPlace(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Prize Details" value={prizeDetails} onChange={(e) => setPrizeDetails(e.target.value)} className="w-full p-2 border rounded-md" />
            </div>
          )}

          {/* Seminar Fields */}
          {postType === "Seminar" && (
            <div className="mt-3 bg-white p-3 rounded-md shadow-md">
              <input type="text" placeholder="Seminar Title" value={seminarTitle} onChange={(e) => setSeminarTitle(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Speaker Name" value={speakerName} onChange={(e) => setSpeakerName(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="text" placeholder="Seminar Location" value={seminarLocation} onChange={(e) => setSeminarLocation(e.target.value)} className="w-full p-2 border rounded-md" />
              <input type="date" value={seminarDate} onChange={(e) => setSeminarDate(e.target.value)} className="w-full p-2 border rounded-md" min={today} />
            </div>
          )}

          {/* Guidance Fields */}
          {postType === "Guidance" && (
            <div className="mt-3 bg-white p-3 rounded-md shadow-md">
              <input type="text" placeholder="Guidance Topic" value={guidanceTopic} onChange={(e) => setGuidanceTopic(e.target.value)} className="w-full p-2 border rounded-md" />
              <textarea placeholder="Description" value={guidanceDescription} onChange={(e) => setGuidanceDescription(e.target.value)} className="w-full p-2 border rounded-md"></textarea>
            </div>
          )}

          {/* Event Fields */}
          {postType === "Event" && (
            <div className="mt-3 bg-white p-3 rounded-md shadow-md">
              <select 
                value={eventType} 
                onChange={(e) => setEventType(e.target.value)} 
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Event Type</option>
                <option value="Workshop">Workshop</option>
                <option value="Conference">Conference</option>
                <option value="Webinar">Webinar</option>
                <option value="Tech Fest">Tech Fest</option>
                <option value="Career Fair">Career Fair</option>
                <option value="Networking Event">Networking Event</option>
              </select>
              
              <input 
                type="text" 
                placeholder="Event Location" 
                value={eventLocation} 
                onChange={(e) => setEventLocation(e.target.value)} 
                className="w-full p-2 border rounded-md" 
              />
              <input 
                type="date" 
                placeholder="Event Date" 
                value={eventDate} 
                onChange={(e) => setEventDate(e.target.value)} 
                className="w-full p-2 border rounded-md" 
                min={today} 
              />
              <input 
                type="time" 
                placeholder="Event Timing" 
                value={eventTime} 
                onChange={(e) => setEventTime(e.target.value)} 
                className="w-full p-2 border rounded-md" 
              />
              <input 
                type="text" 
                placeholder="Organizer Name" 
                value={eventOrganizer} 
                onChange={(e) => setEventOrganizer(e.target.value)} 
                className="w-full p-2 border rounded-md" 
              />
            </div>
          )}

          {/* Post Button */}
          <button onClick={handlePost} className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 mt-3">
            Post
          </button>
        </div>
      )}

      {/* Render Posts */}
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Feed; 
