const formCurrency = document.querySelector("#formCurrency");
formCurrency.addEventListener("submit", creatObject);

let objectCurrency = {};

function creatObject(e) {
    let elems = document.querySelectorAll(".currency");
    elems.forEach(item => {
        objectCurrency.item.name = item.name;
    })
    console.log(objectCurrency);

    e.preventDefault();
}

function CurrencyConstructor (value, )