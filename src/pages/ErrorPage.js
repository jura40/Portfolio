import React from 'react';
import {useNavigate} from 'react-router-dom';

function ErrorPage() {
    let navigate = useNavigate();
  return <div>
      <h1>du hade sökt fel sida</h1>
      <br />
      <div>
          Go till home page
                <button onClick={() => {
                    navigate("/")
                }}> home</button>
      </div>
  </div>;
}

export default ErrorPage;
