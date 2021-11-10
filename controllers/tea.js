import { Tea } from '../models/tea.js'

function index(req, res) {
    Tea.find({})
        .then(tea => {
            res.render('tea/index', {
                tea,
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect("/tea")
        })
}

function newTea(req,res){
    Tea.findById(req.params.id)
    .then(tea => {
        res.render('tea/new', {
            tea,
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/new')
    })
}

function create(req, res) {
    Tea.create(req.body)
        .then(tea => {
            console.log(tea, 'TEA')
            res.redirect('/tea/new')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/new')
        })
}

function deleteTea(req, res) {
    Tea.findByIdAndDelete(req.params.id, function(err, tea) {
      res.redirect("/tea")
      console.log(tea)
    })
  }

export{
    index,
    newTea as new,
    create,
    deleteTea as delete
}
