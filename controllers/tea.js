import { Tea } from '../models/tea.js'

function index(req, res) {
    Tea.find({})
        .then(tea => {
            res.render('tea/index', {
                tea,
                title: "Tea"
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect("/tea")
        })
}

function newTea(req,res){
    console.log(req.body.newTea)
res.render('tea/new', {})
}

function create(req, res) {
    console.log(req.body.create)
     Tea.create(req.body)
        .then(tea => {
            res.redirect('/tea')
        })
        .catch(err => {
            console.log(err)
            res.redirect('/tea/new')
        })
}
function deleteTea(req, res) {
    Tea.findByIdAndDelete(req.params.id, function (err, tea) {
        res.redirect("/tea")
        tea
    })
}

export{
    index,
    newTea as new,
    create,
    deleteTea as delete
}
