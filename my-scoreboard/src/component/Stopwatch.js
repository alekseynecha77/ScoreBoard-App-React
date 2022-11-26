import React, {useState, useEffect} from "react";

const Stopwatch = ()=>{
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(()=>{
        if(isRunning){
            setInterval(() => setElapsedTime(prevTime => prevTime + 1), 1000);
        }
    },[isRunning]);

    return(
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{elapsedTime}</span>
            <button onClick={() => setIsRunning((prevValue) => !prevValue)}>
                {isRunning ? "Stop": "Start"}
            </button>
            <button onClick={() => setElapsedTime(0)}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch