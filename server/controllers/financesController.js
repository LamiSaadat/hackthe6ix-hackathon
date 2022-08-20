const knex = require("knex")(require("../knexfile").development);

exports.item = (req, res) => {
  knex("finances")
    .where({ type: req.params.type })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send("Item not found.");
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving data: ${err}.`);
    });
};
