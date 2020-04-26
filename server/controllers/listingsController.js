let Listing = require("../models/listing");

exports.create = async (req, res) => {
    Listing.create(req.body);
    res.json({ success: true, message: "Listing successfully created" });
}

exports.read = (req, res) => {
    Listing.find()
        .then(listing => res.json(listing))
        .catch(err => res.status(404).json("Error: " + err));
}

exports.readOne = (req, res) => {
    Listing.findById(req.params.id)
        .then(listing => res.json(listing))
        .catch(err => res.status(404).json("Error: " + err));
}

exports.update = (req, res) => {
    var query = { '_id': req.params.id };
    Listing.findOneAndUpdate(query, req.body, function (err, doc) {
        if (err)
            return res.send(400, { error: err });
        return res.send("Listing updated");
    })
}

exports.delete = (req, res) => {
    Listing.findByIdAndDelete(req.params.id)
        .then(listing => res.json("Listing deleted."))
        .catch(err => res.status(404).json("Error: " + err));
}