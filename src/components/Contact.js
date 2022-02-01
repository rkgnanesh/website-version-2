import React from 'react'
import "./Contact.css"
import emailjs from "emailjs-com"

function Contact({theme}) {
 function sumbitForm(e) {

  e.preventDefault();
  emailjs.sendForm("service_30iek2d", "template_80xjv78", e.target, "user_e272cI1qYYzEjxWwBc6em")
  .then((result)=> {
    console.log(result.text)
    document.getElementById("mesgSent").innerText = "Message Sent"
    document.getElementById("contact-form").reset()
    document.getElementById("submit").value = "Send Again"
  }, (error)=>{
    console.log(error.text)
  })
 }
    return (
        <section id="contact" className={`${theme ? "sky" : ""}`}>
  
  <h1 className="section-header" data-aos="fade-out-down">CONTACT</h1>
  
  <div className="contact-wrapper">
  

    
    <form id="contact-form" className="form-horizontal" onSubmit={sumbitForm}>
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="Name"  required />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea><br></br>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane" id="mesgSent">hi</i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>

    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Bangalore, India</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:9620679264" title="Give me a call">(+91) 9620 679264</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:rkgnanesh1@gmail.com" title="Send me an email">rkgnanesh1@gmail.com</a></span></i></li>
          
        </ul>

        <hr className="hr" />
        <ul className="social-media-list">
          <li><a href="https://www.instagram.com" className="contact-icon">
            <img alt="png" className="pngs pn" src="https://www.pngplay.com/wp-content/uploads/5/Instagram-Splash-Logo-PNG.png"></img></a>
          </li>
          <li><a href="https://www.github.com" className="contact-icon">
            <img alt="png" className="pngs" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
          </li>
          <li><a href="https://www.twitter.com" className="contact-icon">
            <img alt="png" className="pngs" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"></img></a>
          </li>
          <li><a href="https://www.facebook.com" className="contact-icon">
            <img alt="png" className="pngs" src="http://www.cdu-bechtolsheim.de/wp-content/uploads/2019/03/sm_5a9794da1b10e.png"></img></a>
          </li>       
        </ul>
        <hr className="hr"/>


        <div className="copyright">&copy; ATLEAST SOME RIGHTS RESERVED</div>
      </div>
    
  </div>
  
</section>  
    )
}

export default Contact
