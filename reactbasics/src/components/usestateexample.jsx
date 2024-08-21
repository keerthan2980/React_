import React, { useState } from 'react';

const ExampleComponent = () => {
    // Declare a state variable 'count' initialized to 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            {/* Update the state when button is clicked */}
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default ExampleComponent;
