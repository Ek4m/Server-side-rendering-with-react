import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'

export default (req) => {
    const content = renderToString(
    <StaticRouter  location={req.path} context={{}}>
        <Routes />
        </StaticRouter>);
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