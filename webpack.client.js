const path = require('path')
const baseConfig = require('./webpack.base')
const {merge} = require('webpack-merge')

const config = {
    entry:'./src/client/client.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    }
}

module.exports = merge(baseConfig,config)