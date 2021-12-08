// STRETCH
const cars = [
  {
    vin: "5YJSA1H20FFP78357",
    make: "Tesla",
    model: "Model S",
    mileage: 123,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "5YJSA1E22FF106191",
    make: "Tesla",
    model: "Model 3",
    mileage: 456,
    title: "used",
  },
  {
    vin: "5YJRE11B081000394",
    make: "Tesla",
    model: "Model X",
    mileage: 789,
  },
];

// exports.seed = function (knex) {
//   return knex("cars")
//     .truncate()
//     .then(() => {
//       return knex("cars").insert(cars);
//     });
// };

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
