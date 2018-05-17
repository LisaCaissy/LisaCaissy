$('#precisionautres').hide();

//FORMULAIRE
$('#annuler').click(function () {

    function clearInputs() {
        $("#nom").val('');
        $("#prenom").val('');
        $("#ville").val('');
        $("#pays").val('');
        $("#province").val('');
        $("#adresse").val('');
        $("#codepostal").val('');
    }

});

$('#autres').click(function () {

    $('#precisionautres').show();

});

$('#soumettre').click(function () {

    $('#soumettre').attr('href', "http://localhost:63342/ProjetFinal/transmission.html?_ijt=7354vd07b2ki6792gqga6ulsm7");
});


//Zoom

$('.portfolio-item').mouseover(function () {



});