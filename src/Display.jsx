import React from 'react';
import { useState, useEffect } from 'react';

function Display({
    timer,
    setTimer,
    started,
    setStarted,
    handleReset,
    activeClock,
    sessionLength,
    breakLength }) {

    console.log('timer = ', timer)

    useEffect(() => {
        setTimer(sessionLength * 60);
    }, [sessionLength]);

    useEffect(() => {
        const interval = setInterval(() => {
            started && setTimer((timer) => (timer >= 1 ? timer - 1 : 0))
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [started])

    const handleStartStop = () => {
        setStarted((started) => !started);
        console.log('setstarted nostrada', started)

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
                <div className="timer-wrapper">
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