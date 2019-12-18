/**
 * affiche le titre
 */
$.ajax({
	url : "http://localhost:8080/dc/title"
}).then(function(data) {
	document.getElementById("title").textContent = data;
});

/**
 * affiche la liste des ligues
 */
var list = [];
$.ajax({
	url : "http://localhost:8080/dc/leagues"
}).then(function(data) {
	list = data;
	loadList();
});

addLeague();

/**
 * afficher le nom des ligues et leur nombre de membres
 */
function loadList() {
	list.forEach(function(league) {
		var newLoadNom = document.createElement('li');
		newLoadNom.className = "list-group-item d-flex justify-content-between align-items-center";
		newLoadNom.innerText = league["nom"];
		document.getElementById("list-group").appendChild(newLoadNom);

		var newLoadNbMembre = document.createElement('button');
		newLoadNbMembre.className = "badge badge-primary badge-pill";
		newLoadNbMembre.innerText = "Nombre de membres : " + league["nbMembre"];

		/**
		 * creation d'un evenement qui vide l'element puis qui appelle
		 * la fonction loadLeague pour remplir celui-ci
		 */
		newLoadNbMembre.addEventListener('click', function(event) {
			document.getElementById("card").innerHTML = "";
			loadLeague(league);
		});

		newLoadNom.appendChild(newLoadNbMembre);
		document.getElementById("list-group").appendChild(newLoadNom);
	});
}

/**
 * permet d'afficher les attributs de la ligue choisie 
 * puis donne la possibilite de les changer ou de supprimer la ligue
 * suite à l'appel des fonctions createForm et deleteLeague
 * @param {*} league
 */
function loadLeague(league) {
	
	deleteLeague(league);

	var cardTitle = document.createElement('h5');
	cardTitle.className = "card-title";
	cardTitle.innerText = league["nom"];
	document.getElementById("card").appendChild(cardTitle);

	var cardImg = document.createElement('img');
	document.getElementById("card").appendChild(cardImg);
	document.getElementById("card").lastChild
			.setAttribute('src', league["url"]);

	var cardDetail = document.createElement('p');
	cardDetail.className = "card-text";

	league["membres"] = league["membres"].replace(/,/gi, "\n");
	cardDetail.innerText = "Liste des membres\n" + league["membres"];
	document.getElementById("card").appendChild(cardDetail);

	var updt = document.createElement('a');
	updt.setAttribute('type', "button");
	updt.setAttribute('id', "update");
	updt.setAttribute('class', "material-icons");
	updt.setAttribute('title', "Modifiez cette ligue");
	updt.innerText= "edit";
	document.getElementById("card").appendChild(updt);

	/**
	 * creation d'un evenement qui appelle
	 * la fonction createForm
	 */
	updt.addEventListener('click', function(event) {
		createForm(league);
	});
	
	var cardSearch = document.createElement('a');
	cardSearch.setAttribute('href', "http://localhost:8080/dc/league?id=" + league["id"]);
	cardSearch.setAttribute('target', "_blank");
	cardSearch.className = "btn btn-primary";
	cardSearch.innerText = "Accédez aux informations";
	document.getElementById("card").appendChild(cardSearch);
}

/**
 * creation d'un formulaire pour modifier les elements d'une ligue
 * avec la fonction updateLeague
 * @param {*} league
 */
function createForm(league) {

	var form = document.createElement("form");

	var inputName = document.createElement("input");
	inputName.setAttribute('type', "text");
	inputName.setAttribute('id', "up-nom");
	inputName.setAttribute('value', league["nom"]);

	var inputNbMember = document.createElement("input");
	inputNbMember.setAttribute('type', "int");
	inputNbMember.setAttribute('id', "up-nbMembre");
	inputNbMember.setAttribute('value', league["nbMembre"]);

	var inputMember = document.createElement("input");
	inputMember.setAttribute('type', "text");
	inputMember.setAttribute('id', "up-membres");
	inputMember.setAttribute('value', league["membres"]);

	var inputUrl = document.createElement("input");
	inputUrl.setAttribute('type', "text");
	inputUrl.setAttribute('id', "up-url");
	inputUrl.setAttribute('value', league["url"]);

	var submit = document.createElement("input");
	submit.setAttribute('type', "submit");
	submit.setAttribute('id', "sub");
	submit.setAttribute('value', "Modifiez");

	form.appendChild(inputName),form.appendChild(inputNbMember), 
	form.appendChild(inputMember),form.appendChild(inputUrl), form.appendChild(submit);
	document.getElementById("card").appendChild(form);

	updateLeague(league);
}

/**
 * permet de modifier les elements d'une ligue
 * @param {*} league
 */
function updateLeague(league) {

	var update = document.getElementById("sub");
	update.addEventListener("click", function (event){

		$.post("http://localhost:8080/dc/updateLeague", {
			id: league["id"],
			nom: document.getElementById("up-nom").value,
			nbMembre: document.getElementById("up-nbMembre").value,
			membres: document.getElementById("up-membres").value,
			url: document.getElementById("up-url").value,
		});
		document.location.reload(true);
	});
}

/**
 * permet la creation d'une ligue
 */
function addLeague() {

	var add = document.getElementById("button");
	add.addEventListener("click", function (event) {
		
		$.post("http://localhost:8080/dc/newLeague", {
			nom: document.getElementById("add-nom").value,
			nbMembre: document.getElementById("add-nbMembre").value,
			membres: document.getElementById("add-membres").value,
			url: document.getElementById("add-url").value,
		});
		document.location.reload(true);
	});
}

/**
 * permet la suppression d'une ligue
 * @param {*} League 
 */
function deleteLeague(league){
 
	var dlt = document.createElement('a');
	dlt.setAttribute('type', "button");
	dlt.setAttribute('id', "delete");
	dlt.setAttribute('class', "material-icons");
	dlt.setAttribute('title', "Supprimer cette ligue");
	dlt.innerText= "delete_forever";
	document.getElementById("card").appendChild(dlt);

	var remove = document.getElementById("delete");
	remove.addEventListener("click", function (event){

		$.post("http://localhost:8080/dc/deleteLeague", {
			id: league["id"],
		});
		document.location.reload(true);
	});
}