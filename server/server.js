
import express from 'express';
import browserify from 'browserify-middleware';

const fs = require('fs');
const React = require('react');



import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {createPage, template} from './template';
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser =require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const session = require('cookie-session');
const expressJWT = require('express-jwt');
const compression = require('compression');
const helmet = require('helmet');
const mongoLABSURLINFO = require('./keys/hidden.js');
import Root from '../app/Root';


import users from './keys/users';
import secret from './keys/secret';
const app = express();


browserify.settings.mode = 'production'; //uncomment to disable source watching and enable minification
browserify.settings({transform: ['babelify']});



app.use(compression());
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.frameguard('deny'));
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }))
app.use('/assets', express.static('assets'));


let MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect(mongoLABSURLINFO, (err, database) => {
  db= database
  app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)})
})



//editing requests
app.post('/editContents', expressJWT({secret}), newContent);
app.put('/editContents',  expressJWT({secret}), updateContent);
app.delete('/editContents',  expressJWT({secret}), deleteContent);



//get requests
app.get('*', (req, res) => {

    if(req.url){

      switch (req.url) {
        case '/':
           return handleRender(req, res);
          break;
        case '/getContents/profile':
          return profileDefaultData(req, res);
          break;

        case '/admin':
          return handleAdminRender(req, res);
          break;
        default:
          return res.status(404).send('Not found')
      }
    }
})


//server rendering for base client
function handleRender(req, res) {

  const html = renderToString(<Root />)
  res.send(renderFullPage(html))
}


function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="assets/main.css">
        <title>Bryan Schauerte</title>
      </head>
      <body>
        <div id="root">${html}</div>

        <script src="/assets/app.js"></script>
      </body>
    </html>
    `}


function profileDefaultData(req, res){
  if(db){
    db.collection('contents').find().toArray(function(err, results) {
        if (err) {
           return res.sendStatus(404);
        }
        if(results) {
          return res.send(results);
        }
        return res.send('Nothing in DB').sendStatus(200);
      })
  }else{
    return res.send('Try back later, DB down...').sendStatus(200);
  }
}



//ADMIN HANDLERS


function loginUser(req, res){
  if(!req.body.username || !req.body.password){
    return res.status(400).send('Missing info!')
  }
  if(users[req.body.username]){
    if(users[req.body.username].password == users[req.body.username].password){
      let token = jwt.sign(users[req.body.username], secret)
      return res.status(200).json({token:token, admin:users[req.body.username].admin});
    }
  }else{
    return res.status(400).send('incorrect info!');
  }
}


function handleAdminRender(req, res) {
  //holder function for the admin
  return res.status(404).send('Not Added yet');
  const html = renderToString(<Admin />)
  res.send(renderFullPage(html))
}

function newContent(req, res){

  let date = new Date();
  req.body.dateCreated = date;
  let _id = mongodb.ObjectId()
  req.body._id = _id;
  db.collection('contents').save(req.body, (err, result) => {
    if (err) return res.send(err);
    res.send(result);
  })
}

function updateContent(req, res){

let targetID = req.body._id;
let content = req.body.contentItems;

  db.collection('contents').update(
    {'_id': mongodb.ObjectId(targetID)},
    {$set: {'contentItems':content}},
    { upsert: true }, (err, result)=>{
    if(err){
      res.send(result)
    }else{
      res.send(result)
    }
  });

}

function deleteContent(req,res){

    let targetID = req.body._id;
    db.collection('contents', (err, collection)=>{
      collection.remove({'_id': mongodb.ObjectId(targetID)}, {safe:true}, (err, result)=>{
        if(err) {
          res.send(err)
      }else{
        res.send(collection)
      }

      })
    })
}
