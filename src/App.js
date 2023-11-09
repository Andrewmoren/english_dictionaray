import React, { useState, useMemo, useEffect } from "react";
import Result from "./Result";

const synth = window.speechSynthesis;

const App = () => {
  const voices = useMemo(() => synth.getVoices(), []);
  return (
    <div className="container">
      <h1>English Dictionary</h1>
      <form>
        <div className="row">
          <textarea name="" id="" cols="30" rows="4" placeholder="Enter text" />
          <div className="voices-icons">
            <div className="select-voices">
              <select name="" id="">
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name}
                  </option>
                ))}
              </select>
            </div>

            <i class="fa-solid fa-volume-high" />
          </div>
        </div>
      </form>

      <Result />
    </div>
  );
};

export default App;
