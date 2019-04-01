let counter = 1;
function xhrRequest (counter) {
	spin(true);
	if (counter === 11) {
		return;
	} else {
	let request = new XMLHttpRequest();
	request.open('GET', `https://jsonplaceholder.typicode.com/users/${counter}`, true);
	request.addEventListener('readystatechange', function() {
 	if ((request.readyState==4) && (request.status==200)) {
 		let json = JSON.parse(request.responseText);
 		createCard(json);
 		counter++;
 		xhrRequest(counter);
	}
	}); 
	request.send();
	}
	spin(false);
}

//users rendering
function createCard (user) {
	spin(true);
	let wrapper = document.getElementById('wrapper');
	let div = document.createElement('div');
	div.className = 'card';
	div.id = `${user.id}`;
	let cardPart1 = document.createElement('div');
	cardPart1.className = 'card-part w20';
	let avatarBlock = document.createElement('div');
	avatarBlock.className = 'card-part-item b-bottom';
	let usernameBlock = document.createElement('div');
	usernameBlock.className = 'card-part-item';
	let avatar = document.createElement('img');
	getCatAvatar(avatar);
	let username = document.createElement('a');
	username.setAttribute('onclick', `getPosts(${user.id})`);
	username.setAttribute('href', `#`);
	username.innerHTML = `${user.username}`;
	let cardPart2 = document.createElement('div');
	cardPart2.className = 'card-part card-border w70';
	let address = document.createElement('div');
	address.className ='card-part-item b-bottom w100';
	let company = document.createElement('div');
	company.className = 'card-part-item w100';
	let addressTitle = document.createElement('h3');
	addressTitle.innerHTML = 'Address: ';
	let companyTitle = document.createElement('h3');
	companyTitle.innerHTML = 'Company: ';
	let addressList = document.createElement('ul');
	let addressItem = document.createElement('li');
	let street = document.createElement('li');
	street.id = `street${user.id}`;
	street.innerHTML = `${user.address.street}`;
	let suite = document.createElement('li');
	suite.id = `suite${user.id}`;
	suite.innerHTML = `${user.address.suite}`;
	let city = document.createElement('li');
	city.id = `city${user.id}`;
	city.innerHTML = `${user.address.city}`;
	let companyName = document.createElement('span');
	companyName.innerHTML = `${user.company.name}`;
	let cardPart3 = document.createElement('div');
	cardPart3.className = 'card-part w10';
	let edit = document.createElement('button');
	edit.className = 'btn';
	edit.id = 'edit-btn';
	edit.setAttribute('onclick', `edit(${user.id})`);
	edit.innerHTML = `Edit`;
	let save = document.createElement('button');
	save.className = 'btn';
	save.id = 'save-btn';
	save.innerHTML = `Save`;
	let del = document.createElement('button');
	del.setAttribute('onclick', 'del(this)');
	del.className = 'btn';
	del.id = 'del-btn';
	del.innerHTML = `Delete`;
	wrapper.appendChild(div);
	div.appendChild(cardPart1);
	cardPart1.appendChild(avatarBlock);
	avatarBlock.appendChild(avatar);
	cardPart1.appendChild(usernameBlock);
	usernameBlock.appendChild(username);
	div.appendChild(cardPart2);
	cardPart2.appendChild(address);
	cardPart2.appendChild(company);
	address.appendChild(addressTitle);
	address.appendChild(addressList);
	addressList.appendChild(street);
	addressList.appendChild(suite);
	addressList.appendChild(city);
	company.appendChild(companyTitle);
	company.appendChild(companyName);	
	div.appendChild(cardPart3);
	cardPart3.appendChild(edit);
	cardPart3.appendChild(save);
	cardPart3.appendChild(del);
	spin(false);
}

//delete user
function del (id) {
	spin(true);
	let item = id.parentNode.parentNode;
	let request = new XMLHttpRequest();
	request.open('DELETE', `https://jsonplaceholder.typicode.com/users/${item.id}`, true);
	item.remove();
	spin(false);
}

