import { useEffect, useState } from "react";
// import Image from "./image/red-hair-girl.png";

const Calculator = () => {
  //useState varibles and functions.
  const [val, setval] = useState("");

  const operations = ["*", "/", "+", "-", "."];

  const createDigits = () => {
    // digits set to an empty array for storing our elements
    let digits = [];

    // looping throught and pushing the values to the array
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => handleDial(i.toString())}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const handleDial = (e) => {
    if (
      (operations.includes(e) && val === "") ||
      (operations.includes(e) && operations.includes(val.slice(-1)))
    ) {
      return;
    }
    setval(val + e);
  };

  const handleDelete = () => {
    //Thanks to GreeksForGreeks with explaining slice mroe in depht
    setval(val.slice(0, -1));
  };

  const handleClear = () => {
    setval("");
  };

  useEffect(() => {
    setTimeout(() => {
      handleClear();
    }, 50000);
  });

  const handleCalculate = () => {
    setval(eval(val.toString()));
  };

  return (
    <>
      <div
        style={{
          textAlign: "Center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        <h1>Kennesue Calculator</h1>
      </div>
      <div className="calculator">
        <div className="screen">
          {/* if the val is empty it would be set to default 0 */}
          {val || "0"}
        </div>

        <div className="operators">
          <button onClick={() => handleClear("")}>AC</button>
          <button onClick={() => handleDial("/")}>/</button>
          <button onClick={() => handleDial("x")}>x</button>
          <button onClick={() => handleDial("-")}>-</button>
          <button onClick={() => handleDial("+")}>+</button>

          <button onClick={() => handleDelete("")}>DEL</button>
        </div>

        <div className="digits">
          {/* invoke our function in our template */}
          {createDigits()}
          <button onClick={() => handleDial("0")}>0</button>
          <button onClick={() => handleDial(".")}>.</button>
          <button onClick={() => handleCalculate("")}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
