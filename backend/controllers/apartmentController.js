const apartSchem = require("../Schema/apartmentSchema");

module.exports = {
  CreateApartment: (req, res) => {
    const { name, address, price, checked, description, publisher, images } =
      req.body;
    if (!publisher) return false;
    apartSchem.findOne({ address: address }).then((users) => {
      console.log(users);
      if (users == null) {
        const user = new apartSchem({
          name,
          address,
          description,
          price,
          checked,
          publisher,
          images,
        });
        user
          .save()
          .then(() => {
            res.status(200).json({
              message: "User saved successfully!",
              data: req.body,
            });
          })
          .catch();
      } else {
        res.status(200).json({
          message: "Sorry, apartment already posted",
        });
      }
    });
  },
  GetMyApartments: (req, res) => {
    const { userName } = req.body;
    if (!userName) return false;
    apartSchem.find({ publisher: userName }).then((myApartments) => {
      res.status(200).json({
        myApartments,
      });
    });
  },
  ApartmentById: (req, res) => {
    apartSchem.findOne({ _id: req.body.id }).then((apartment) => {
      res.status(200).json({
        apartment,
      });
    });
  },
  GetAllApartments: (req, res) => {
    apartSchem.find().then((Apartments) => {
      res.status(200).json({
        Apartments,
      });
    });
  },
  NewReview: (req, res) => {
    const {
      apartment,
      images,
      overwall,
      yard,
      price,
      transport,
      clean,
      hosting,
      location,
      description,
    } = req.body;
    apartSchem.findOne({ _id: apartment }).then((Apartments) => {
      console.log(Apartments);
      if (!Apartments) {
        console.log("errorrrrrrr");
      }
      const data = {
        photos: images,
        overwall: overwall,
        yard: yard,
        price: price,
        transport: transport,
        clean: clean,
        hosting: hosting,
        location: location,
        freeText: description,
      };
      const newreview = { reviews: data };
      if (Apartments.reviews) {
        Apartments.reviews.push(data);
        Apartments.save().then();
        console.log("push");
      } else Apartments.newreview.reviews?.save();
      console.log("saved!");
      res.status(200).json({
        newreview,
      });
    });
  },
  AllReviews: (req, res) => {
    const ApartmentId = req.body.id;
    // console.log(req.body.id);
    apartSchem.findOne({ _id: ApartmentId }).then((apartment) => {
      // console.log(apartment?.reviews);
      res.status(200).json({
        reviews: apartment?.reviews,
      });
    });
  },

  // ReviewSum: (req, res) => {
  //   const ApartmentId = req.body.id;
  //
  //   apartSchem.findOne({ _id: ApartmentId }).then((apartment) => {
  //     // console.log(apartment?.reviews);
  //     res.status(200).json({
  //       reviews: apartment?.reviews,
  //     });
  //   });
  // },
};
