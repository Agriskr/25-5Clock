import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>FCC 25+5 Clock</h1>
      <div className="card">
        <div className="length-control">
          <div id="break-label">Break Length</div>
          <button id="break-decrement" value="-" >
            <i className="fa fa-light fa-arrow-down fa-2x"></i>
          </button>
          <div className="btn-level" id="break-length">5</div>
          <button id="break-increment" value="+" >
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>
        <div className="length-control">
          <div id="session-label">Session Length</div>
          <button id="session-decrement" value="-" >
            <i className="fa fa-arrow-down fa-2x"></i>
          </button>
          <div className="btn-level" id="session-length">25</div>
          <button id="session-increment" value="+" >
            <i className="fa fa-arrow-up fa-2x"></i>
          </button>
        </div>

        <div className="timer" >
          <div className="timer-wrapper">
            <div id="timer-label">Session</div>
            <div id="time-left">25:00</div>
          </div>
        </div>
        <div className="timer-control">
          <button id="start_stop">
            <i className="fa fa-play fa-2x"></i>
            <i className="fa fa-pause fa-2x"></i>
          </button>
          <button id="reset">
            <i className="fa fa-refresh fa-2x"></i>
          </button>
        </div>
        <div className="autor">
          <div > Coded by AK </div>
          <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </div>
    </>
  )
}

export default App
