import { Router } from 'express'
import * as teaCtrl from '../controllers/tea.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// localhost:3000/tea
router.get('/', teaCtrl.index)
router.get('/new', isLoggedIn, teaCtrl.new)

// router.post('/', isLoggedIn, teaCtrl.create)
router.post('/', isLoggedIn, teaCtrl.create)

export {
  router
}