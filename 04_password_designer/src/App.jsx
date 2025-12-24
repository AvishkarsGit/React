import { useCallback, useEffect, useRef, useState } from "react";
function App() {

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i<= length; i++)
        pass += str.charAt(Math.floor(Math.random() * str.length))
    setPassword(pass);

  },[length,numberAllowed,charAllowed]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  },[passwordGenerator])


  return (
    <>
      <div className="bg-gray-700 h-screen w-full p-4">
          <h1 className="text-3xl text-center text-white">Password Generator</h1>
          <div className="flex justify-center items-center border border-red-500">
            <div>
              <div className=" mt-4 w-2xl flex items-center justify-center">
                <input
                  type="text"
                  readOnly
                  value={password}
                  className="bg-white w-full h-10 rounded-l-lg px-5"
                  placeholder="Password"
                />
                <button
                onClick={copyPassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg cursor-pointer">Copy</button>
              </div>

              <div className="flex items-center justify-between">
                {/* input field */}
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="range"
                    min={8}
                    max={100}
                    className="cursor-pointer"
                    onChange={(e)=>setLength(e.target.value)}
                    value={length}
                />
                  <label htmlFor="length" className="text-white font-semibold">Length: {length}</label>
                </div>

                {/* checkbox */}
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={numberAllowed}
                    onChange={(e)=>setNumberAllowed(e.target.checked)}
                />
                  <label htmlFor="length" className="text-white font-semibold">Number Allowed</label>
                </div>

                 {/* checkbox */}
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={charAllowed}
                    onChange={(e)=>setCharAllowed(e.target.checked)}
                />
                  <label htmlFor="length" className="text-white font-semibold">Character Allowed</label>
                </div>

              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
