import { Router } from 'express'
import * as teaCtrl from '../controllers/tea.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

// localhost:3000/tea
router.get('/', teaCtrl.index)
// localhost:300/tea/new
router.get('/new', teaCtrl.new)



// router.post('/', isLoggedIn, teaCtrl.create)
router.post('/new', teaCtrl.create)

router.delete('/', isLoggedIn ,teaCtrl.delete)

export {
  router
}