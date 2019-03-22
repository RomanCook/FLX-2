function Company (name, owner, maxCount) {
	this.name = name;
	this.owner = owner;
	this.maxCount = maxCount;
	this._createDate = getDate();
	let uno = 1;
	let sotka = 100;
	let companyHistoryLog =`${this.name} was created in ${this._createDate}.\n`;
	function getDate () {
		let date = new Date();
		return date;
	}
	let _employeeList = [];
	this.employeeList = _employeeList;
	let _salaryArr = [];
	this.addNewEmployee = function (employeeName) {
		if (employeeName instanceof Employee) {
		if (_employeeList.length<maxCount) {
		_employeeList.push(employeeName);
		_salaryArr.push(employeeName.salary);
		employeeName.startDate = getDate();
		employeeName.hire(this);
		companyHistoryLog+= `${employeeName.name} starts working at ${this.name} in ${employeeName.startDate}.\n`;
		} else {
			let minSalary = Math.min.apply(null, _salaryArr);
			let minSalaryId = _salaryArr.indexOf(minSalary);
			this.removeEmployee(minSalaryId);
			_employeeList.push(employeeName);
			_salaryArr.push(employeeName.salary);
			employeeName.startDate = getDate();
			employeeName.hire(this);
			companyHistoryLog+= `${employeeName.name} starts working at ${this.name} in ${employeeName.startDate}.\n`;
			}
		} else {
			return `Please try to add Employee instance`
			}
		}
	this.removeEmployee = function (id) {
		if (Number.isFinite(id)) {
		let firedEmployee = _employeeList[id];
		_employeeList[id].fire(this);
		companyHistoryLog+= `${firedEmployee.name} ends working at ${this.name} in ${getDate()}\n`;
		let removed = _employeeList.splice(id, uno);
		} else {
			return `Please try to add id of employee.`
		}
	}
	this.getAvarageSalary = function () {
		let totalSalary = 0;
		this.employeeList.forEach((el) => {
			totalSalary+=el.salary;
		})
		let avarageSalary = totalSalary / _employeeList.length;
		return Math.round(avarageSalary*sotka)/sotka;
	}
	this.getAvarageAge = function () {
		let totalAge = 0;
		this.employeeList.forEach((el) => {
			totalAge+=el.age;
		})
		let avarageAge = totalAge / _employeeList.length;
		return Math.round(avarageAge*sotka)/sotka;
	}
	this.getEmployees = function () {
		let employeeNameList = [];
		this.employeeList.forEach((el) => {
			employeeNameList.push(el.name);
		})
		return employeeNameList;
	}

	this.getFormattedListOfEmployees = function () {
		let formattedList = ``;
		this.employeeList.forEach((el) => {
			formattedList+= `${el.name} works in ${this.name} ${el.getWorkTimeInSeconds()} seconds.\n`;
		});
		return formattedList;
	}
	this.getHistory = function () {
		return companyHistoryLog;
	}
}
function Employee (name, age, salary, primarySkill) {
	this.name = name;
	this.age = age;
	this.salary = salary;
	this.primarySkill = primarySkill;
	let employeeHistoryLog = ``;
	this.getWorkTimeInSeconds = function () {
		let thousand = 1000;
		if(this.startDate) {
			return Math.floor((getDate().getTime() - this.startDate.getTime())/thousand);
		} else {
			return `${this.name} is not working.`
		}
	}
	function getDate () {
		let date = new Date();
		return date;
	}
	this.hire = function (companyName) {
		this.company = companyName.name;
		employeeHistoryLog += `${name} is hired to ${companyName.name} in ${this.startDate}. \n`;
	}
	this.fire = function (companyName) {
		employeeHistoryLog += `${name} is fired from ${companyName.name} in ${getDate()}. \n`;
		delete this.company;
		delete this.startDate;
	}
	this.getHistory = function () {
		return employeeHistoryLog;
	}
	this.getSalary = function () {
		return this.salary;
	}
	this.setSalary = function (newSalary) {
		if (newSalary>this.salary && !isNaN(newSalary)) {
			employeeHistoryLog += `change salary from ${this.salary} to ${newSalary}.\n`;
			this.salary = newSalary;
		} else if (newSalary<this.salary && !isNaN(newSalary)) {
			employeeHistoryLog += `try to change salary from ${this.salary} to ${newSalary}.\n`;
			return `You cant change the salary to lower salary.`
		} else {
			return `You cant change the salary.`
		}
	}
}
// let artem = new Employee('Artem', 25, 3001.1221, 'BE');
// let ivan = new Employee('Ivan', 21, 1200.1234, 'FE');
// let igor = new Employee('igor', 27, 507.23, 'BE');
// let kolya = new Employee('kolya', 22, 300, 'BE/FE');
// let mark = new Employee('mark', 22, 700, 'BE/FE');
// let epam = new Company('Epam', 'Valerii', 4);
// epam.addNewEmployee(artem);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(igor);
// epam.addNewEmployee(kolya);
// epam.addNewEmployee(5, 6, 9, 5);
// epam.addNewEmployee(mark);
// epam.getAvarageSalary();
// epam.getAvarageAge();
// epam.getHistory();
// epam.addNewEmployee(mark);
// artem.getWorkTimeInSeconds();
// epam.getFormattedListOfEmployees();
// igor.setSalary(900);
// igor.setSalary(2200);
// igor.getHistory();
// epam.removeEmployee(0);
// artem.getHistory();
// epam.getHistory();
