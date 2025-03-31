import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000"; // Use environment variables in production

const CompanyList = () => {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/company`) // Ensure this API route exists in backend
      .then((response) => {
        setCompanyData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching company data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading company data...</p>;

  return (
    <div>
      <h2>Company List</h2>
      <ul>
        {companyData.map((company) => (
          <li key={company._id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={`${API_URL}/uploads/company/${company.photo}`} // ✅ Fixed image path
              alt={company.companyName}
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
            <strong>{company.companyName}</strong> - {company.companyType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
