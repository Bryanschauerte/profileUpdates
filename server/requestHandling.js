
var express = require('express');
var mongodb = require('mongodb');
 module.exports ={
         function newContent(req, res){

          let date = new Date();
          req.body.dateCreated = date;
          let _id = mongodb.ObjectId()
          req.body._id = _id;
          db.collection('contents').save(req.body, (err, result) => {
            if (err) return res.send(err);
            res.send(result);
          })
        },

        function updateContent(req, res){

          let targetID = req.body._id;
          let content = req.body.contentItems;

            db.collection('contents').update(
              {'_id': mongodb.ObjectId(targetID)},
              {$set: {'contentItems':content}},
              { upsert: true }, (err, result)=>{
              if(err){
                console.log(err)
              }else{
                res.send(result)
              }
            } );

          },

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
          },
        function loginForToken(req, res){
          if(!req.body.username || !req.body.password){
            res.status(400).send('Missing info!')
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
      }
