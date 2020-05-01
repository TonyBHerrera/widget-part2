import React, { useState } from "react"

export default function ThingTwo() {

    const [number, setNumber] = useState("")
    const [evenOrOdd, setEvenOrOdd] = useState("")
    const checkEvenOrOdd = () => {
        if (number % 2 === 0) {
            setEvenOrOdd("Number is Even!")
        } else {
            setEvenOrOdd("Number is Odd!")
        }
    }
    return (
        <div className="evenOrOddWrapper">
            <h1>{evenOrOdd}</h1>
            <input
                placeholder="Type a number here"
                onChange={e => setNumber(e.target.value)}
            />
            <button onClick={() => checkEvenOrOdd()}>Check Number</button>
        </div>
    )
}