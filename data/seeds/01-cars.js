// STRETCH
const cars = [
  {
    vin: "111",
    make: "Tesla",
    model: "Model S",
    mileage: 123,
    title: "clean",
    transmission: "automatic",
  },
  {
    vin: "222",
    make: "Tesla",
    model: "Model 3",
    mileage: 456,
    title: "used",
  },
  {
    vin: "333",
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
