import React from 'react';
import { useEffect } from 'react';

function Display({
    audioRef,
    timer,
    setTimer,
    started,
    setStarted,
    handleReset,
    activeClock,
    setActiveClock,
    sessionLength,
    breakLength }) {

    useEffect(() => {
        setTimer(sessionLength * 60);
    }, [sessionLength]);

    useEffect(() => {
        setTimer((activeClock === "S" ? sessionLength : breakLength) * 60);
    }, [activeClock]);

    useEffect(() => {
        if (started) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else if (prevTimer === 0) {
                        setActiveClock(activeClock === "S" ? "B" : "S");
                        const audio = audioRef.current;
                        audio.play();
                        return prevTimer;
                    }
                })
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [started, timer])

    const handleStartStop = () => {
        setStarted((started) => !started);
    }

    const timeFormatter = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer - minutes * 60;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    return (
        <>
            <div className="timer" >
                <div className="timer-wrapper" style={{ color: timer < 60 ? 'red' : 'white' }}>
                    <div id="timer-label"> {activeClock === "S" ? "Session" : "Break"}</div>
                    <div id="time-left">{timeFormatter()}</div>
                </div>
            </div>
            <div className="timer-control">
                <button id="start_stop" onClick={handleStartStop}>
                    <i className="fa fa-play fa-2x"></i>
                    <i className="fa fa-pause fa-2x"></i>
                </button>
                <button id="reset" onClick={handleReset}>
                    <i className="fa fa-refresh fa-2x"></i>
                </button>
            </div>
        </>
    )
}

export default Display