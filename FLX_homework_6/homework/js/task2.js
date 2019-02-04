var price = prompt('input price', 0);
var discount = prompt('input discount %', 0);
if (isNaN(price) || isNaN(discount) || price>9999999 || discount>99 || price<0 
	|| discount<0 || price==="" || discount==="") {
		alert('Invalid input data') 
} else {
	var priceLess = price - (price * (discount/100));
	var saved = price - priceLess;
	price = Math.floor(price*100)/100;
	discount = Math.floor(discount*100)/100;
	saved = Math.floor(saved*100)/100;
	priceLess = Math.floor(priceLess*100)/100;
	alert('Price without discount: ' +price+ 
		';\nDiscount: ' +discount+ 
		'%;\nPrice with discount: ' +priceLess+ 
		';\nSaved: ' +saved)
}
