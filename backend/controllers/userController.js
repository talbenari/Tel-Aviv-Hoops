const userSchem = require("../Schema/userSchema");
const apartSchem = require("../Schema/apartmentSchema");

module.exports = {
  CreateUser: (req, res) => {
    const { name, password, email } = req.body;
    userSchem.findOne({ email: email }).then((users) => {
      console.log(users);
      if (users == null) {
        const user = new userSchem({
          name,
          password,
          email,
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
    const { email, password } = req.body;
    userSchem
      .findOne({ email, password })
      .then((users) => {
        if (users) {
          res.status(200).json({
            id: users._id,
            name: users.name,
            role: users.role,
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
  AddToFavorites: (req, res) => {
    const { apartmentId, userId } = req.body;
    let checkifexist = false;

    userSchem.findOne({ _id: userId }).then((user) => {
      console.log(user);
      user?.save_apartments.map((apartment) => {
        console.log(apartment);
        if (apartment === apartmentId) {
          checkifexist = true;
        }
      });
      if (checkifexist === false) {
        user?.save_apartments.push(apartmentId);
        user.save().then();
        res.status(200).json({
          message: true,
        });
      } else {
        res.status(200).json({
          message: false,
        });
      }
      console.log(user?.save_apartments);
    });
  },
  Favorites: async (req, res) => {
    const { userId } = req.body;
    const array = [{}];
    const user = await userSchem.findOne({ _id: userId });
    if (user?.save_apartments) {
      const myApartments = await apartSchem.find({
        _id: { $in: user.save_apartments },
      });
      res.status(200).json({
        favorites: myApartments,
      });
      console.log(myApartments);
    }
  },
};
