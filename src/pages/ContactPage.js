import React from "react";
import youtube from '../components/bild/youtube.png'
import {useNavigate} from 'react-router-dom';
import kyh from '../components/bild/kyh.png';
import {ReactComponent as ReactLogo} from '../components/bild/logo192.png';
import Mail from "../components/Mail";
import SearchBar from "../SearchBar/SearchBar";



function ContactPage(props) {
    let navigate = useNavigate();
  return (
     <div>
         <div>
              <Mail></Mail>
         </div>
        <h2>Welcome to Contact!</h2>
        <h1>Här kan du se mina videos från YouToube</h1>
        
       
        <div className="YoutubeLogo">
            <img src= {require ('../components/bild/youtube.png')}
            alt ="React" style = {{height : "35px", width : "50px", borderRadius : "50%"}} />
            <div className="TwitterLogo">
                <img src = {require ('../components/bild/logo192.png')}
                alt ='React' style= {{height : '50px', width : '70px',}} />

            </div>
            <div>
                <img src = {kyh} style = {{height : "350px", width : "500px", borderRadius : "50%"}} />
            </div>
            
            <div>
                <img src = {youtube} height={200} width={200} />
            </div>
            <div>
                {/* <ReactLogo />                 */}
                <img src = "https://wpjoblist.com/wp-content/uploads/2019/07/maxresdefault.jpg" />
            </div>
                <br/>
            

        </div>
            <div>
                Go till home page
                <button onClick={() => {
                    navigate("/")
                }}> Bra sagt</button>
                
            </div>
        
      
     </div>
  );
}

export default ContactPage;