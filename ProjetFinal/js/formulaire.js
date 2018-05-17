/**Lisa Caissy-Animation Web**/

$('#divValidation').hide();

$('#nomUsager').keyup(function () {

    var inputUsager = $("#nomUsager");
    $('#divMotPasse').hide();
    if (inputUsager.val() === "SLAY" || inputUsager.val() === "Test" || inputUsager.valueOf() === "") {
        $("#validation").css("color", "red").html("Non valide");
        $('#divValidation').show();

    }
    else {

        $("#validation").css("color", "green").html("Valide");
        $('#divValidation').show();
    }

});

$('#nomUsager, #motPasse').click(function () {
    $('#divMotPasse').hide();
    $('#divValidation').hide();
});

$('#divMotPasse').hide();
$('#motPasse').keyup(function () {

        var inputMotPasse = $("#motPasse");

        if (inputMotPasse.val().length < 6 && inputMotPasse.val().length > 0) {
            $("#motpassesecurite").css("color", "red").html("Faible");
            $('#divMotPasse').show();
        }
        else if (inputMotPasse.val().length >= 6) {

            $("#motpassesecurite").css("color", "gold").html("Moyen");
            $('#divMotPasse').show();

            var count = 0;
            for (var i = 0; i < inputMotPasse.val().length; i++) {
                var isUpperCase = inputMotPasse.val()[i] >= /^[A-Z]*$/.test(inputMotPasse.val()[i]);
                if (isUpperCase) {
                    count++;

                    if (count >= 1) {

                        $("#motpassesecurite").css("color", "green").html("Elevé");
                        $('#divMotPasse').show();
                    }
                }
            }

        }

    }
);
// $('#confirmation').hide();
// $('#confirmation, #motPasse').validate(function () {
//     var password = $("#motPasse").val();
//     var confirmPassword = $("#confirmationMotPasse").val();
//
//     if (password != confirmPassword) {
//         $('#confirmation').html("Mots de passe non identiques");
//         $('#confirmation').css("color", "red");
//         $('#confirmation').show();
//     } else {
//         $('#confirmation').css("color", "red");
//         $('#confirmation').show();
//     }
//
// });
//


$('#divStarWars, #divMarvel, #divDC').hide();

$('#starwars').click(function () {

    $('#divStarWars').show();
    $('#divMarvel, #divDC').hide();
});

$('#marvel').click(function () {

    $('#divMarvel').show();
    $('#divDC, #divStarWars').hide();
});

$('#dc').click(function () {

    $('#divDC').show();
    $('#divStarWars, #divMarvel').hide();
});
//
//
// $('#choixStarWars').change(function () {
//     var id = $(this).attr('id');
//     if ($('#choixStarWars:selected').val() === $('#choixLuke'))
//     {
//         alert('boum');
//     }
//
//     switch ($(this).attr('id'))
//     {
//         case $('#choixLuke'):
//             alert("boom");
//             $('#yoda').attr('src', "luke.png");
//             break;
//         case $('#choixDarth'):
//             $('#yoda').attr("src", "jpg");
//             break;
//         case $('#choixObiwan'):
//             $('#yoda').attr('src', 'obiwan.png');
//             break;
//         default:
//             break;
//     }
// });

