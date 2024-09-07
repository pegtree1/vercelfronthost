import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFamilyMembers, fetchFamilyMembersByUNID } from "../../redux/slice/family";
import FamilyTree from "../../mytree";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import queryString from 'query-string'; 
import "./landingpage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  const { isAuthenticated, userRole } = useAuth();

  useEffect(() => {
    if (id) {
      // If id is present in query parameters, fetch family members by UNID
      dispatch(fetchFamilyMembersByUNID(id));
    } else {
      // If no id, fetch all family members
      dispatch(fetchFamilyMembers());
    }
  }, [dispatch, id]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      if (userRole === "admin1") {
        navigate("/admin");
      } else if (userRole === "user") {
        navigate("/homepage");
      }
    } else {
      navigate("/login");
    }
  };

  const state = useSelector((state) => state.todo);
  const { data, isLoading, error } = state;
  console.log("data", data);

  return (
    <div className="landing-page-container">
      <div style={{ flex: 1 }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : data && data.length > 0 ? (
          <FamilyTree nodes={data} />
        ) : (
          <div>No data available</div>
        )}
      </div>

      {/* Button Positioned at the top-left corner */}
      <div style={{ position: "absolute", top: "50px", left: "10px" }}>
        <button
          type="button"
          onClick={handleButtonClick}
          style={{
            padding: "10px 30px",  // Smaller padding for compact button
            fontSize: "12px",      // Smaller font size
            cursor: "pointer",
            position: "relative",
            top: "20px",
            left: "0px",
          }}
        >
          {isAuthenticated ? (userRole === "admin1" ? "Admin" : "Homepage") : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
