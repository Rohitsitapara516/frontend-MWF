import React, { useState } from "react";
import axios from "axios";
import { FaVolumeUp } from "react-icons/fa";

export default function App(){
  const [word,setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
     const [error,setError] = useState("");


     // 🔍 Fetch meaning from dictionary API
  const getMeaning = async () => {
    if (!word) {
      alert("Please enter a word!");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(response.data);
      setError("");
    } catch (err) {
      setError("Word not found 😔");
      setMeanings([]);
    }
  };

  // 🔊 Speak function using Web Speech API
  const speakWord = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

    return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-5 text-blue-600">Dictionary app</h1>

      <div className="flex space-x-2">
       <input type="text" placeholder="Enter a Word..." value={word} onChange={(e) => setWord(e.target.value)} className="border border-gray-400 p-2 rounded w-65 text-center"/>
      </div>

      <button onClick={getMeaning} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 mt-3">Search</button>
       
          {error && <p className="text-red-600 mt-5">{error}</p>}

          <div className="mt-5 w-96 text-left">
            {meanings.map((item,index) => (
              <div key={index} className="bg-white p-4 rounded shadow mb-3">
                <div className="flex item-center justify-between">
                  <h2 className="text-x1 font-semibold capitalize">{item.word}</h2>
                  <button onClick={() => speakWord(item.word)} className="text-blue-600 text-2x1" title="speak">
                 <FaVolumeUp/>
                  </button>
                </div>

                {item.phonetics[0]?.text && (
              <p className="text-gray-500">{item.phonetics[0].text}</p>
            )}

              {item.meanings.map((m, i) => (
              <div key={i}>
                <p className="font-bold mt-2 text-blue-700">
                  {m.partOfSpeech}
                </p>
                {m.definitions.map((def, j) => (
                  <p key={j} className="ml-3">
                    👉 {def.definition}
                  </p>
                ))}
              </div>
            )

            )

            }

          </div>
            ))}
       </div>
    </div>
          );
        }
          
          
  





