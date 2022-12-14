import React, { useState } from "react";
import useInput from "./userInput";

export default function Form1() {
  const [name, setInput1] = useState();
  const [lastName, setInput2] = useState();

  return (
    <div>
      <form>
        <div style={{ padding: "10px" }}>
          <label>Firstname:-</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>Lastname:-</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button onClick={() => alert(JSON.stringify({ name, lastName }))}>
          Submit
        </button>
      </form>
    </div>
  );
}

export function Form2() {
  const [name, nameBinder] = useInput("abc", 10);
  const [lastName, lastNameBinder] = useInput("", 20);
  const [address, addressBinder] = useInput("", 40);

  return (
    <div>
      <form>
        <div style={{ padding: "10px" }}>
          <label>Firstname:-</label>
          <input {...nameBinder} />
        </div>

        <div style={{ padding: "10px" }}>
          <label>Lastname:-</label>
          <input {...lastNameBinder} />
        </div>

        <div style={{ padding: "10px" }}>
          <label>Address:-</label>
          <input {...addressBinder} />
        </div>
        <button
          onClick={() => alert(JSON.stringify({ name, lastName, address }))}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
