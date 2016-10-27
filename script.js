// JS


function clic1() { // Au clic du bouton 1
  var radiocoches = document.querySelector('input').checked;
  var nbr = radiocoches.length; // enregistrer le nombre de champs cochés


  if ( nbr == 0) { // si ce nombre est égal à 0
    document.getElementById('#msg1').innerHTML='Veuillez sélectionner un carburant'; // alors on affiche juste ce msg
  }
  else{ // sinon (donc si ce nombre n'est pas égal à 0, donc si un champ est coché)


    var carbchoisi = radiocoches.value;  // alors enregistrer la valeur du champ coché dans une variable
    var msg = "Vous avez choisi : " + carbchoisi ; // créer une variable contenant un msg et la variable précédente
    var form2 = '<br><label>Veuillez entrer le code secret : </label><input type="password" id="pswd" name="pswd" autofocus><button onclick="clic2()" id="btn2">OK</button>'; // créer un nouveau formulaire html et l'enregistrer dans une variable

    document.querySelector('section').innerHTML = msg + form2; // ecraser le contenu de la section existante avec les variables msg et form, en utilisant la méthode .html()
    document.getElementById('msg1').innerHTML = ''; // conserver le paragraphe existant mais effacer son éventuel contenu (si l'utilisateur avait une première fois oublier de choisir)

    var mdp = 1234; // création du code


    function clic2(){ // au clic du bouton 2
      var pswd = document.getElementById('pswd').value; // enregistrer la  valeur du champ pswd entré par l'utilisateur dans une variable
      if(mdp == pswd) { // si le code crée et celui entré par l'utilisateur correspondent
        document.querySelector('section').innerHTML = '<p>Servez-vous en '+ carbchoisi + '</p>'; // alors écraser une fois de plus le contenu de la section
        document.getElementById('msg1').innerHTML = '';  //effacer le contenu éventuel du paragraphe
      }

      else{ // si le code est mauvais ou absent
        document.getElementById('msg1').innerHTML = 'Mauvais code ! Réessayez !'; //alors afficher message d'erreur

      }

    }

  }







}
