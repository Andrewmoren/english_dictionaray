import React from "react";

const Result = ({ word, phonetics, meaning, setText }) => {
  return (
    <ul>
      <li className="world">
        <h2>{word}</h2>
        {phonetics.map((phonetics, index) => (
          <span key={index}>{phonetics.text}</span>
        ))}
      </li>
      {meaning.map((meaning, index) => (
        <li className="contain">
          <h3>noun</h3>

          <div className="details meaning">
            <h3>Meaning</h3>
            {meaning.definitions.map((definitions, index) => (
              <p key={index}>- {definitions.definitions}</p>
            ))}
          </div>

          <div className="details synonyms">
            <h3>Synonyms</h3>
            <span>greeting, greeting, greeting</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Result;
