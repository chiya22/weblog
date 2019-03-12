const { CONNECTION_URL, DATABASE, OPTIONS } = require("../config/mongodb.config");
const MongoClient = require("mongodb").MongoClient;

let router = require("express").Router();

router.get("/*", (req,res) => {
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    let db = client.db(DATABASE);
    db.collection("posts").findOne({
      url:req.url
    }).then( (doc) => {
      res.render("./posts/index.ejs", doc);
    }).catch( (error) => {
      throw error;
    }).then(()=>{
      client.close();
    });
  });
});

module.exports = router;
