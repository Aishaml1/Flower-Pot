import { Router } from 'express'
import * as reviewCtrl from '../controllers/review.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/reviews
router.get('/', isLoggedIn, reviewCtrl.index)


router.get('/:id',isLoggedIn,reviewCtrl.show)


// localhost:3000/reviews/all-reviews Method:POST 
router.post('/:id', isLoggedIn, reviewCtrl.create)
export {
  router
}