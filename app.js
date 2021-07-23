const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello from The Pi Cluster, Hello Team K Hello Team W'))
app.listen(3000, () => console.log('Server ready'))
