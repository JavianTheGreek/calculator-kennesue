import { useState } from "react";
import Image from "./image/red-hair-girl.png";

const Calculator = () => {
    //useState varibles and functions.
    const [val, setval] = useState("");
    const [result, setResult] = useState("");

    const createDigits = () => {
        let digits = [];

        for (let i = 1; i <= 9; i++) {
            digits.push(<button key={i}>{i}</button>);
        }
        return digits;
    };

    const ops = ["*", "/", "+", "-", "=", "."];

    const handleCalculation = (e) => {
        // if (ops.includes(e) && )
    };

    const handleDelete = () => {
        // setResult(cal.slice(0, -1));
    };

    const handleOperation = () => {};

    return (
        <>
            <div
                style={{
                    textAlign: "Center",
                    color: "#59C3C3",
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "20px",
                }}
            >
                <h1>Kennesue Calculator</h1>
            </div>
            <div className="calculator">
                <div className="screen">
                    <span>(0)</span> {result}
                </div>

                <div className="operators">
                    <button>AC</button>
                    <button>/</button>
                    <button>x</button>
                    <button>-</button>
                    <button>+</button>

                    <button>DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;
