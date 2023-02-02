var express = require('express');
var router = express.Router();
console.log("In router")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const phoneusage = require('../models/phoneusage');

router.get('/create', function(req, res, next) {
  res.render('form.ejs', { title: 'forum' });
})
router.post('/',(req,res,next) => {
  phoneusage.create(req.body)
    .then((usagecreated) => {
        phoneusage.find()
          .then((usagefound) => {
                res.render('UsageSubmitted.ejs',{'usagelist' : usagefound, title:'Usage'} );
})
    })}); // this creates the feedback/create page for post the users info onto the feedback mongdb database

  router.get('/edit/:id', async(req,res) => {

    let usage = await phoneusage.findById(req.params.id);
    try{
        res.render('edit-forum',{phoneusage:usage});
        await phoneusage.findByIdAndDelete(req.params.id);
    }
    catch{
      await phoneusage.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }

}); // this checks if the page can be edited and if not just goes back to /feedback  to show that submition been updated and deletes the previous entry before the edit

router.put('/:id', async (req,res) => {

    let usage;
    try{    
      usage = await phoneusage.findByIdAndUpdate(req.params.id);
      usage.name=req.body.name;
      usage.education=req.body.education;
      usage.shopping=req.body.shopping;
      usage.total=req.body.total;
      usage.browsing=req.body.browsing;
      usage.socialMedia=req.body.socialMedia;
      
        res.redirect('/');
       
    }
    catch{
      await phoneusage.findByIdAndDelete(req.params.id);
        res.render('edit-fourm',{phoneusage:usage});
    }
    

}); // this makes the user input equal to the database inputs so it can show the edit page correctly

router.get('/find', function(req, res, next) {
  res.render('find.ejs', { title: 'find' });
}) // this routes the feedback/find to the find file

router.post('/find', async(req, res, next) => {
  let dbname = req.body.name; 
  usage = await phoneusage.find({name: dbname});
  res.render('search.ejs',{search:usage, title:'search'} );

}) // this allows user input a name and searches the database for an entry matching that name and then displays it to user.

router.get('/delete/:id', async(req, res) => {
  await phoneusage.findByIdAndDelete(req.params.id);
  res.render('deleted.ejs',{title:'deleted'} );
}); // this deletes the entry when the delete button reroutes to this URL.



module.exports = router;