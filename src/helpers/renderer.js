import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'
import {Provider} from 'react-redux'
export default (req, store) => {
    const content = renderToString(
<Provider store={store}>
<StaticRouter  location={req.path} context={{}}>
<React.StrictMode>
<Routes />
</React.StrictMode>
        </StaticRouter>
</Provider>
        );
const html = `<html>
<head>
<title>SSR-Project</title>
</head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</html>
`
return html
}