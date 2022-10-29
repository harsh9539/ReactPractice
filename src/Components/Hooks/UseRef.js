import React, { useRef, useState } from 'react'

const UseRef = () => {
    // Simple use of UseRef hook
    const [value, SetValue] = useState('');
    const input = useRef(null);
    const handleClick = () => {
        console.log(value);
        console.log(input.current.value)
    }
    // Simple use of UseRef hook end

    return (
        <>
            {/* // Simple use of UseRef hook */}
            <div>
                <input  ref={input} value={value} onChange={(e) => SetValue(e.target.value)} />
                <button onClick={handleClick}>Click Me</button>
            </div>
            {/* // Simple use of UseRef hook */}

        </>
    )
}

export default UseRef
