import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <div className="errorPage">
      <button onClick={handleClick}>previous page</button>
      <p>page not found</p>
    </div>
  );
};
export default ErrorPage;
