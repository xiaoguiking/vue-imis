const Ws = require("ws");

(function (Ws) {
    const server = new Ws.Server({ port: 9999 })
    console.log("server start");
    console.log(111)

    const init = function () {
        bindEvent()
    }

    function bindEvent() {
        server.on("open", handleOpen)
        server.on("close", handleClose)
        server.on("error", handleError)
        server.on("connection", handleConnection)
    }

    function handleOpen() {
        console.log("sever open")
    }
    function handleClose() {
        console.log("sever close")
    }
    function handleError() {
        console.log("server Error")
    }

    function handleConnection(ws) {
        console.log("ws connected",)
        ws.on("message", handleMessage)
    }
    /**
     * 1.接受前端收据
     * 2.作为后端广播数据
     */
    function handleMessage(msg) {
        console.log(msg, "server message")
        server.clients.forEach(function (c) {
            c.send(msg)
        })
    }

    init()
    var port = process.env.PORT || 7777
    app.listen(port)

})(Ws)