const glob = require("glob");
// const files = glob.sync("./src/webapp/views/**/*.entry.js");
// console.log("TCL: files", files)
// console.log("TCL: files", files)
// console.log("TCL: files", files)


const files = glob.sync("./src/webapp/views/**/*.entry.*");

console.log("TCL: files", files)



async function setup() {
    // const middleware = await koaWebpack(options);
    // console.log("TCL: setup -> koaWebpack({compiler: compile})", koaWebpack({compiler: compile}))
    // app.use(koaWebpack({
    //     compiler: compile
    //   }));
    console.log("TCL: setup ->****************************************************----------////////// 1", 1)

}


 setup() ;

