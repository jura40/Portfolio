import React from 'react';
import emailjs from 'emailjs-com'


const Mail = () => {
    function sendEmail (e) {
        e.preventDefault ();
        emailjs.sendForm('service_a3ar4er',
         'template_j7q6alp', 
         e.target, 
         "user_Fweji4DdWYUCze8XFZiqZ"
         ).then (res => {
             console.log(res);
         }).catch(err => console.log(err));
    }
  return( 
    <div className="container border"
        style = {{marginTop :'50px', 
        width : '50%',
        backgroundImage: `url('https://media.istockphoto.com/vectors/abstract-blurred-colorful-background-vector-id1248542684?k=20&m=1248542684&s=612x612&w=0&h=1yKiRrtPhiqUJXS_yJDwMGVHVkYRk2pJX4PG3TT4ZYM=')`,
        backgroundPosition : "center",
        backgroundSize : "cover",
    }}>
      <h1 style = {{marginTop : "25px"}}>Skicka mail till mig</h1>
      <form className='row' style = {{ margin : "25px 85px 75px 100px"}} 
      onSubmit={sendEmail}>
          <label>name</label>
          <input type ="text" name = 'name' className='form-control'  />

          <label>email</label>
          <input type ="email" name ="user_email" className='form-control' />

          <label>Meddelande</label>
          <textarea name="message" rows ='8' className='form-control'  />
          <br />
          <input type="submit" 
           value='send' 
           className='form-control btn btn-primary'
           style ={{ marginTop : "30px" }}
           />
      </form>
  </div>
  );
}

export default Mail;
