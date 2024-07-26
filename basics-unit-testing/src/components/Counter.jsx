import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleClick = () => {
    setCount((prev) => prev + 2);
  };
  return (
    <div style={{ display: "flex", gap: "150px" }}>
      <div>
        <h3>This is counter.</h3>
        <p>Count: {count}</p>
        <button onClick={handleClick}>click</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
