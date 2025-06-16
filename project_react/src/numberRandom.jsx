import { useState } from "react";

function Random() {
  const [number, setNumber] = useState(0);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div>
      <button onClick={generateNumber}>button test</button>
      <p>le numero est : {number}</p>
    </div>
  );
}

export default Random;

