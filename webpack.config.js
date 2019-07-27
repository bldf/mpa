const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlAfterWebpackPlugin = require("./config/htmlAfterWebpackPlugin.js");
const argv = require('yargs-parser')(process.argv.slice(2));
const path = require("path");
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const setTitle = require('node-bash-title');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const glob = require("glob");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

setTitle('bldf的' + _mode);
const {
    join,
    resolve
} = require("path");
const files = glob.sync("./src/webapp/views/**/*.entry.*");
//需要去处理的入口文件
let _entry = {};
let _plugins = [];
for (let item of files) {
    //index-test.entry.js
    if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.[tj]sx?$)/g.test(item) == true) {
        const entryKey = RegExp.$1;
        _entry[entryKey] = item;
        const [dist, template] = entryKey.split("-");
        _plugins.push(new HtmlWebpackPlugin({
            filename: `../views/${dist}/pages/${template}.html`,
            template: `src/webapp/views/${dist}/pages/${template}.html`,
            chunks: ["runtime", "common", entryKey],
            minify: {
                removeComments: _modeflag,// 去除空格
                collapseWhitespace: _modeflag// 去除注释    
            },
            inject: false
        }))
    }
}

let webpackConfig = {
    mode:_mode,
    resolve:{
        alias:{
            '@': resolve('src/webapp') ,
            '@v': resolve('src/webapp/views') ,
            '@styles':resolve('src/webapp/styles') 
        },
        //extensions: 可以不写文件后罪名
        extensions: [ '.tsx', '.ts', '.js','css','less' ]
    },
    entry: _entry,
    module: {
        rules: [
         { test: /\.tsx?$/,
            include: [path.resolve(__dirname, 'src')],
            exclude: /(node_modules|bower_components)/,
            // use:[{ loader: "ts-loader"},{ loader: "babel-loader"}] },
            use:[{ loader: "ts-loader"}] },
            {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        }
                    }
                },
            ],
        }, {
            test: /\.(png|jpg|gif|ttf|otf|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024
                }
            }]
        }, {
            test: /\.(c|le)ss$/,
            // exclude:/.+antd\.css/i,
            exclude: /node_modules/,
            use: [
            //     {
            //     loader: 'style-loader',
            //     options: {
            //         sourceMap: true
            //     }
            // },
            {
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }, {
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true
                }
            }]
        }, {
            // test: /.+antd\.css/i,
            test: /\.(c|le)ss$/,
            include: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
                options: {
                    // modules:false,
                    localIdentName: '[name]__[local]--[hash:base64:5]'
                }
            }]
        }]
    },
    watch: !_modeflag,
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/
    },
    output: {
        path: join(__dirname, "./dist/assets"),
        publicPath: "/",
        filename: "scripts/[name].bundle.js"
    },
    optimization: {
        noEmitOnErrors: false,
        //namedChunks
        //moduleIds
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                }
            }
        },
        runtimeChunk: {
            name: "runtime"
        }
    },
    //profile:true, //webpack原生的
    plugins: [
        //所有的html自动化的过来
        new WebpackBuildNotifierPlugin({
            title: "webpack配置结果",
            logo: resolve("./favicon.png"),
            suppressSuccess: true
        }),
        new MiniCssExtractPlugin({
            filename: _modeflag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[name].[contenthash:5].css" : "styles/[name].css"
        }),
        new ProgressBarPlugin(),
        ..._plugins,
        new htmlAfterWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: join(__dirname,  "/src/webapp/views/common/layout.html"),
            to: '../views/common/layout.html'
        }]),
        new CopyWebpackPlugin([{
            from: join(__dirname,  "/src/webapp/components"),
            to: '../components'
        }],{
            copyUnmodified:true, //只打包copy内容
            ignore:["*.js","*.css",".DS_Store","*.ts","*.tsx"]
        }),
        // new BundleAnalyzerPlugin() //查看打包分析
    ]
}
//module.exports = smp.wrap(merge(_mergeConfig, webpackConfig));
module.exports = merge(_mergeConfig, webpackConfig);