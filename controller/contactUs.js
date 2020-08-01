const Contacts = require("../models/Contact")

// Intern Validation rules
const contactValidationRules = () => [
  body('name').isString(),
  body('email').isEmail(),
  body('subjec').isString(),
  body('message').isString(),
];


// get all contacts
const getAllContacts = (req, res) => {
  Contacts.find({})
    .then(contacts => {
        res.render("notifications", {contacts: contacts})
    })  
    .catch(err => {
        res.send(err)
    })
}



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
  contactValidationRules,
       getAllContacts,
       contact
  }
