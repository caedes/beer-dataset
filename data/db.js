let beers = [];

console.log("Loading all beers…");
for (let i = 1; i <= 603; i += 1) {
  const someBeers = require(`../beer-database/beer_${i}.json`);
  beers = [...beers, ...someBeers.data];
}
console.log("Beers API ready!");

module.exports = () => ({
  beers,
});
