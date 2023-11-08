const express = require('express')

const path = require('path')

const app = express()

const appName = 'new-portfolio-app'

app.use(express.static( __dirname + `/dist/${appName}`))

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`))
})

app.listen(8080)