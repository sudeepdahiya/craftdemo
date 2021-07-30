import React from 'react';
import './index.css';

const ErrorPage = (props) => {
  return (
    <div className="errorContainer">
      <div>Error! {props.message}</div>
    </div>
  );
};

export default ErrorPage;
