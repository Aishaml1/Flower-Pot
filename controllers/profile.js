import { Profile } from '../models/profile.js'


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
function show(req, res) {
    Profile.findById(req.params.id)
    .then((profile) => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        const isSelf = self._id.equals(profile._id)
        res.render("profile/show", {
          title: `${profile.name}'s profile`,
          profile,
          self,
          isSelf,
        })
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
  }


  function createTea(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.tea.push(req.body)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${req.user.profile._id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profile/${req.user.profile._id}`)
    })
  }
  

export{
    index,
    show,
    createTea
}