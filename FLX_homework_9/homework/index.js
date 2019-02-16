const data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];
//task1
function findTypes () {
	let argType = [];
	for (let i=0; i < arguments.length; i++) {
		argType.push(typeof(arguments[i]));
		} 
	return argType;
}
//task2
function executeforEach (arr, func) {
	for (let i=0; i < arr.length; i++) {
		func(arr[i]);
	}
}
//task3
function mapArray (arr, func) {
	var modifArr = [];
	executeforEach(arr, el=> {
		modifArr.push(func(el));
		});
	return modifArr;
}
//task4
function filterArray (arr, func) {
	let filterArr = [];
	executeforEach(arr, el => {
		if (func(el)) {
			filterArr.push(el);
		}
	});
	return filterArr;
}
//task5
function getAmountOfAdultPeople(userData) {
  return filterArray(userData, el => {
	return el.age > 18
  }
  ).length;
}
//task6
function getGreenAdultBananaLovers (userData) {
	let filter = filterArray (userData, person => {
		if (person.age>18 && 
			person.favoriteFruit==='banana' && 
			person.eyeColor==='green') {
			return person;
		}
	});
	return mapArray(filter, person => {
		return person.name
	})
}
//task7
function keys (obj) {
	let keysArr = [];
	for (let prop in obj) {
		keysArr.push(prop);
		}
	return keysArr;
}
//task8
function values (obj) {
	let valuesArr = [];
	for (let val in obj) {
		valuesArr.push(obj[val]);
		}
	return valuesArr;
}
//task9
function showFormattedDate (date) {
	var option = {month: 'short'}; 
	return 'Date: ' +date.getDate()+ ' of ' +date.toLocaleString("en-US", option)+ ', ' +date.getFullYear();
}
//task10
function isEvenYear (date) {
	return (date.getFullYear()%2===0);
}
//task11
function isEvenMonth (date) {
	return ((date.getMonth()+1)%2===0);
}
//
//
//
findTypes(3, 'text', true, null);
executeforEach([1,2,3], function(el) {
 console.log(el) 
}); 
mapArray([2, 5, 8], function(el) {
 return el + 3 
}); 
filterArray([2, 5, 8], function(el) {
 return el > 3 
}); 
getAmountOfAdultPeople(data);
getGreenAdultBananaLovers(data); 
keys({keyOne: 1, keyTwo: 2, keyThree: 3});
values({keyOne: 1, keyTwo: 2, keyThree: 3});
showFormattedDate(new Date('2019-01-27T01:10:00'));
isEvenYear(new Date('2019-01-27T01:10:00'));
isEvenMonth(new Date('2019-02-27T01:10:00'));