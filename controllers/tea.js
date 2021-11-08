import { Tea } from  '../models/tea.js'
import{displayDescription } from '../middleware/teas.js'

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




export{
    index
}
