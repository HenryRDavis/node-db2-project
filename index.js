const express = require('express')
const helmet = require('helmet') // provides security defaults

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'welcome'})
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Api running on port ${PORT}`))