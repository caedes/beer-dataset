const { prop, sortBy, uniqBy } = require("ramda");

const beers = require("../beer-database/best.json");

const categories = sortBy(
  prop("id"),
  uniqBy(
    prop("id"),
    beers.map((beer) => beer.style.category)
  )
);

module.exports = () => ({
  beers,
  categories,
});
