const router = require("express").Router();
const financeController = require("../controllers/financesController");

router.route("/:type").get(financeController.item);

module.exports = router;
