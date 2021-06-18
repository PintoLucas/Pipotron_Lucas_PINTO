function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genererPhrase() {
	let listeSujets = ["Harry Potter", "Luke Skywalker", "Bilbon"];
	let listeVerbes = [" pratique", " mange"];
	let listeComplements = [" la magie", " le sabre laser", " la cuisine"];

	let indiceSujets = getRandomInt(listeSujets.length);
	let sujet = listeSujets[indiceSujets];

	let indiceVerbes = getRandomInt(listeVerbes.length);
	let verbe = listeVerbes[indiceVerbes];

	let indiceComplements = getRandomInt(listeComplements.length);
	let complement = listeComplements[indiceComplements];

	let phraseFinale = sujet + verbe + complement;
	console.log(phraseFinale);
	console.log(document.getElementById("renduFinal"));
	console.log(document);
	document.getElementById("renduFinal").innerHTML = phraseFinale;
}


document.getElementById("bouton").onclick = function() { genererPhrase(); }