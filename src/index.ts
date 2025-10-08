import server from "./server";

var colors = require('colors/safe');

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.rainbow(`Server on port ${port}`))
})