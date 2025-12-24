import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Select from "./components/Select";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="bg-blue-200 h-screen">
      <div className="flex items-center justify-center text-black">
        <div className="w-1/2 mt-5 bg-white rounded-xl p-5 shadow-xl">
          <h1 className="text-center font-bold">Contact Form</h1>
          <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          // }}
          >
            <div>
              <Input
                label="Name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Input
                label="Email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                label="Contact"
                type="text"
                placeholder="Enter contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div>
              <Select
                optionsList={[
                  { value: "India", label: "India" },
                  { value: "USA", label: "USA" },
                  { value: "UK", label: "UK" },
                ]}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="flex justify-center mt-5">
              <Button
                buttonText="Submit"
                setOnClick={(e) => {
                  e.preventDefault();
                  console.log(name, email, contact, country);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
