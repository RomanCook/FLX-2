class User {
    constructor(
        orderTotalPrice,
        weekendDiscount,
        nightDiscount,
        bonus) {
        this.orderTotalPrice = orderTotalPrice || 3500;
        this.weekendDiscount = weekendDiscount || 10;
        this.nightDiscount = nightDiscount || 10;
        this.bonus = bonus || null;
    }
    makeOrder() {
        return `Price after discount and including bonuses is ${this.orderTotalPrice}.`
    }
}

const setBonus = user => {
    let bonusCounter = parseInt(user.orderTotalPrice / 100);
    user.bonus += bonusCounter * 5;
    user.orderTotalPrice -= user.bonus;
}

const getDiscount = user => {
    let date = new Date();
    let hours = date.getHours();
    let days = date.getDay();
    if (hours < 6 || hours > 23) {
        user.orderTotalPrice -= user.nightDiscount;
    };
    if (days === 6 || days == 0) {
        user.orderTotalPrice -= user.weekendDiscount;
    };
}

const user = new User(1000);

getDiscount(user);
setBonus(user);
user.makeOrder();