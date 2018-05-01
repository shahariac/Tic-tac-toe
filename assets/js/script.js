$(document).ready(function () {

    var player1 = "disable player1";
    var player2 = "disable player2";
    var count = 0;
    var winPlayer1 = 0;
    var winPlayer2 = 0;
    var turn = 0;
    var namePlayer1 = 'Player 1';
    var namePlayer2 = "Player 2";

    $('#namePlayer1').text(namePlayer1);
    $('#namePlayer2').text(namePlayer2);

    $('#winPlayer1').text('0');
    $('#winPlayer2').text('0');

    var reset = function () {
        $("#game li").removeClass('disable');
        $("#game li").removeClass('player1');
        $("#game li").removeClass('player2');
        $("#turn").html('<span style="font-weight: bold; color: #c71585;">New Game</span>');
        count = 0;
    };

    $('#game li').click(function () {
        // Selected or Not
        if ($(this).hasClass('disable')) {
            alert('Already selected');
            return false;
        }

        // Odd or Even
        if (count % 2 == 0) {
            count++;
            $(this).addClass(player1);
            $(this).addClass('disable player1');
            $('#turn').html('Player : <span style="font-weight: bold; color: blue; display: inline-block;">' + namePlayer2 + '</span>');
        } else {
            count++;
            $(this).addClass(player2);
            $(this).addClass('disable player2');
            $('#turn').html('Player : <span style="font-weight: bold; color: blue; display: inline-block;">' + namePlayer1 + '</span>');
        }

        // Check Winning
        setTimeout(function () {
            if ($("#one").hasClass('player1') && $("#two").hasClass('player1') && $("#three").hasClass('player1') || $("#four").hasClass('player1') && $("#five").hasClass('player1') && $("#six").hasClass('player1') || $("#seven").hasClass('player1') && $("#eight").hasClass('player1') && $("#nine").hasClass('player1') || $("#one").hasClass('player1') && $("#four").hasClass('player1') && $("#seven").hasClass('player1') || $("#two").hasClass('player1') && $("#five").hasClass('player1') && $("#eight").hasClass('player1') || $("#three").hasClass('player1') && $("#six").hasClass('player1') && $("#nine").hasClass('player1') || $("#one").hasClass('player1') && $("#five").hasClass('player1') && $("#nine").hasClass('player1') || $("#three").hasClass('player1') && $("#five").hasClass('player1') && $("#seven").hasClass('player1')) {
                alert(namePlayer1 + ' has won the game. Start a new game');
                count = 0;
                winPlayer1++;
                $('#winPlayer1').text(winPlayer1);
                reset();
            } else if ($("#one").hasClass('player2') && $("#two").hasClass('player2') && $("#three").hasClass('player2') || $("#four").hasClass('player2') && $("#five").hasClass('player2') && $("#six").hasClass('player2') || $("#seven").hasClass('player2') && $("#eight").hasClass('player2') && $("#nine").hasClass('player2') || $("#one").hasClass('player2') && $("#four").hasClass('player2') && $("#seven").hasClass('player2') || $("#two").hasClass('player2') && $("#five").hasClass('player2') && $("#eight").hasClass('player2') || $("#three").hasClass('player2') && $("#six").hasClass('player2') && $("#nine").hasClass('player2') || $("#one").hasClass('player2') && $("#five").hasClass('player2') && $("#nine").hasClass('player2') || $("#three").hasClass('player2') && $("#five").hasClass('player2') && $("#seven").hasClass('player2')) {
                alert(namePlayer2 + ' has won the game. Start a new game');
                count = 0;
                winPlayer2++;
                $('#winPlayer2').text(winPlayer2);
                reset();
            } else if (count == 9) {
                alert('Its a tie. It will restart.');
                reset();
            }
        }, 1000);
    });

    // Reset by Click
    $("#reset").click(function () {
        reset();
        $("#turn").html('<span style="font-weight: bold; color: mediumvioletred;">Start Game</span>');
    });
});