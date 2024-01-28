import { useEffect, useState, useRef } from 'react'
import './App.css'
import LengthControl from './LengthControl'

function App() {
  const [count, setCount] = useState(0)
  const [reset, setReset] = useState(0)
  const [sessionLength, setSesionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5);
  const audioRef = useRef();


  const handleReset = () => {
    setBreakLength(5);
    setSesionLength(25);
    setReset(reset + 1);
  }
  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
  }, [reset]);

  return (
    <>

      <h1>FCC 25+5 Clock</h1>
      <div className="card">
        <LengthControl
          type="break"
          label="Break Length"
          length={breakLength}
          set={setBreakLength}
        />

        <LengthControl
          type="session"
          label="Session Length"
          length={sessionLength}
          set={setSesionLength}
        />


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
          <button id="reset" onClick={handleReset}>
            <i className="fa fa-refresh fa-2x"></i>
          </button>
        </div>
        <div className="autor">
          <div > Coded by AK </div>
          <audio id="beep" preload="auto" ref={audioRef} src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </div>
    </>
  )
}

export default App
