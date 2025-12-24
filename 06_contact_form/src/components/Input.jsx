import React from "react";

function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className=" p-3">
      <div>
        <label className="font-medium text-orange-600">{label}</label>
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none border border-gray-400 rounded-md p-2 w-full mt-2"
      />
    </div>
  );
}

export default Input;
