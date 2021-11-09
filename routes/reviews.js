import { Router } from 'express'
import * as reviewCtrl from '../controllers/review.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// localhost:3000/reviews
router.get('/', isLoggedIn, reviewCtrl.index)
//localhost:3000/reviews/new
router.get('/new', isLoggedIn,reviewCtrl.new )
//localhost:3000/reviews/id
router.get('/:id',isLoggedIn,reviewCtrl.show)
//localhost:3000/reviews/edit
router.get('/:id/edit', isLoggedIn, reviewCtrl.edit)


router.delete('/:id', isLoggedIn, reviewCtrl.delete)

// localhost:3000/reviews
router.post('/', isLoggedIn, reviewCtrl.create)

export {
  router
}