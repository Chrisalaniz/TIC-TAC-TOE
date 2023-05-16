//Used to tell which turn it is
counter = 1;

//Function for space 1 and checking who's turn it is
function box1() {
    if (counter == 1) {
        //When user clicks the text box, X will be placed in there
        document.getElementById("txt1").value = "X";
        //Cannot click button again once move it made in this space
        document.getElementById("txt1").disabled = true;
        counter = 0;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
    } else {
        //if O's turn
        document.getElementById("txt1").value = "O";
        document.getElementById("txt1").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 2
function box2() {
    if (counter == 1) {
        document.getElementById("txt2").value = "X";
        document.getElementById("txt2").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt2").value = "O";
        document.getElementById("txt2").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 3
function box3() {
    if (counter == 1) {
        document.getElementById("txt3").value = "X";
        document.getElementById("txt3").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt3").value = "O";
        document.getElementById("txt3").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 4
function box4() {
    if (counter == 1) {
        document.getElementById("txt4").value = "X";
        document.getElementById("txt4").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt4").value = "O";
        document.getElementById("txt4").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 5
function box5() {
    if (counter == 1) {
        document.getElementById("txt5").value = "X";
        document.getElementById("txt5").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt5").value = "O";
        document.getElementById("txt5").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 6
function box6() {
    if (counter == 1) {
        document.getElementById("txt6").value = "X";
        document.getElementById("txt6").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt6").value = "O";
        document.getElementById("txt6").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 7
function box7() {
    if (counter == 1) {
        document.getElementById("txt7").value = "X";
        document.getElementById("txt7").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt7").value = "O";
        document.getElementById("txt7").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 8
function box8() {
    if (counter == 1) {
        document.getElementById("txt8").value = "X";
        document.getElementById("txt8").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt8").value = "O";
        document.getElementById("txt8").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Space 9
function box9() {
    if (counter == 1) {
        document.getElementById("txt9").value = "X";
        document.getElementById("txt9").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player O's turn";
        counter = 0;
    } else {
        document.getElementById("txt9").value = "O";
        document.getElementById("txt9").disabled = true;
        document.getElementById("lblturn").innerHTML = "Player X's turn";
        counter = 1;
    }
}

//Reseting the game
function Reset() {
    //reloading the page
    location.reload();
    //Making all the textboxes blank again
    document.getElementById("txt1").value = '';
    document.getElementById("txt2").value = '';
    document.getElementById("txt3").value = '';
    document.getElementById("txt4").value = '';
    document.getElementById("txt5").value = '';
    document.getElementById("txt6").value = '';
    document.getElementById("txt7").value = '';
    document.getElementById("txt8").value = '';
    document.getElementById("txt9").value = '';
    //Resetting the game defaults
    document.getElementById("lblturn").innerHTML = "Player X's turn";
    document.getElementById("lblWin").innerHTML = "";

}

//Function to check who wins the game and will call function everytime a box is clicked by the user
function Main() {

    //Declaring the variables
    var txt1 = document.getElementById("txt1").value;
    var txt2 = document.getElementById("txt2").value;
    var txt3 = document.getElementById("txt3").value;
    var txt4 = document.getElementById("txt4").value;
    var txt5 = document.getElementById("txt5").value;
    var txt6 = document.getElementById("txt6").value;
    var txt7 = document.getElementById("txt7").value;
    var txt8 = document.getElementById("txt8").value;
    var txt9 = document.getElementById("txt9").value;

    //Start of the conditions to check who wins
    //For player X first 3 boxes
    if (txt1 == 'X' && txt2 == 'X' && txt3 == 'X') {
        //Making the turn empty since player X won
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        //Disabling the boxes 
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        //Showing a window to the user displaying who won
        window.alert("Player X Wins!");
    }
    //For player O first 3 boxes
    else if (txt1 == 'O' && txt2 == 'O' && txt3 == 'O') {
        //Making the turn empty since player X won
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        //Disabling the boxes 
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        //Showing a window to the user displaying who won
        window.alert("Player O Wins!");
    }

    //Start of a new check, checking first row down win 
    //Check for X
    else if (txt1 == 'X' && txt4 == 'X' && txt7 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt1 == 'O' && txt4 == 'O' && txt7 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check, Bottom row straight across
    //Check for X
    else if (txt7 == 'X' && txt8 == 'X' && txt9 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt7 == 'O' && txt8 == 'O' && txt9 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt6").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check, Checking last row straight down
    //Check for X
    else if (txt3 == 'X' && txt6 == 'X' && txt9 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt3 == 'O' && txt6 == 'O' && txt9 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt5").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check, diagonal
    //Check for X
    else if (txt1 == 'X' && txt5 == 'X' && txt9 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt1 == 'O' && txt5 == 'O' && txt9 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check, diagonal the other way
    //Check for X
    else if (txt3 == 'X' && txt5 == 'X' && txt7 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt3 == 'O' && txt5 == 'O' && txt7 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check,  Straight down in the middle column
    //Check for X
    else if (txt2 == 'X' && txt5 == 'X' && txt8 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O 
    else if (txt2 == 'O' && txt5 == 'O' && txt8 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt4").disabled = true;
        document.getElementById("txt6").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player O Wins!");
    }

    //Start of new check, Checking the middle row across
    //Check for X
    else if (txt4 == 'X' && txt5 == 'X' && txt6 == 'X') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player X Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player X Wins!");
    }
    //Check for O
    else if (txt4 == 'O' && txt5 == 'O' && txt6 == 'O') {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Player O Wins!";
        document.getElementById("txt1").disabled = true;
        document.getElementById("txt2").disabled = true;
        document.getElementById("txt3").disabled = true;
        document.getElementById("txt7").disabled = true;
        document.getElementById("txt8").disabled = true;
        document.getElementById("txt9").disabled = true;
        window.alert("Player O Wins!");
    }

   //Start of new check and this one is for a tie and if all spaces are filled it is a tie and Reset the board!
    else if ((txt1 == 'X' || txt1 == 'O') && (txt2 == 'X' || txt2 == 'O') && (txt3 == 'X' || txt3 == 'O') && (txt4 == 'X' || txt4 == 'O')
        && (txt5 == 'X' || txt5 == 'O') && (txt6 == 'X' || txt6 == 'O') && (txt7 == 'X' || txt7 == 'O') && (txt8 == 'X' || txt8 == 'O')
        && (txt9 == 'X' || txt9 == 'O')) {
        document.getElementById("lblturn").innerHTML = "";
        document.getElementById("lblWin").innerHTML = "Its a tie!";
        window.alert("Its a tie!");
        Reset();

    }
}