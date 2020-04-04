const listing = require("../controllers/listingsController"),
        express = require("express"),
        router = new express.Router();

router.post("/", listing.create);
router.get("/", listing.read);
router.get("/:id", listing.readOne);
router.put("/:id", listing.update);
router.delete("/:id", listing.delete);

module.exports = router;