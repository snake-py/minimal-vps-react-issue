import React from 'react';
import { navigate } from 'vite-plugin-ssr/client/router';
import { usePageContext } from '../../renderer/usePageContext';

export { Page };

function Page() {
    const { urlOriginal } = usePageContext();
    const [count, setCount] = React.useState(0);
    return (
        <div>
            {urlOriginal}
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>add</button>
            <button onClick={() => navigate('/?service=test' + count)}>navigate</button>
        </div>
    );
}
