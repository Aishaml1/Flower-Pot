import { Reviews } from  '../models/review.js'

function index(req, res) {
    Reviews.find({})
        .then(review => {
            res.render('reviews/index', {
                review,
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/profile/${req.user.profile._id}`)
        })
}

function create(req, res) {
req.body.ownerOfreviews = req.user.profile.id
    Reviews.create(req.body)
        .then(review => {
            res.redirect('/show')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/show')
        })
}

function show(req, res) {
    Reviews.findById(req.params._id)
        .populate("ownerOfReview")
        .then(review => {
            res.render('reviews/show', {
                review,review
            
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/reviews')
        })
}




export{
    index,
    create,
    show
}