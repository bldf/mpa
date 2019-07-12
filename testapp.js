const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

const devConfig = require('./webpack.config.js')
const compiler = webpack(devConfig);
console.log(JSON.stringify(compiler))
const express = require('express');
const app = express();
const isObject = require('lodash/isObject');

function normalizeAssets(assets) {
    if (isObject(assets)) {
      return Object.values(assets);
    }
  
    return Array.isArray(assets) ? assets : [assets];
  }
  
app.use(
  middleware(compiler, {
    serverSideRender:true
    // webpack-dev-middleware options
  })
);
app.use((req, res) => {
    const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    const fs = res.locals.fs;
    const outputPath = res.locals.webpackStats.toJson().outputPath;
    console.log("TCL: outputPath", outputPath)
  
    // then use `assetsByChunkName` for server-sider rendering
    // For example, if you have only one main chunk:
    res.send ( fs.readFileSync(outputPath + '/' + 'views/common/layout.html','utf-8') )
    // console.log("TCL: fs.readFileSync(outputPath + '/' + 'views/common/layout.html')", fs.readFileSync(outputPath + '/' + 'views/common/layout.html'))
//     console.log("TCL: Object.keys(fs)", Object.keys(fs))
//     res.send(`
//   <html>
//     <head>
//       <title>My App</title>
//       <style>
//       </style>
//     </head>
//     <body>
//       <div id="root">9879876545465456</div>
//     </body>
//   </html>
//     `);
  });
app.listen(3000, () => console.log('Example app listening on port 3000!'));