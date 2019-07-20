const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {join} = require("path");
module.exports = {
    output: {
        path:join(__dirname,"./dist/assets"),
        filename: "scripts/[name].[contenthash:5].bundles.js",
        //公司的Cdn
        publicPath: "/"
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }],
            },
            canPrint: true
        })
    ],
    optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
            //   ecma: undefined,
            //   warnings: false,
            //   parse: {},
              compress: {
                  drop_console:true,
                  drop_debugger:true,
              },
            //   mangle: true, // Note `mangle.properties` is `false` by default.
            //   module: false,
            //   output: null,
            //   toplevel: false,
            //   nameCache: null,
            //   ie8: false,
            //   keep_classnames: undefined,
            //   keep_fnames: false,
            //   safari10: false,
            },
          }),
        ],
      },
};