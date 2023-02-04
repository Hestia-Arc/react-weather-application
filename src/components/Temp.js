import React from "react";

export default function Temp() {
  return (
    <div className="degree">
      <span>
        <img src="" id="icon" alt='' />
      </span>
      <span id="temp">20</span>°
      <sup>
        <span className="letters">
          <a href="/" id="aCel">
            C
          </a>
          |{" "}
          <a href="/" id="aFra">
            F
          </a>
        </span>
      </sup>
    </div>
  );
}
