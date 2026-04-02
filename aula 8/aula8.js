//! FOR

for (let i = 0; i < 5; i++) {
    console.log(i)
}

for (let i = 0; i <= 5; i+=1) // ou i++ 
{
    console.log(i + " segundo for")
} 

//! WHILE

let horas = 11
while (horas < 12) {
    console.log("Bom dia")
    horas ++
}

//! DO WHILE


do {
    console.log("Bom dia")
    horas = horas + 1
} while (horas < 12)

do {
    console.log("Bom dia")
    horas ++
    // horas += 1
    // horas horas + 1

} while (horas < 12);


//! forEach


let horasArr = [11,12,13]
forEach((element) => console.log(element))