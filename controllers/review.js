import { Reviews } from '../models/review.js'


function index(req, res) {
    Reviews.find({}).populate("owner")
        .then(reviews => {
            console.log(reviews, 'Reviews')
            res.render('reviews/index', {
                reviews,
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/`)
        })
}

function create(req, res) {
    req.body.owner = req.user.profile._id
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
    .populate("owner")
        .then(review => {
            console.log(review,'REVIEW')
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
    Reviews.findById(req.params.id)
        .then(review => {
            res.render('reviews/new', {
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/reviews')
        })
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

function update(req, res) {
    Reviews.findById(req.params.id)
        .then(review => {
                review.update(req.body, { new: true })
                    .then(() => {
                        res.redirect('/reviews')
                    })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/reviews`)
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
    update,
    deleteReview as delete,
    
}