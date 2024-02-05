import { useEffect, useState, useRef } from 'react'
import './App.css'
import LengthControl from './LengthControl'
import Display from './Display'

function App() {

  const [reset, setReset] = useState(0);
  const [sessionLength, setSesionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5);
  const [activeClock, setActiveClock] = useState("S");
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(sessionLength * 60);
  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
  }, [reset]);


  const handleReset = () => {
    setBreakLength(5);
    setSesionLength(25);
    setReset(reset + 1);
    setActiveClock("S");
    setStarted(false);
    setTimer(sessionLength * 60)
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
  }

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

        <Display
          {...{
            audioRef,
            timer,
            setTimer,
            started,
            setStarted,
            handleReset,
            activeClock,
            setActiveClock,
            sessionLength,
            breakLength
          }}
        />

        <div className="autor">
          <div > Coded by AK </div>
          <audio id="beep"
            preload="auto"
            ref={audioRef}
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
      </div>
    </>
  )
}

export default App
