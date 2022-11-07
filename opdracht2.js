// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string,
// gebruik je hier gewoon een oude vertrouwde for-loop voor!
//



// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf
// een script dat dit berekent. Log de uitkomst in de console.
let soldTVS = 0;
inventory.forEach(element => {
    soldTVS += element.sold;

});
console.log(soldTVS);


// Opdracht 2b: Zorg ervoor dat dit aantal
// in het groen wordt weergegeven op de pagina.
const totalSoldTvs = document.createElement('p')
totalSoldTvs.textContent = soldTVS;
totalSoldTvs.style.color = "green";

const totalSold = document.getElementById('tv-sold');
totalSold.appendChild(totalSoldTvs);





// Opdracht 2c: Hoeveel tv's heeft Tech It Easy
let restTv = 0;
inventory.forEach(element => {
    restTv += element.originalStock;

})
console.log(restTv)


// ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

const restTvs = document.createElement('p')
restTvs.textContent = restTv;
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
restTvs.style.color = "blue";

const resterTv = document.getElementById("rest-tvs");
resterTv.appendChild(restTvs);


// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
function tvsToBeSold() {
    return restTv - soldTVS;
}
console.log(tvsToBeSold())


const tvToSell = document.createElement('p')
tvToSell.textContent = tvsToBeSold()
tvToSell.style.color = 'red';

const tvSell = document.getElementById("tvs-to-be-sold");
tvSell.appendChild(tvToSell);
//test
