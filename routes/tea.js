import { Router } from 'express'
import * as teaCtrl from '../controllers/tea.js'
import { isLoggedIn } from '../middleware/middleware.js'
import { displayDescription } from '../middleware/teas.js'

const router = Router()

// localhost:3000/tea
router.get('/', teaCtrl.index)


export {
  router
}