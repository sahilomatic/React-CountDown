import "./display.css";
import { useEffect } from "react";

export default function Display(props) {
  const { time, display, setTime } = props;

  return (
    <div>
      <h2>
        {" "}
        {props.time.hours ? props.time.hours : 0} :
        {props.time.min ? props.time.min : 0}:
        {props.time.seconds ? props.time.seconds : 0}:
        {props.time.milli ? props.time.milli : 0}
      </h2>
      {!display && (
        <div className="display setter">
          <div className="setter">
            <span>
              <input
                type="text"
                value={time.hours}
                onChange={(e) => {
                  setTime({ ...time, hours: parseInt(e.target.value) });
                }}
              />
            </span>
            :
            <span>
              <input
                type="text"
                value={time.min}
                onChange={(e) => {
                  setTime({ ...time, min: parseInt(e.target.value) });
                }}
              />
            </span>
            :
            <span>
              <input
                type="text"
                value={time.seconds}
                onChange={(e) => {
                  setTime({ ...time, seconds: parseInt(e.target.value) });
                }}
              />
            </span>
          </div>
        </div>
      )}

      {display && (
        <div className="display displayer">
          <span>{time.hours}</span>:<span>{time.min}</span>:
          <span>{time.seconds}</span>
        </div>
      )}
    </div>
  );
}
