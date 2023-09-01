import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function useTestHook() {
    console.log('useTestHook');
    console.log('useTestHook, ReactDOM', ReactDOM);
    console.log('useTestHook, React', React);

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useTestHook');
    }, [count]);

    return {
        count,
        setCount,
    };
}

export default useTestHook;
