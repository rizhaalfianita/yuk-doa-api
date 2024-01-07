const express = require("express");
const doaTypeController = require("../controllers/doatype.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/:id", doaTypeController.show);
router.get("/", doaTypeController.index);
router.post("/", checkAuthMiddleware.checkAuth, doaTypeController.save);
router.patch("/:id", checkAuthMiddleware.checkAuth, doaTypeController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, doaTypeController.destroy);

module.exports = router;
