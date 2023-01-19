const express = require("express");
const router = express.Router();

const {
  CreateApartment,
  GetMyApartments,
  ApartmentById,
  GetAllApartments,
  NewReview,
  AllReviews,
} = require("../controllers/apartmentController");

router.post("/newApartment", CreateApartment);
router.post("/myapartments", GetMyApartments);
router.get("/allapartments", GetAllApartments);
router.post("/insertreview", NewReview);
router.post("/singleApartment", ApartmentById);
router.post("/all_reviews", AllReviews);

// router.post("/reviews_sum", ReviewSum);

module.exports = router;
