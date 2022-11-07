// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één
// tv en deze teruggeeft in het format [merk] [type] - [naam]
// zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
//
function returnInfo(tv) {
    return `${tv.brand}, ${tv.type}, ${tv.name}`;

}

console.log(returnInfo(inventory[0]));


//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//
function returnTvPrice(tv) {
    return `€${tv.price},`;

}

console.log(returnTvPrice(inventory[0]));

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv
// . De functie geeft dit terug in het format
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft
// ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren
// uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
function getSize(tv) {
    let container = ""
    const screenSize = tv.availableSizes;
    for (let i = 0; i < screenSize.length; i++) {
        const inch = screenSize[i];
        const centiMeter = screenSize[i] * 2.54;
        container = `${container} ${inch} inch (${centiMeter}) cm | `;

    }
    return container
}

console.log(getSize(inventory[0]))


//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina
//     zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//


//     Philips 43PUS6504/12 - 4K TV
//     €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

function printDetails(tv) {
    const selectedTV = document.createDocumentFragment()

// name
    const tableRowElementName = document.createElement('tr');
    tableRowElementName.textContent = returnInfo(tv);
    selectedTV.appendChild(tableRowElementName);
    const containerName = document.getElementById('selected-tv-info');
    containerName.appendChild(selectedTV);
//price
    const tableRowElementPrice = document.createElement('tr');
    tableRowElementPrice.textContent = returnTvPrice(tv);
    selectedTV.appendChild(tableRowElementPrice);
    const containerPrice = document.getElementById('selected-tv-info');
    containerPrice.appendChild(selectedTV);
//size
    const tableRowElementSize = document.createElement('tr');
    tableRowElementSize.textContent = getSize(tv);
    selectedTV.appendChild(tableRowElementSize);
    const containerSize = document.getElementById('selected-tv-info');
    containerSize.appendChild(selectedTV);


}

printDetails(inventory[0])


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina.
// Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in////
// opdrach// t 4a, 4b en 4c.

function printAllDetails(Arrays) {
const allDetails = Arrays.map((Array) =>  {
    return returnInfo(Array) + " " + returnTvPrice(Array) + getSize(Array) ;

});
const allInfo = document.createDocumentFragment();
for (let allDetail of allDetails) {
    const li = document.createElement('li')
    li.textContent = allDetail;
    allInfo.appendChild(li);
}
    const container = document.getElementById("tv-info");
    container.append(allInfo);

}


printAllDetails(inventory);





















