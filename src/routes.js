const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// 1h 3 4 min

module.exports = routes