import React, { useState } from 'react'
import { SelectStars } from '../styles/components'

export default function Stars() {
    const [ stars, setStars ] = useState(5)
    return (
        <SelectStars selected={stars}>
            <button onClick={() => setStars(1)} onKeyDown={() => setStars(1)}> <span role="img" aria-label="emoji" > ⭐️</span> </button>
            <button onClick={() => setStars(2)} onKeyDown={() => setStars(2)}> <span role="img" aria-label="emoji" > ⭐️</span> </button>
            <button onClick={() => setStars(3)} onKeyDown={() => setStars(3)}> <span role="img" aria-label="emoji" > ⭐️</span> </button>
            <button onClick={() => setStars(4)} onKeyDown={() => setStars(4)}> <span role="img" aria-label="emoji" > ⭐️</span> </button>
            <button onClick={() => setStars(5)} onKeyDown={() => setStars(5)}> <span role="img" aria-label="emoji" > ⭐️</span> </button>
        </SelectStars>
    )
}