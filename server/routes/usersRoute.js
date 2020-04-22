const user = require("../controllers/usersController"),
        express = require("express"),
        router = new express.Router();

router.post("/", user.create);
router.get("/", user.read);
router.get("/:id", user.readOne);
router.put("/:id", user.update);
router.delete("/:id", user.delete);

module.exports = router;