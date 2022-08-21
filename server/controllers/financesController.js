const knex = require("knex")(require("../knexfile").development);

exports.index = (req, res) => {
  knex("finances").then((data) => {
    res.status(200).json(data);
  });
};

exports.item = (req, res) => {
  knex("finances")
    .where({ category: req.params.category })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send("Item not found.");
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving data: ${err}.`);
    });
};
