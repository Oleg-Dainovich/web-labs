// function Food(foodId, weight, price) {
//     this._foodId = foodId;
//     this._weight = weight;
//     this._price = price;
//     this._availability = true;
// }

// Food.prototype.foodInfo = function () {
//     alert('Id продукта: ' + this._foodId + '. Стоимость: ' + this._price);
// };

// Food.prototype.buyFood = function () {
//     if (this._availability) {
//         alert(`Корм ${this._foodId} успешно добавлен в корзину.`);
//         this._availability = false;
//     } else {
//         alert(`Корм ${this._foodId} отсутствует на складе.`);
//     }
// };

// Food.prototype.calculateTotalCost = function (count) {
//     return this._price * count;
// };

// Food.prototype.getAvailability = function () {
//     return this._availability;
// };

// function CatFood(foodId, weight, price, specialVitamins, paidStuff) {
//     Food.call(this, foodId, weight, price);
//     this._specialVitamins = specialVitamins;
//     this._paidStuff = paidStuff;
// }

// CatFood.prototype = Object.create(Food.prototype);

// CatFood.prototype.requestAddVitamins = function () {
//     console.log("Добавление витаминов запрошено.");
// };

// CatFood.prototype.checkPaidStuff = function (payMore) {
//     if (payMore > 450) {
//         this._paidStuff += payMore;
//     } else {
//         alert('Не соответствует критериям');
//         return null;
//     }
//     return payMore;
// };

// CatFood.prototype.addTaxes = function () {
//     if (this._specialVitamins) {
//         alert("Дополнительный налог в размере " + this._price * 0.12);
//     } else {
//         alert('Налогообложение отсутсвует!');
//     }
// };

class Food {
    constructor(foodId, weight, price) {
        this._foodId = foodId;
        this._weight = weight;
        this._price = price;
        this._availability = true;
    }

    foodInfo() {
        alert('Id продукта: ' + this._foodId + '. Стоимость: ' + this._price);
    }

    set foodId(newFoodId) {
        this._foodId = newFoodId;
    }

    get foodId() {
        return this._foodId;
    }

    set price(newprice) {
        this._price = newprice;
    }

    get price() {
        return this._price;
    }

    buyFood() {
        if (this.availability) {
            alert(`Корм ${this._foodId} успешно добавлен в корзину.`);
            this._availability = false;
        } else {
            alert(`Корм ${this._foodId} отсутствует на складе.`);
        }
    }

    get availability() {
        return this._availability;
    }

    calculateTotalCost(count) {
        return this._price * count;
    }
}

class CatFood extends Food {
    constructor(foodId, weight, price, specialVitamins, paidStuff) {
        super(foodId, weight, price);
        this._specialVitamins = specialVitamins;
        this._paidStuff = paidStuff;
    }

    requestAddVitamins() {
        console.log("Добавление витаминов запрошено.");
    }

    set specialVitamins(newSpecialVitamins) {
        this._specialVitamins = newSpecialVitamins;
    }

    get specialVitamins() {
        return this._specialVitamins;
    }

    set paidStuff(newPaidStuff) {
        this._paidStuff = newPaidStuff;
    }

    get paidStuff() {
        return this._paidStuff;
    }

    checkPaidStuff(payMore) {
        if (payMore > 450) {
            this._paidStuff += payMore;
        } else {
            alert('Не соответствует критериям');
            return null;
        }
        return payMore;
    }

    addTaxes() {
        if (this._specialVitamins) {
            alert("Дополнительный налог в размере " + this._price * 0.12);
        } else {
            alert('Налогообложение отсутсвует')
        }
    }

}

function extraAdditions(f) {
    return function (...args) {
        const payment = f.apply(this, arguments);
        console.log("kokoko " + payment);
        if (payment >= 900) {
            window.alert("Корм с повышенной стоимостью");
        } else {
            window.alert("Стандартный корм");
        }
        return payment;
    }
}

Food.prototype.calculateTotalCost = extraAdditions(Food.prototype.calculateTotalCost);
let food = new CatFood(113, 2, 500, true, 125);

food.requestAddVitamins();
food.calculateTotalCost(2);
food.addTaxes();


function htmlPrint() {
    let output = document.getElementById('output');
    output.innerHTML = '<h3>Class stuff:</h3>';
    output.innerHTML += `<p>${food.paidStuff} <br> Additional vitamins: ${food.specialVitamins} <br> Food Id: ${food.foodId}</p>`;
}
