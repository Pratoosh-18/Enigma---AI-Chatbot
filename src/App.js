import { useState } from 'react';
import './App.css'
import runChat from './geminiapi/gemini';

function App() {

  const [username, setUsername] = useState("Pratoosh")
  const [prompt, setPrompt] = useState("Hey")
  const [displayPrompt, setDisplayPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [inputplaceholder, setInputplaceholder] = useState("Enter your prompt")

  const handelSubmit = async (e) => {
    e.preventDefault()
    document.getElementById("welcometextarea").style.display = "none";
    setDisplayPrompt(prompt)
    document.getElementById("responseformattingid").style.display = "block";
    document.getElementById("pretagarea").style.padding = "20px";
    setResponse("Loading.....")
    const inputplace = document.getElementById("inputplaceid")
    inputplace.value = ""
    setInputplaceholder("Loading.....")
    const r = await runChat(prompt)
    setInputplaceholder("Enter your prompt")
    setResponse(r)
  }

  const handleLoginButton = () => {
    document.getElementById("mainboxid").style.display = "none";
    document.getElementById("loginpageid").style.display = "block";
  }
  const handelmainbox = () => {
    document.getElementById("mainboxid").style.display = "flex";
    document.getElementById("loginpageid").style.display = "none";
    document.getElementById('logininputid').value=""
  }

  return (
    <>

      <div className='loginpagebox' id='loginpageid'>
        <div className='loginpageheader'>
          <div className="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="" height='50px'/>
          </div>
          <div className="logoname">Enigma - AI ChatBot</div>
        </div>

        <div className='loginpageheading'>
          Login to Enigma 2.0
        </div>

        <div className='loginpageinputbox'>

          <div className='fonttext'>
            We just need 
          </div>
          <div className='fonttext'>
            to know your name 
          </div>
          <div className='logintext'>
            to login 😉
          </div>

          <input type="text" placeholder='Enter your name here' id='logininputid' className='logininputarea' 
          onChange={(e)=>{
            setUsername(e.target.value)
          }}/>
          <button onClick={handelmainbox} className='loginbuttonclass'>
            Login
          </button>

        </div>
      </div>

      <div className="box" id='mainboxid'>
        <div className="rightbox">
          <div>

            <div className="logobox">
              <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="" height='50px' />
                {/* <img src="./images/chatbotimg.png" alt="" height='50px' /> */}
              </div>
              <div className="logoname">Enigma - AI ChatBot</div>
            </div>

            <div className="righboxprompts">
              <div className="promptdiv">What is a super computer</div>
              <div className="promptdiv">What are the principles of object-oriented programming?</div>
              <div className="promptdiv">Python couse dummy data</div>
              <div className="promptdiv">How to use version control systems like Git or SVN?</div>
              <div className="promptdiv">How to prepare and clean data for machine learning models?</div>

            </div>
          </div>
          <div className='rightbar-id'>
            <div className="logo">
              <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" height='40px' />
              {/* <img src="./images/usericon.png" alt="" height='40px' /> */}
            </div>
            {username}
          </div>
        </div>

        <div className="leftbox">

          <div className="top-bar">
            <div className='aimodelandname'>

              <div className='logo2'>
                <img src="https://cdn-icons-png.flaticon.com/512/8943/8943377.png" alt="" height='40px' />

                {/* <img src="./images/chatbotimg.png" alt="" height='40px' /> */}
              </div>
              <div className="aimodelname">
                Enigma AI - 2.0
              </div>
            </div>
            <button className="loginbutton" onClick={handleLoginButton}>
              Login
            </button>
          </div>

          <div className='responsearea' id='responseareaid'>
            <div id='welcometextarea' className='welcometextareaclass'>
              <div className='gradient-text'>
                Hello, {username}
              </div>
              <div className='gradient-text'>
                Enigma this side !
              </div>
              <div>
                How can I help you today?
              </div>
            </div>

            <div>

              <div className='responseformatting' id='responseformattingid'>
                <div className='padding-bottom displayfontheading'>
                  <i className="fa-solid fa-user" style={{ color: "#14fbff" }}></i>
                  You :
                </div>
                <div className='padding-bottom'>
                  {displayPrompt}
                </div>
                <div className='padding-bottom displayfontheading'>
                  <i class="fa-solid fa-robot" style={{ color: "#74C0FC" }}></i>
                  Enigma :
                </div>
              </div>

              <pre id='pretagarea'>
                {response}
              </pre>
            </div>

          </div>

          <div className="inputdivarea">

            <input type="text" id='inputplaceid' placeholder={inputplaceholder} onChange={(e) => setPrompt(e.target.value)}
              className="inboxarea"
            />
            <button className="inputbutton"
              onClick={handelSubmit}>
              <span className="material-symbols-outlined arrow-button">
                arrow_circle_right
              </span>
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
