import { useState } from 'react';
import './App.css'
import runChat from './geminiapi/gemini';

function App() {

  const [prompt, setPrompt] = useState("Hey")
  const [response, setResponse] = useState("")

  const handelSubmit = async () => {
    // {runChat(prompt)}
    const r = await runChat(prompt)
    setResponse(r)
    console.log(response)

    document.getElementById("welcometextarea").style.display = "none";

  }

  return (
    <>
      <div className="box">
        <div className="rightbox">
          <div>


            <div className="logobox">
              <div className="logo">
                <img src="./images/chatbotimg.png" alt="" height='50px' /></div>
              <div className="logoname">Enigma - AI ChatBot</div>
            </div>

            <div className="righboxprompts">
              <div className="promptdiv">What is a super computer</div>
              <div className="promptdiv">Give some examples of different types of rocks</div>
              <div className="promptdiv">Python couse dummy data</div>
              <div className="promptdiv">What is a car?</div>

            </div>
          </div>
          <div className='rightbar-id'>
            <div className="logo">
              <img src="./images/usericon.png" alt="" height='40px' />
            </div>
            Pratoosh garg
          </div>
        </div>

        <div className="leftbox">

          <div className="top-bar">
            <div className='aimodelandname'>

              <div className='logo2'>
                <img src="./images/chatbotimg.png" alt="" height='40px' />
              </div>
              <div className="aimodelname">
              Enigma AI - 2.0
              </div>
            </div>
            <div className="login">
               <img src="./images/usericon.png" alt="" height='40px' /> 
              Login
            </div>
          </div>

          <div className='responsearea' id='responseareaid'>
            <div id='welcometextarea' className='welcometextareaclass'>
              <div className='gradient-text'>
                Hello, Pratoosh
              </div>
              <div className='gradient-text'>
                Enigma this side !
              </div>
              <div>
                How can I help you today?
              </div>
            </div>

            <div>
              <pre>
                {response}
              </pre>
            </div>

          </div>

          <div className="inputdivarea">

            <input type="text" placeholder='Enter your Prompt' onChange={(e) => setPrompt(e.target.value)}
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
