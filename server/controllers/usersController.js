let User = require("../models/user");

exports.create = async (req, res) => {

    User.create(req.body);
    res.json({ success: true, message: "User successfully created" });

}

exports.read = (req, res) => {
    User.find()
        .then(User => res.json(User))
        .catch(err => res.status(404).json("Error: " + err));
}

exports.readOne = (req, res) => {
    User.findById(req.params.id)
        .then(User => res.json(User))
        .catch(err => res.status(404).json("Error: " + err));
}

exports.update = (req, res) => {
    var query = { '_id': req.params.id };
    User.findOneAndUpdate(query, req.body, function (err, doc) {
        if (err)
            return res.send(400, { error: err });
        return res.send("User updated");
    })
}

exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(User => res.json("User deleted."))
        .catch(err => res.status(404).json("Error: " + err));
}