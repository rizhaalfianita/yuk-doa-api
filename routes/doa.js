const express = require("express");
const doaController = require("../controllers/doa.controller");
const checkAuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, doaController.save);
router.get("/:id", doaController.show);
router.get("/", doaController.index);
router.patch("/:id", checkAuthMiddleware.checkAuth, doaController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, doaController.destroy);

module.exports = router;
