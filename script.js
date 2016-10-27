// JS & jQuery

$(document).ready(function() { //Quand le document est chargé


  $('#btn1').click(function() { // Au clic du bouton 1
    var n = $( "input:checked" ).length; // enregistrer le nombre de champs cochés
    if ( n == 0) { // si ce nombre est égal à 0
      $('#msg1').text('Veuillez sélectionner un carburant'); // alors on affiche juste ce msg
    }
    else{ // sinon (donc si ce nombre n'est pas égal à 0, donc si un champ est coché)
      var carbchoisi = $('input:checked').val();  // alors enregistrer la valeur du champ coché dans une variable
      var msg = "Vous avez choisi : " + carbchoisi ; // créer une variable contenant un msg et la variable précédente
      var form2 = '<br><label>Veuillez entrer le code secret : </label><input type="password" id="pswd" name="pswd" autofocus><button id="btn2">OK</button>'; // créer un nouveau formulaire html et l'enregistrer dans une variable
      $('section').html(msg + form2); // ecraser le contenu de la section existante avec les variables msg et form, en utilisant la méthode .html()
      $('#msg1').text(''); // conserver le paragraphe existant mais effacer son éventuel contenu (si l'utilisateur avait une première fois oublier de choisir)

    }

    var mdp = 1234; // création du code


    $('#btn2').click(function(){ // au clic du bouton 2
      var pswd = $('#pswd').val(); // enregistrer la  valeur du champ pswd entré par l'utilisateur dans une variable
      if(mdp == pswd) { // si le code crée et celui entré par l'utilisateur correspondent
          $('section').html('<p>Servez-vous en '+ carbchoisi + '</p>'); // alors écraser une fois de plus le contenu de la section
          $('#msg1').text('');  //effacer le contenu éventuel du paragraphe
      }

      else{ // si le code est mauvais ou absent
        $('#msg1').text('Mauvais code ! Réessayez !'); //alors afficher message d'erreur
        // $('#msg1').text(pswd);
      }

    });



  });











});
