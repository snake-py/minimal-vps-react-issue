# minimal-vps-react-issue for Cannot read properties of null (reading 'useState')

The error you see:

```error
react-dom.development.js:20662 Uncaught Error: Cannot read properties of null (reading 'useState')
    at updateDehydratedSuspenseComponent (react-dom.development.js:20662:17)
    at updateSuspenseComponent (react-dom.development.js:20362:16)
    at beginWork (react-dom.development.js:21624:14)
    at beginWork$1 (react-dom.development.js:27426:14)
    at performUnitOfWork (react-dom.development.js:26557:12)
    at workLoopSync (react-dom.development.js:26466:5)
    at renderRootSync (react-dom.development.js:26434:7)
    at performConcurrentWorkOnRoot (react-dom.development.js:25738:74)
    at workLoop (scheduler.development.js:266:34)
    at flushWork (scheduler.development.js:239:14)
```

The issue was with circular dependency in conjunction with a custom library.

To reproduce the issue:

-   Clone this repo
-   cd into `react-vite-library`
-   run `npm i`
-   run `npm run build`
-   run `npm link`
-   cd into `react-vite-app`
-   run `npm i`
-   run `npm link react-vite-library`
-   run `npm run dev`
