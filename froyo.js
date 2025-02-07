const userInputFlavors = prompt (
    'Please enter a list of comma-separated Froyo flavors :)'
);
let flavors = userInputFlavors.split(",").map(flavor => flavor.trim().toLowerCase());
let flavorCounts = {};
for (let index in flavors) {
    let flavor = flavors[index];
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }

}
console.log("Froyo Flavor Counts:");
for (let flavor in flavorCounts) {
    console.log(`${flavor}: ${flavorCounts[flavor]}`); }