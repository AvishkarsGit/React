
import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");



  return (
    <div
      className="w-full h-screen duration-200 p-4"
      style={{ backgroundColor: color }}

    >
      <div className="border-[2px] border-white rounded-2xl bg-black p-2 flex items-center justify-center gap-5">
        <button
          onClick={() => setColor("white")}
          className="bg-white text-black font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          White
        </button>
        <button
          onClick={() => setColor("red")}
          className="bg-red-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          yellow
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          Green
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 text-white font-medium py-1 w-[100px] rounded-md shadow-lg uppercase"
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
