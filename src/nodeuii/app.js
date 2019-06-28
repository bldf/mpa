import Koa from "koa";
import config from "./config"
import errorHandler from './middwares/errorHandler.js';
import log4js from 'log4js';

import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from '../webpack.config.js'
const compile = webpack(devConfig)

import {
    createContainer,
    Lifetime
} from "awilix";
import {
    loadControllers,
    scopePerRequest
} from "awilix-koa";
import serve from "koa-static";
import render from "koa-swig";
import co from 'co';
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/logs/ydlogs.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
const logger = log4js.getLogger('cheese');
const app = new Koa();


/**********Begin webpack热加载********* */

app.use(devMiddleware(compile, {
    // display no info to console (only warnings and errors)
    // //向控制台显示无信息（仅警告和错误）

     noInfo: false,

     // display nothing to the console
     quiet: false,
 
     // switch into lazy mode
     // that means no watching, but recompilation on every request
     lazy: true,
 
     // watch options (only lazy: false)
     watchOptions: {
         aggregateTimeout: 300,
         poll: true
     },
 
     // public path to bind the middleware to
     // use the same as in webpack
     publicPath: "/assets/",
     writeToDisk:true,
     // custom headers
    //  headers: { "X-Custom-Header": "yes" },
 
     // options for formating the statistics
     stats: {
         colors: true
     }
}))

// app.use(hotMiddleware(compile, {
//     // log: console.log,
//     path: '/',
//     // heartbeat: 10 * 1000
//   }))

/********** webpack热加载  End **********/




//创建IOC容器
const container = createContainer();
//每一次请求
app.use(scopePerRequest(container));
//装载所有的Service到容器里去
container.loadModules([__dirname + '/services/*.js'], {
    formatName: "camelCase",
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
});

app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: config.cache, // disable, set to false , 设置在生产模式下才打开缓存
    ext: 'html',
    writeBody: false
}));


//自动化装载路由
app.use(loadControllers(__dirname + "/routes/*.js"));
app.use(serve(config.staticDir));



// errorHandler.error(app, logger);

app.listen(config.port, () => {
    console.log(`ysSystem listening on ${config.port}`)
});