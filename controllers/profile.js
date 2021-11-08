import { Profile } from '../models/profile.js'
import { Tea } from '../models/tea.js'

function index(req, res) {
    Profile.find({})
        .then(profile => {
            res.render('profile/index', {
                profile,
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/profile/${req.user.profile._id}`)
        })
}

export{
    index
}