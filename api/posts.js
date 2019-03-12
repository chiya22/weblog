const { DATABASE, CONNECTION_URL, OPTIONS } = require("../config/mongodb.config");
const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;

router.get("/*", (req, res) => {
  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    let db = client.db(DATABASE);
    db.collection("posts").findOne({
      url: req.url
    }, {
      projection: { _id: 0 }
    }).then((doc) => {
      res.json(doc);
    }).catch((error) => {
      throw error;
    }).then(() => {
      client.close();
    });
  });
});

module.exports = router;
