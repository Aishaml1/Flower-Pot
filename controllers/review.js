import { Reviews } from  '../models/review.js'

function index(req, res) {
    Reviews.find({})
        .then(reviews => {
            res.render('reviews/index', {
                reviews
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
    Reviews.findById(req.params.id, function(error, review) {
      res.render('reviews/show', {
        review: review,
        error: error
      })
    })
  }

function newReview(req,res){
    res.render('reviews/new',{})
}


function edit(req, res) {
    Reviews.findById(req.params.id)
        .then(reviews => {
            res.render('reviews/edit', {
                reviews,
                
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
    show,
    newReview as new,
    edit,
    
}