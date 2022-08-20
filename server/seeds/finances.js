const financesData = require("../seed_data/finances_data");

exports.seed = function (knex) {
  return knex("finances")
    .del()
    .then(function () {
      return knex("finances").insert(financesData);
    });
};
