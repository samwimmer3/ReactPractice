 
 import { useState, useRef } from "react";
 
 export default function TimerChallenge({title, targetTime})
 {
    const timer = useRef();
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeStarted, setTimeStarted] = useState(false);


    function handleStart() {
        setTimeStarted(true);

        timer.current = setTimeout(() => {
            setTimeExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimeStarted(false);
        setTimeExpired(false);
    }


 
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired && <p>You lost</p>}
            <p className = "challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timeStarted? handleStop : handleStart}>
                    {timeStarted ? "Stop" : "Start"} Challenge                
                </button>
            </p>
            <p className = {timeStarted ? 'active' : undefined}> 
                {timeStarted ? "Timer Started" : "Timer inactive"}
            </p>
        </section>
    );
 }