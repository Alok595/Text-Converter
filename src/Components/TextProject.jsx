import React, { useState } from "react";

function TextProject() {
  const upperCase = () => {
    // console.log("yes clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    // console.log("yes clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const capital = () => {
    // console.log("yes clicked");
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        //   console.log('Text copied to clipboard');
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleOnChange = (event) => {
    console.log("yes clicked");

    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="h-[90%] w-full  ">
        <div className="h-full w-full flex items-center justify-center ">
          <div className="h-[100%]  w-[50%] lg:h-[60vh]  bg-slate-700 rounded-2xl relative shadow-lg  shadow-white ">
            <div className="h-[50%]  ">
              <textarea
                className="h-full font-bold   w-full rounded-t-2xl border-2 border-black bg-orange-200 p-2   "
                name=""
                id=""
                value={text}
                onChange={handleOnChange}
                placeholder="Enter Text Here"
              >
                {text}
              </textarea>
            </div>
            <div className="  flex justify-evenly flex-wrap flex-shrink  ">
              <button
                className="px-3 py-2 bg-slate-200 m-2 rounded-xl font-bold  hover:bg-red-500 hover:text-yellow-300  "
                onClick={upperCase}
              >
                Upper-Case
              </button>
              <button
                className="px-3 py-2 bg-slate-200 m-2 rounded-xl font-bold hover:bg-red-500 hover:text-yellow-300"
                onClick={lowerCase}
                
              >
                Lower-Case
              </button>
              <button
                className="px-3 py-2 bg-slate-200 m-2 rounded-xl font-bold hover:bg-red-500 hover:text-yellow-300"
                onClick={capital}
              >
                Capital-Case
              </button>
              <button
                className="px-3 py-2 bg-slate-200 m-2 rounded-xl font-bold hover:bg-red-500 hover:text-yellow-300"
                onClick={handleCopyClick}
              >
                Copy-Text
              </button>
            </div>
            <div className=" w-full  flex text-center justify-center flex-col">
              <h1 className="text-yellow-500 font-semibold text-2xl">
                Your Text Summary
              </h1>
              <div className="flex  flex-col font-semibold text-white ">
                <h4 className="">
                  charaters:-{text.length}
                </h4>
                <h4 className="">Words:-{text.split(" ").length}</h4>
                <h4>{0.008 * text.split(" ").length} min Required to read</h4>
                <h4>Previwe:-{text}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextProject;
