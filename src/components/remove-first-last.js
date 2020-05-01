import React, { useState } from "react"

export default function RemoveFirstLast() {
    const [words, setWords] = useState("")
    const [input, setInput] = useState("")


    const removeLetters = () => {
        setWords(input.slice(1, -1))
    }




    return (
        <div>
            <h1>{words}</h1>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="words"
                name="userInput"

            />
            <button onClick={() => removeLetters()} type='submit'>Remove</button>
        </div>
    )

}