import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");

  return (
    <>
      <div
        className=" w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("blue")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "blue" }}
            >
              BLUE
            </button>
            <button
              onClick={() => setColor("orange")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "orange" }}
            >
              ORANGE
            </button>
            <button
              onClick={() => setColor("pink")}
              className=" outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "pink" }}
            >
              PINK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
