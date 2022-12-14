const router = require("express").Router();
const financeController = require("../controllers/financesController");

router.route("/").get(financeController.index);
router.route("/:category").get(financeController.item);

module.exports = router;
