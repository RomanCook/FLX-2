class User {
    constructor() {
        this.orderTotalPrice = 3500;
        this.weekendDiscount = 10;
        this.nightDiscount = 10;
        this.bonus = 0;
    }
    makeOrder() {
        return `Price after discount and including bonuses is ${this.orderTotalPrice}.`
    }
}

const user = new User();

const setBonus = user => {
    let bonusCounter = parseInt(user.orderTotalPrice / 100);
    user.bonus += bonusCounter * 5;
    user.orderTotalPrice -= user.bonus;
}

const getDiscount = user => {
    let date = new Date("April 21, 2019 03:24:00");
    let hours = date.getHours();
    let days = date.getDay();
    if (hours < 6 || hours > 23) {
        user.orderTotalPrice -= user.nightDiscount;
    };
    if (days === 6 || days == 0) {
        user.orderTotalPrice -= user.weekendDiscount;
    };
}

getDiscount(user);
setBonus(user);
user.makeOrder();