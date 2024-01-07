const express = require("express");
const dzikrController = require("../controllers/dzikr.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, dzikrController.save);
router.get("/:id", dzikrController.show);
router.get("/", dzikrController.index);
router.patch("/:id", checkAuthMiddleware.checkAuth, dzikrController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, dzikrController.destroy);

module.exports = router;
