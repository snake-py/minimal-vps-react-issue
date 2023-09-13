import type { PageContextClient } from './types';
import { PageShell } from './PageShell';
import ReactDOM from 'react-dom/client';

let root: ReactDOM.Root;

async function render(pageContext: PageContextClient) {
    const { Page, pageProps } = pageContext;
    console.log('pageContext');
    const pageComponent = (
        <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
        </PageShell>
    );
    const container = document.getElementById('react-root');
    if (!container) throw new Error('DOM element #react-root not found');

    if (container.innerHTML === '' || !pageContext.isHydration) {
        if (!root) {
            root = ReactDOM.createRoot(container);
        }
        root.render(pageComponent);
    } else {
        root = ReactDOM.hydrateRoot(container, pageComponent);
    }
}

function onHydrationEnd() {
    console.log('The page is now interactive');
}

export { onHydrationEnd, render };

export const clientRouting = true;
export const hydrationCanBeAborted = true;
export const prefetchStaticAssets = 'viewport';
