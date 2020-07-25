const router = require('express').Router(); 
const Contacts = require('../models/Contact')



// post 
router.post("/contact", (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    
    const contacts  = {
        name,  
        email,
        subject,
        message
      }; 

  Contacts.create(contacts)
  .then(contacts, () => {
      res.redirect("/contact")
  })
  .catch(err, () =>{
      res.send(err); 
  }) 
})


// UPDATE contactus
router.post('/contact/update/:id', (req, res) => {
    Contacts.findById(req.params.id, (err, contacts) => {
        if (!contacts)
            res.status(404).send("data is not found");
        else {
            contacts.name = req.body.name
            contacts.email = req.body.email
            contacts.subject = req.body.subject
            contacts.message = req.body.message
           
            Contacts.save().then(contact => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});



module.exports = router;
