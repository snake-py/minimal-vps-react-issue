import React from 'react';
import ReactDOM from 'react-dom';
import { useTestHook } from 'react-vite-library';
export { Page };

function Page() {
    // @ts-ignore
    React.test = 1;
    // @ts-ignore
    ReactDOM.test = 1;
    const { count, setCount } = useTestHook();
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>add</button>
        </div>
    );
}
