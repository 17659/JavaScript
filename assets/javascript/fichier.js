var message = prompt('Veuillez saisir une valeur');

if (message < 0) {reponse = 'Nombre negatif';
}

else if (message > 0) {
  reponse ='Nombre positif';
}

else {reponse = 'Null';
}

document.write("<h1>" + reponse + "</h1>");

alert(reponse);
