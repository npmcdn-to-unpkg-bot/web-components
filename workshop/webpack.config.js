var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'scripts/jsx/react-app.jsx'),
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: 'react-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    }
};

module.exports = config;