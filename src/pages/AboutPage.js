
import React from "react";
import VideoArea from "../components/video";
import SearchBar from "../SearchBar/SearchBar";


function AboutPage(props) {
  return (
     <div>
        <h2>Welcome to the ABOUTpage!</h2>
        <br />
        <SearchBar />
        
      <VideoArea />
      <br />
      <div>
      <VideoArea />
      </div>
     </div>
  );
}


export default AboutPage;
