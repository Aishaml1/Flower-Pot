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
    

export{
    index,
    newTea as new,
    create
}
