const Contacts = require("../models/Contact")

// post contactUs form
const contact = (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    
    const contacts  = {
        name,  
        email,
        subject,
        message
      } 

  Contacts.create(contacts)
  .then(contacts, () => {
    req.flash('success', 'Thanks for contacting us...');
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
    req.flash('error', 'comment not saved please try again');
    res.redirect('/contact');
});
}; 


module.exports = {
        contact
  }
