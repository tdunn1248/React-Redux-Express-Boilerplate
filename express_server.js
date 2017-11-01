const express = require('express')

const app = express()
const port = 3444

app.use(express.static(__dirname + '/src/public'))

app.set('views', __dirname + '/src/views')
app.set('view engine', 'pug')

app.get('/', (request, response) => response.status(200).render('index'))

app.listen(port, () => console.log(`server runnin on port ${port}`))
