import React, { useState } from "react"

export default function Lottery() {
    const [num, setNums] = useState(48)
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    const handleGuess = () => {

        if (input == num) {
            setResult("you win")
        } else {
            setResult("you lose")
        }

    }


    return (

        <div>
            <h1>{result}</h1>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Whats Your Guess?"
            />
            <button onClick={() => handleGuess()}>Submit</button>
        </div>
    )

}