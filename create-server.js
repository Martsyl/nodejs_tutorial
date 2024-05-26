const http = require('http')

const server  = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
if(req.url === '/about'){
    res.end('welcome to our about page')
}
res.end(`
<h1>OPPS!!!!!</h1>
<P>Page not found</P>
<a href=' /'>back home</a>`)
})
server.listen(3000)