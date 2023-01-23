const userSchem = require("../Schema/userSchema");


module.exports = {
    CreateUser: (req, res) => {
        const {name, password, email, birthDay, town, height} = req.body;
        console.log(req.body)
        userSchem.findOne({email: email}).then((users) => {
            console.log(users);
            if (users == null) {
                const user = new userSchem({
                    name,
                    password,
                    email,
                    birthDay,
                    town,
                    height,
                });
                user.save().then(() => {
                    res.status(200).json({
                        message: "User saved successfully!",
                        data: req.body,
                    });
                });
            } else {
                res.status(200).json({
                    message: "Sorry, Email Taken",
                });
            }
        });
    },
    Login: (req, res) => {
        const {email, password} = req.body;
        userSchem
            .findOne({email, password})
            .then((users) => {
                if (users) {
                    res.status(200).json({
                        id: users._id,
                        name: users.name,
                        role: users.role,
                        email: users.email
                    });
                }
                console.log(users);
            })
            .catch((error) => {
                res.status(500).json({
                    message: error,
                    sorry: "error",
                });
            });
    },
};
