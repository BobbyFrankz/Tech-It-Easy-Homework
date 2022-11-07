


// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const tvNames =
    inventory.map((tvName) =>{
    return(tvName.name)
})
console.log(tvNames)
//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const tvSoldOut =
    inventory.filter((tvsSoldOut) =>{
    return(tvsSoldOut.sold === tvsSoldOut.originalStock)

})
console.log(tvSoldOut)
console.log()

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const ambiFilter =
    inventory.filter((ambiFilters) =>{
        return ambiFilters.options.ambiLight === true

    });
console.log(ambiFilter)


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
const sortPrice =
    inventory.sort ((a,b) =>{
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price){
            return +1
        }
        return 0;
    })
console.log(sortPrice)

// short version
const priceArange = inventory.sort((a,b) => a.price - b.price)
console.log(priceArange)