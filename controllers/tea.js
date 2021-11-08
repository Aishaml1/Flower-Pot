import { Tea } from  '../models/tea.js'
import { Profile } from '../models/profile.js'

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

function show(req, res){
    Tea.findById(req.params.id)
    .populate('teaName')
    then(tea => {
        res.render('tea/show', {
            tea

        })
    })
}




export{
    index,
    show
}
