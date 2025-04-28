
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  return (
    <>
      <div className="h-screen w-full bg-gray-950 p-6">
        <div className="bg-gray-700 rounded-lg w-[1170px] mx-auto p-3 text-white font-medium">
          <div>
            <h3 className="text-white font-medium text-xl text-center my-3">
              Password Generator
            </h3>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Password"
                readOnly
                value={password}
                ref={passwordRef}
                className="bg-white font-medium outline-none text-black border-none py-2 px-3 rounded-tl-lg rounded-bl-lg w-[50%] "
              />

              <button
              onClick={copyToClipboard}
               className="bg-blue-500 uppercase py-2 px-4 text-white font-semibold rounded-tr-lg rounded-br-lg">
                Copy
              </button>
            </div>

            <div className=" flex items-center justify-center ">
              <div className="flex items-center justify-center gap-3 my-4 w-full">
                <input
                  type="range"
                  min={8}
                  max={20}
                  className="w-[35%]"
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label> Length : {length} </label>

                <input
                  type="checkbox"
                  id="numberInput"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput">Numbers </label>

                <input
                  type="checkbox"
                  id="characterInput"
                  defaultChecked={charAllowed}
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="characterInput">Characters </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
