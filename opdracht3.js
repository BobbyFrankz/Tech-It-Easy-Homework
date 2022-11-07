// Opdracht 3 - Array methoden en functies

// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst
// op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const tvBrands = inventory.map((tvBrand) => {
    return tvBrand.brand;
})
const listOfBrands = document.createDocumentFragment();
for (let tvBrand of tvBrands) {
    const li = document.createElement('li')
    li.textContent = tvBrand;
    listOfBrands.appendChild(li);
}
const container = document.getElementById('list-of-brands-inventory');
container.appendChild(listOfBrands);


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// Tip: vergeet deze functie -declaratie niet aan te roepen!

function allBrands(Array) {
    const tvBrands = Array.map((Array) => {
        return Array.brand;
    });
    const listOfBrands = document.createDocumentFragment();
    for (let tvBrand of tvBrands) {
        const li = document.createElement('li')
        li.textContent = tvBrand;
        listOfBrands.appendChild(li);
    }
    const container = document.getElementById('list-of-brands-array');
    container.appendChild(listOfBrands);
}
allBrands(inventory)


