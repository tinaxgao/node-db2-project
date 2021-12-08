const express = require("express");
const Cars = require("./cars-model");
const {
  checkCarId,
checkCarPayload,
checkVinNumberUnique,
checkVinNumberValid
} = require("./cars-middleware");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await Cars.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {

    res.json(req.car);

});

router.post("/", checkCarPayload,
checkVinNumberValid,
checkVinNumberUnique,
 async (req, res, next) => {
  res.json("posting new car");
});

module.exports = router;
