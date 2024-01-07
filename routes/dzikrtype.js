const express = require("express");
const dzikrTypeController = require("../controllers/dzikrtype.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", dzikrTypeController.index);
router.get("/:id", dzikrTypeController.show);
router.post("/", checkAuthMiddleware.checkAuth, dzikrTypeController.save);
router.patch("/:id", checkAuthMiddleware.checkAuth, dzikrTypeController.update);
router.delete(
  "/:id",
  checkAuthMiddleware.checkAuth,
  dzikrTypeController.destroy
);

module.exports = router;
