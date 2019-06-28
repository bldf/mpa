import {
    route,
    GET,
    POST
} from "awilix-koa";
@route("/")
class IndexController {
    constructor({
        indexService
    }) {
        //注入indexService
        this.indexService = indexService;
    }
    @route("index.html")
    @GET()
    async indexAction(ctx,next) {
        ctx.body = await ctx.render(this.webpack.fileSystem.readFileSync('index/pages/test.html'));
    }

    @route("login")
    @GET()
    async about(ctx,next) {
        console.log("TCL: IndexController -> about -> this.webpack", this.webpack)
        ctx.body = await ctx.render(this.webpack.fileSystem.readFileSync('index/pages/test.html'));
        // ctx.body = await ctx.render("login/pages/login.html",{ body:{class:'about',dataActivemenu:'about'}});
    }

    @route("seal.html")
    @GET()
    async seal(ctx,next) {
        ctx.body = await ctx.render("index/pages/seal.html",{ body:{class:'seal',dataActivemenu:'product'}});
    }

    @route("case.html")
    @GET()
    async case(ctx,next) {
        ctx.body = await ctx.render("index/pages/case.html",{ body:{class:'case',dataActivemenu:'case'}});
    }

    @route("contact.html")
    @GET()
    async contact(ctx,next) {
        ctx.body = await ctx.render("index/pages/contact.html",{ body:{class:'about',dataActivemenu:'about'}});
    }
    
    @route("law.html")
    @GET()
    async law(ctx,next) {
        ctx.body = await ctx.render("index/pages/law.html",{ body:{class:'law',dataActivemenu:'law'}});
    }

}
export default IndexController;