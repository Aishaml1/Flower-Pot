import { Router } from 'express'
import * as reviewCtrl from '../controllers/review.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/reviews
router.get('/', isLoggedIn, reviewCtrl.index)
//localhost:3000/reviews/new
router.get('/new', isLoggedIn,reviewCtrl.new )

router.get('/:id',isLoggedIn,reviewCtrl.show)


//!localhost:3000/reviews/edit
router.put('/edit', isLoggedIn, reviewCtrl.edit)




// localhost:3000/reviews
router.post('/', isLoggedIn, reviewCtrl.create)
export {
  router
}