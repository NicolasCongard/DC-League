$.ajax({
	url : "http://localhost:8080/dc/title"
}).then(function(data) {
	document.getElementById("title").textContent = data;
});

var list = [];
$.ajax({
	url : "http://localhost:8080/dc/leagues"
}).then(function(data) {
	list = data;
	loadList();
});

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
		 * la fonction loadLeague() pour remplir celui-ci
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
 * creation d'un nouvel element qui affiche les attributs de l'objet choisi 
 * @param {*} league
 */
function loadLeague(league) {
	
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
	
	var cardSearch = document.createElement('a');
	cardSearch.className = "btn btn-primary";
	cardSearch.setAttribute('href', "http://localhost:8080/dc/league?id=" + league["id"])
	cardSearch.setAttribute('target', "_blank");
	cardSearch.innerText = "Accédez aux informations"
	document.getElementById("card").appendChild(cardSearch);
	
	updateLeague(league);
	deleteLeague(league);
}

/**
 * permet de modifier les elements
 * @param {*} league
 */
function updateLeague(league) {

	var form = document.createElement("form");
	form.setAttribute('method', "get");
	form.setAttribute('action', "http://localhost:8080/dc/updateLeague");
	form.setAttribute('target', "_blank");
	
	var inputId = document.createElement("input");
	inputId.setAttribute('type', "hidden");
	inputId.setAttribute('name', "id")
	inputId.setAttribute('value', league["id"]);
	
	var inputName = document.createElement("input");
	inputName.setAttribute('type', "text");
	inputName.setAttribute('name', "nom");
	inputName.setAttribute('value', league["nom"]);

	var inputNbMember = document.createElement("input");
	inputNbMember.setAttribute('type', "int");
	inputNbMember.setAttribute('name', "nbMembre");
	inputNbMember.setAttribute('value', league["nbMembre"]);

	var inputMember = document.createElement("input");
	inputMember.setAttribute('type', "text");
	inputMember.setAttribute('name', "membres");
	inputMember.setAttribute('value', league["membres"]);

	var inputUrl = document.createElement("input");
	inputUrl.setAttribute('type', "text");
	inputUrl.setAttribute('name', "url");
	inputUrl.setAttribute('value', league["url"]);

	var submit = document.createElement("input");
	submit.setAttribute('type', "submit");
	submit.setAttribute('id', "sub");
	submit.setAttribute('value', "Modifiez");

	form.appendChild(inputId),form.appendChild(inputName),form.appendChild(inputNbMember), 
	form.appendChild(inputMember),form.appendChild(inputUrl), form.appendChild(submit);
	document.getElementById("card").appendChild(form);
}

/**
 * permet la suppression d'un objet
 * @param {*} League 
 */
function deleteLeague(league){
 
	var dlt = document.createElement('a');
	dlt.setAttribute('type', "button");
	dlt.setAttribute('class', "material-icons");
	dlt.setAttribute('href', "http://localhost:8080/dc/deleteLeague?id=" + league["id"])
	dlt.setAttribute('title', "Supprimer cette ligue");
	dlt.setAttribute('target', "_blank");
	dlt.innerText= "delete_forever";
	document.getElementById("card").appendChild(dlt);
}