//save/edit user
function edit (id) {
	spin(true);
	let userContainer = document.getElementById(id);
	let editBtn = userContainer.querySelector(`.w10 #edit-btn`);
	editBtn.style.display = 'none';
	let saveBtn = userContainer.querySelector(`.w10 #save-btn`);
	saveBtn.style.display = 'block';
	let username = userContainer.querySelector(`a`);
	let usernameInput = document.createElement('input');
	usernameInput.setAttribute('type', 'text');
	usernameInput.setAttribute('value', `${username.innerHTML}`);
	let addrStr = document.querySelector(`#street${id}`);
	let addrStrInput = document.createElement('input');
	addrStrInput.setAttribute('type', 'text');
	addrStrInput.setAttribute('value', `${addrStr.innerHTML}`);
	let addrSuite = userContainer.querySelector(`#suite${id}`);
	let addrSuiteInput = document.createElement('input');
	addrSuiteInput.setAttribute('type', 'text');
	addrSuiteInput.setAttribute('value', `${addrSuite.innerHTML}`);
	let addrCity = userContainer.querySelector(`#city${id}`);
	let addrCityInput = document.createElement('input');
	addrCityInput.setAttribute('type', 'text');
	addrCityInput.setAttribute('value', `${addrCity.innerHTML}`);
	let company = userContainer.querySelector(`span`);
	let companyInput = document.createElement('input');
	companyInput.setAttribute('type', 'text');
	companyInput.setAttribute('value', `${company.innerHTML}`);
	username.style.display = 'none';
	addrStr.style.display = 'none';
	addrSuite.style.display = 'none';
	addrCity.style.display = 'none';
	company.style.display = 'none';
	username.parentNode.appendChild(usernameInput);
	addrStr.parentNode.appendChild(addrStrInput);
	addrSuite.parentNode.appendChild(addrSuiteInput);
	addrCity.parentNode.appendChild(addrCityInput);
	company.parentNode.appendChild(companyInput);

	saveBtn.addEventListener('click', function() {
		editBtn.style.display = 'block';
		saveBtn.style.display = 'none';
		username.innerHTML = usernameInput.value;
		username.removeAttribute('style');
		usernameInput.remove();
		addrStr.innerHTML = addrStrInput.value;
		addrStr.removeAttribute('style');
		addrStrInput.remove();
		addrSuite.innerHTML = addrSuiteInput.value;
		addrSuite.removeAttribute('style');
		addrSuiteInput.remove();
		addrCity.innerHTML = addrCityInput.value;
		addrCity.removeAttribute('style');
		addrCityInput.remove();
		company.innerHTML = companyInput.value;
		company.removeAttribute('style');
		companyInput.remove();
		let userData = {
			'username': username.innerHTML,
			'address': {
				'street': addrStr.innerHTML,
				'suite': addrSuite.innerHTML,
				'city': addrCity.innerHTML,
			},
			'company': {
				'name': company.innerHTML,
			}
		};
		let editedData = JSON.stringify(userData);
		let putRequest = new XMLHttpRequest();
		putRequest.open('PUT', `https://jsonplaceholder.typicode.com/users/${id}`, true);
		putRequest.addEventListener('readystatechange', function() {
 		if ((putRequest.readyState==4) && (putRequest.status==200)) {
 			let jsonUser = JSON.parse(putRequest.responseText);
 			console.log(`Edited data was send.`);
 		}
 		}); 
	putRequest.send(editedData);
	});
	spin(false);
}

//cat avatars
function getCatAvatar (avatar) {
	spin(true);
	let request = new XMLHttpRequest();
	request.open('GET', `https://api.thecatapi.com/v1/images/search`, true);
	request.addEventListener('readystatechange', function() {
 	if ((request.readyState==4) && (request.status==200)) {
 		let avatarURL = JSON.parse(request.responseText)[0].url;
 		avatar.setAttribute('src', `${avatarURL}`);
	}
	}); 
	request.send();
	spin(false);
}

//get posts
function getPosts(id) {
	spin(true);
	let posts = new XMLHttpRequest();
	posts.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`, true);
	posts.addEventListener('readystatechange', function() {
 	if ((posts.readyState==4) && (posts.status==200)) {
 		let content = JSON.parse(posts.responseText);
 		renderingPosts(content);
 		}
	}); 
	posts.send();
	spin(false);
}
function renderingPosts (obj) {
	spin(true);
	location.hash = `/posts/${obj[0].userId}`;
	let wrapper = document.getElementById('wrapper');
	wrapper.style.display = 'none';
	let postBlock = document.getElementById('posts');
	postBlock.style.display = 'block';
	let backBtn = document.createElement('button');
	backBtn.className = 'btn';
	backBtn.id = 'back-btn';
	backBtn.innerHTML = `Back`;
	backBtn.setAttribute('onclick', `back()`);
	postBlock.appendChild(backBtn);
	for (let item of obj) {
	getComments(item.id)
	let postsHtml = `<div class="post-container" id ='postId${item.id}'><div class="post-container-text">
  	<h2>${item.title}</h2><hr>
  	<p>${item.body}</p><hr>
  </div>
  <div class="post-comments"></div>
  </div>`;
 		postBlock.innerHTML += postsHtml;
	}
	postBlock.appendChild(backBtn);
	spin(false);
}


//get comments
function getComments(id) {
	spin(true);
	let comments = new XMLHttpRequest();
	comments.open('GET', `https://jsonplaceholder.typicode.com/comments?postId=${id}`, true);
	comments.addEventListener('readystatechange', function() {
 	if ((comments.readyState==4) && (comments.status==200)) {
 		let content = JSON.parse(comments.responseText);
 		renderingComments(content);
 		}
	}); 
	comments.send();
	spin(false);
}
function renderingComments (obj) {
	spin(true);
	let commentsContainer = document.querySelector(`#postId${obj[0].postId} .post-comments`);
	for (let item of obj) {
	let commentText = document.createElement('p');
	commentText.innerHTML = `<strong>${item.email}</strong>: ${item.body}.`;
 	commentsContainer.appendChild(commentText);
	}
	spin(false);
}

//history back
function back () {
	spin(true);
	history.back();
	let postBlock = document.getElementById('posts');
	postBlock.innerHTML = '';
	postBlock.removeAttribute('style');
	let wrapper = document.getElementById('wrapper');
	wrapper.removeAttribute('style');
	spin(false);
}

//spinner
function spin(bool) {
let spinner = document.getElementsByClassName('loader')[0];
 if(bool) {
  spinner.style.display = 'block';
 } else {
   spinner.style.display = 'none';
 }
}
window.onload = xhrRequest(counter);