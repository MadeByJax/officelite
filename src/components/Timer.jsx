import React from "react";
import "./Timer.css";
import { useEffect, useState } from "react";

const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [inputDate, setInputDate] = useState("28 Jan 2024");
    const [currentDate, setCurrentDate] = useState(inputDate);
  
    useEffect(() => {
        setInterval(() => {
            const changingDate = new Date(inputDate);
            const currentDate = new Date();
            const totalSeconds = (changingDate - currentDate) / 1000;
    
            setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes(Math.floor(totalSeconds / 60) % 60);
            setSeconds(Math.floor(totalSeconds % 60));
        }, 1000);
    }, [inputDate]); // You can remove [currentDate] from the dependency array if it's not defined elsewhere in your component
    
    
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }

  return (
    <div className="timer">
            <div className="timer__card">
              <h4>{days}</h4>
              <p>days</p>
            </div>
            <div className="timer__card">
              <h4>{hours}</h4>
              <p>hours</p>
            </div>
            <div className="timer__card">
              <h4>{minutes}</h4>
              <p>min</p>
            </div>
            <div className="timer__card">
              <h4>{seconds}</h4>
              <p>secs</p>
            </div>
          </div>

 

  );
};

export default Timer;
