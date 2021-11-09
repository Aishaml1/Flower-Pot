import { Reviews } from '../models/review.js'

function index(req, res) {
    Reviews.find({})
        .then(reviews => {
            res.render('reviews/index', {
                reviews,
                time: req.time
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/`)
        })
}

function create(req, res) {
    Reviews.create(req.body)
        .then(review => {
            res.redirect('/reviews')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/reviews/new')
        })
}

function show(req, res) {
    Reviews.findById(req.params.id)
        .then(review => {
            res.render('reviews/show', {
                review,

            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/reviews')
        })
}

function newReview(req, res) {
    res.render('reviews/new', {})
}

function edit(req, res) {
    Reviews.findById(req.params.id)
        .then(review => {
            res.render('reviews/edit', {
                review,

            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/reviews')
        })
}

function deleteReview(req, res) {
    Reviews.findByIdAndDelete(req.params.id, function (err, review) {
        res.redirect("/reviews")
        review
    })
}


export {
    index,
    create,
    show,
    newReview as new,
    edit,
    deleteReview as delete
}