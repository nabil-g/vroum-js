// JS & jQuery

$(document).ready(function() {

  $('#btn1').onclick(function() {
    var n = $( "input:checked" ).length;
    if ( n == 0) {
      $('#msg1').text('Veuillez sélectionner un carburant');
    }
    else{
      var carbchoisi = $('input:checked').value;
      var msg = "Vous avez choisi : " + carbchoisi ;
      var form2 = "<form> <label>Veuillez entrer le code secret :</label> <input type="password" id="pswd" name="pswd" autofocus> <button id="btn2">Valider</button> </form>";
      $('section').html(msg + form2);
      $('#msg1').text('');



    }

    var mdp = 1234;
    var pswd = $('#pswd').value;


    $('#btn2').onclick(function(){
      if(mdp == pswd) {
          $('section').html('<p>Servez-vous en '+ carbchoisi + '</p>');
          $('#msg1').text('');
      }

      else{
        $('#msg1').text('Mauvais code ! Réessayez !');
      }






    });




  });





























});
