import React, { useState, useMemo, useEffect } from "react";
import Result from "./Result";

const synth = window.speechSynthesis;

const App = () => {
  const voices = useMemo(() => synth.getVoices(), []);
  const [voiceSelected, setVoiceSelected] = useState("Google US English");
  const [text, setText] = useState("");
  const startSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const handleSpeech = () => {
    if (!text.trim()) return;
    startSpeech();
  };
  return (
    <div className="container">
      <h1>English Dictionary</h1>
      <form>
        <div className="row">
          <textarea
            cols="30"
            rows="4"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="voices-icons">
            <div className="select-voices">
              <select
                value={voiceSelected}
                onChange={(e) => setVoiceSelected(e.target.value)}
              >
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name}
                  </option>
                ))}
              </select>
            </div>

            <i className="fa-solid fa-volume-high" onClick={handleSpeech} />
          </div>
        </div>
      </form>

      <Result />
    </div>
  );
};

export default App;
