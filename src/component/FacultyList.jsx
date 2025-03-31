import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000"; // Use environment variables for deployment

const FacultyList = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/faculty`)
      .then((response) => {
        setFacultyData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching faculty data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading faculty data...</p>;

  return (
    <div>
      <h2>Faculty Members</h2>
      <ul>
        {facultyData.map((faculty) => (
          <li key={faculty._id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={`${API_URL}/uploads/faculty/${faculty.photo}`} // ✅ Fixed Image Path
              alt={faculty.username}
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
            <strong>{faculty.username}</strong> - {faculty.designation} at {faculty.collegeName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyList;
