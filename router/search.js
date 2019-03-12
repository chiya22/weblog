const { DATABASE, CONNECTION_URL, OPTIONS } = require("../config/mongodb.config");
const { MAX_ITEM_PER_PAGE } = require("../config/app.config").search;
const MongoClient = require("mongodb").MongoClient;

const router = require("express").Router();

router.get("/*", (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const keyword = req.query.keyword || "";
  const regexp = new RegExp(`.*${keyword}.*`);
  const query = {
    $or: [{ title: regexp }, { content: regexp }]
  };

  MongoClient.connect(CONNECTION_URL, OPTIONS, (error, client) => {
    var db = client.db(DATABASE);
    Promise.all([
      db.collection("posts").find(query).count(),
      db.collection("posts").find(query).sort({ published: -1 }).skip((page - 1) * MAX_ITEM_PER_PAGE).limit(MAX_ITEM_PER_PAGE).toArray()
    ])
      .then((results) => {
        const data = {
          keyword,
          count: results[0],
          list:results[1],
          pagination:{
            max: Math.ceil(results[0]/MAX_ITEM_PER_PAGE),
            current: page
          }
        };
        res.render("./search/list.ejs", data);
      }).catch((error) => {
        throw error;
      }).then(() => {
        client.close();
      });
  });
});

module.exports = router;
