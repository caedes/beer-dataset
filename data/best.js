const { prop, sortBy, uniqBy } = require("ramda");

const sortById = sortBy(prop("id"));
const uniqById = uniqBy(prop("id"));
const randomInterval = (min, max) => Math.random() * (max - min) + min;

const beers = require("../beer-database/best.json");

const beersWithPrices = beers.map((beer) => ({
  id: beer.id,
  name: beer.name,
  description: String(beer.description).substr(0, 120),
  categoryId: beer.style.categoryId,
  imageUri: beer.labels.large,
  price: randomInterval(2, 8).toFixed(2),
}));

const categories = beers.map((beer) => ({
  id: beer.style.categoryId,
  name: beer.style.category.name,
}));
const sortedUniqCategories = sortById(uniqById(categories));

module.exports = () => ({
  beers: beersWithPrices,
  categories: sortedUniqCategories,
});
