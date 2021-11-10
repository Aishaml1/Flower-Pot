import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profileCtrl from '../controllers/profile.js'


const router = Router()


router.get('/', isLoggedIn, profileCtrl.index)
router.get('/:id', isLoggedIn, profileCtrl.show)

router.post('/:id/tea', isLoggedIn, profileCtrl.createTea)
router.delete('/tea/:id', isLoggedIn, profileCtrl.deleteTea)

export {
    router
}