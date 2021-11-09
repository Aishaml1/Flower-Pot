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
res.render('tea/new', {})
}

    

export{
    index,
    newTea as new
}
