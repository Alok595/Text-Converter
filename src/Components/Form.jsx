import React, { useState } from "react";

function Form(props) {
  // function upperCase(){
  //     console.log("wpper case changed")
  // }
  const upperCase = () => {
    // console.log("wpper case changed " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    // console.log("wpper case changed " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };


  const handle = (event) => {
    // console.log(" changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="w-[50%] h-[60%] bg-zinc-500 rounded-2xl  flex items-center justify-between flex-col">
      <textarea
        className="h-[50%] w-[99%] bg-zinc-500  text-white p-3"
        onChange={handle}
        value={text}
      ></textarea>
      <div className="flex flex-row gap-5">
        <button className="p-4 bg-slate-400 rounded-xl " onClick={upperCase}>
            upper here
        </button>
        <button className="p-4 bg-slate-400 rounded-xl " onClick={lowerCase}>
            lower here here
        </button>
      </div>
      <div className="flex p-1 flex-col justify-evenly h-full w-full">
        <h1>Your Text Summary</h1>
        <h4> Words:-{text.split(" ").length} charaters:- {text.length}</h4>
        <h4>{0.008 * text.split(" ").length } minutes to read</h4>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Form;
