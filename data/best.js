const { prop, sortBy, uniqBy } = require("ramda");

const sortById = sortBy(prop("id"));
const uniqById = uniqBy(prop("id"));
const randomInterval = (min, max) => Math.random() * (max - min) + min;

const beers = require("../beer-database/best.json");

const beersWithPrices = beers.map((beer) => ({
  ...beer,
  price: randomInterval(2, 8).toFixed(2),
}));

const categories = beers.map((beer) => beer.style.category);
const sortedUniqCategories = sortById(uniqById(categories));

module.exports = () => ({
  beers: beersWithPrices,
  categories: sortedUniqCategories,
});
