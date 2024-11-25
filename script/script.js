const nabidka = ["CPU", "GPU", "RAM"];
const kosik = [];

function vypis(array, output) {
    document.getElementById(output).innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        document.getElementById(output).innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

console.log(nabidka);

function Add() {
    const input = document.getElementById("add-component");
    const index = +input.value - 1; // Převod na index pole (0-založené)

    if (index >= 0 && index < nabidka.length && !isNaN(index)) {
        kosik.push(nabidka[index]); // Přidání do košíku
        nabidka.splice(index, 1); // Odstranění z nabídky
    } else {
        alert("Chyba: Zadejte platnou pozici.");
    }
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
    updateKosikOption();
}

function updateKosikOption() {
    const select = document.getElementById("kosik-nabidka");

    // Vyčištění existujících možností
    select.innerHTML = "";

    // Přidání nových možností podle obsahu košíku
    for (let i = 0; i < kosik.length; i++) {
        let option = document.createElement("option");
        option.value = i + 1;
        option.text = kosik[i];
        select.appendChild(option);
    }
}

function Remove() {
    const input = document.getElementById("add-component");
    const index = +input.value - 1; // Převod na index pole (0-založené)

    if (index >= 0 && index < kosik.length && !isNaN(index)) {
        const item = kosik.splice(index, 1)[0]; // Odstranění z košíku a vrácení položky
        nabidka.push(item); // Přidání zpět do nabídky
    } else {
        alert("Chyba: Zadejte platnou pozici.");
    }
    vypis(kosik, "user-cart");
    vypis(nabidka, "content");
    updateKosikOption();
}



/*function Remove_All() {
    kosik.length = 0; // Vyprázdnění pole košíku
    vypis(kosik, "user-cart");
}**/
