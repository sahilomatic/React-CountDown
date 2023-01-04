import { useCallback, useEffect, useState } from "react";
import Display from "./components/display";
import SetButtons from "./components/setButtons";

export default function App() {
  const [time, setTime] = useState({
    hours: 0,
    min: 0,
    seconds: 0,
    milli: 60
  });

  const [display, setDisplay] = useState(false);
  const [interv, setInterv] = useState();
  const start = () => {
    setDisplay(true);
    counter();

    setInterv(setInterval(counter, 100));
  };
  const stop = () => {
    setDisplay(false);
    clearInterval(interv);
  };
  var current = time;
  const counter = () => {
    console.log("counter", interv);
    if (current.hours <= 0 && current.min <= 0 && current.seconds <= 0) {
      clearInterval(interv);
      return;
    }
    current.milli = current.milli - 1;
    if (current.milli < 0 && current.seconds > 0) {
      current.seconds -= 1;
      current.milli = 60;
    }
    if (current.seconds < 0 && current.min > 0) {
      current.min = current.min - 1;

      current.seconds = 60;
    }

    if (current.min < 0 && current.hours > 0) {
      current.hours = current.hours - 1;

      current.min = 60;
    }

    setTime(current);
    console.log(time);
  };

  return (
    <>
      <Display time={time} display={display} setTime={setTime} />
      <SetButtons start={start} stop={stop} />
    </>
  );
}
