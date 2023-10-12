import React from "react";
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

function Home() {
      return(

        <div className="container1">
          <div className="wrapper">
          <div className="box">
          <img id="img1" src="https://i.pinimg.com/originals/4e/65/8f/4e658f22673cf71046bb11ec9a00c6ff.png" alt="" />
               <h1>121 Rock Sreet, 21 Avenue,<br /> New York, NY 92103-9000</h1>
          </div>

          <div className="box">
          <img id="img1" src="https://cdn-icons-png.flaticon.com/512/35/35364.png" alt="" />
               <h1>57457447 <br /> MON - FRI...8AM - 7PM</h1>
          </div>

          <div className="box">
          <img id="img1"src="https://cdn.icon-icons.com/icons2/2770/PNG/512/chat_message_icon_176706.png" alt="" />
          <h1> dsgdsgsdgsg <br /> info@nicepage.com</h1>
          </div>
          </div>

          <div className="wrapper1">
          <div className="box1">
                 <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/42e00f44576258d48183655f/jhjh5.jpg" alt="" />
               <h2>Hello!</h2>
               <h3>A Bit About Me</h3>
               <p id="prag">I’m a Creative director based on New York, who loves clean,<br /> simple & unique design. I also enjoy crafting</p>

               <h5>Kalvin Piterson</h5>
               <p id="para">I’m a digital designer in love with photography, painting and discovering new worlds and cultures. ​Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
               </div>

          <section className="rnd">
               <div className="rnd1"><h6>..RESUME</h6></div>
               <div className="rnd1"><h6>MY SKILLS</h6></div>
               <div className="rnd1"><h6>PROJECTS</h6></div>
               <div className="rnd1"><h6>CONTACTS</h6></div>
          </section>


               <div className="port">
                    <h3 id="para1">My Portfolio</h3>
                    <p id="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>

          <div className="images">
               <div className="add"><span>Brand Campaign</span></div>
               <div className="add"><span>A Corporate Identity</span></div>
               <div className="add"><span>Web Design Website</span></div>
               <div className="add"><span>Logo design</span></div>
          </div>

          <div className="images1">
          <img className="img10" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/eb79ad23d4d45a95a2a89100/4.jpg" alt="" />
                    <img className="img10" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/2829e0920a9c51c18a247f37/ui.jpg" alt="" />
                    <img className="img10" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0692b70c3ed750439d2fcaeb/7.jpg" alt="" />
                    <img className="img10" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d7d30cbc0cd9533fbfbdbc45/trt4.jpg" alt="" />
          </div>
     

               <p id="para3">Testimonials</p>
               <div className="para9">
                    <p className="para4">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                     <h2 id="text11">STELLA LARSON</h2>
                    <p className="para4">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <h2 id="text11">OLGA IVANOVA</h2>
                    <p className="para4">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <h2 id="text11">CASH HUDSON</h2>
          </div>    
           <div className="para10" >
                  <img className="para6" src="https://editzstock.com/wp-content/uploads/2022/05/Camera-lens-logo-png-1-1024x1024.png" alt="" />
                <img className="para7" src="https://play-lh.googleusercontent.com/8YUyuMcO82tTEcSqJql5zsnPgwr_jnxoAGusSHupRR4GKdk6Kozf89wov3UGvku3aQ=w600-h300-pc0xffffff-pd" alt="" />
                  <img className="para8" src="https://i.pinimg.com/originals/02/5f/75/025f752ddcadd9d6936cd016d04438f2.png" alt="" />
          </div>    
        </div>

        <div className="medium1">
          <div className="medium2">
          <h1 className="text16">IT Solution Strategy Development</h1>
          <ul className="text16">►Duis aute irure dolor <br />
            ►Ut enim ad minim</ul>
        <div>
          <img className="img3" src="https://www.probusinsurance.com/wp-content/uploads/2023/09/buy-professional-indemnity-insurance.png" alt="" />
        </div>
        </div>
        </div>
        <div className="card5"> 
        <h1 className="contact">Contact Me</h1>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" required/> <br />
        <input type="email" name="email" id="email" placeholder="Enter a valid email Address" required /> <br />
        <textarea name="text" id="" cols="20" rows="8" placeholder="Enter your message" ></textarea><br />
        <button>Submit</button>
        </div>
          
          <div className="icons">
               <FaFacebook/>
               <FaTwitter/>
               <FaInstagram/>
               <h2 className="">©2023 Privacy policy</h2>
          </div>
        </div>
        
      ) 
}

export default Home