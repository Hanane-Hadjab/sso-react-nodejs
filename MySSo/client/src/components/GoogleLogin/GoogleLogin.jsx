import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
    render={(renderProps) => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
        Test
      </button>
    )}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />
 
,
  document.getElementById("googleButton")
);

