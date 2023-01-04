import "./setButton.css";

export default function SetButtons({ start, stop }) {
  return (
    <div
      style={{
        display: "block",
        "margin-left": "100px"
      }}
    >
      <button className="start" onClick={() => start()}>
        {" "}
        Start
      </button>
      <button className="stop" onClick={() => stop()}>
        {" "}
        Stop
      </button>
    </div>
  );
}
