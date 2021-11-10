import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../styles/css/style.css";

const Dashboard = () => {

    const {user} = useContext(UserContext)
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3 mt-4">
         Welcome {user.fullName}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
