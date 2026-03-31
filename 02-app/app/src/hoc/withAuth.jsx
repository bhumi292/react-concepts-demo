import React from "react";

function WithAuth(WrappedComponent) {
  return function AuthComponent(props) {

    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default WithAuth;