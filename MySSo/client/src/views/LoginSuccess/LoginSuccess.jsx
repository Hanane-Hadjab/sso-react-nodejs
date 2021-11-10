import React, { useEffect } from "react";
import "../../styles/css/style.css";

const LoginSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000)
  }, [])
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 offset-3 mt-4">
         Logged in !!!
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
