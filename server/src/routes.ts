import express, { request, response } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsContrller from './controllers/ConnectionsController'

const routes = express.Router()
const classesController = new ClassesController()
const connections = new ConnectionsContrller()

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.post('/connections', connections.create)
routes.get('/connections', connections.index)

export default routes

