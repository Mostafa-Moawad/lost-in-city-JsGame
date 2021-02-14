

// var easy = document.getElementById("easy");
// easy.addEventListener("click",move);
// function move()
// {
//     window.location.href = 'index.html' + easy.value;
//     // Store it in the local storage
// localStorage.setItem('level', 'easy');
// }

// var hard = document.getElementById("hard");
// hard.addEventListener("click",move2);
// function move2()
// {
//     window.location.href = 'index.html' + easy.value;
//     // Store it in the local storage
// localStorage.setItem('level', 'hard');
// }

////////////////////////////////////////////////////// player

//Player Selection
// document.getElementById('player-selected').innerHTML = 'Choose your Player!';
// Select player
var selectedChar = false;
function selectChar(char) {
    // console.log(char);
    // selectedChar = char;
    switch (char) { // Display Selected Char's Name.
        case 'char1':
            document.getElementById('player-selected').innerHTML = 'Boy';
            selectedChar = "char1";
            break;
        case 'char2':
            document.getElementById('player-selected').innerHTML = 'Cat Girl';
            selectedChar = "char2";
            break;
        case 'char3':
            document.getElementById('player-selected').innerHTML = 'Horn Girl';
            selectedChar = "char3";
            break;
        case 'char4':
            document.getElementById('player-selected').innerHTML = 'Pink Girl';
            selectedChar = "char4";
            break;
        case 'char5':
            document.getElementById('player-selected').innerHTML = 'Princess';
            selectedChar = "char5";
            break;
    }
    return selectedChar;
}

function easyGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'easy');
        localStorage.setItem('selectedChar', selectedChar);
    }
}

function medGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'medium');
        localStorage.setItem('selectedChar', selectedChar);
    }
}

function hardGame() {
    if (selectedChar === false) {
        alert('Please Select Character');
    } else {
        window.location.href = 'index.html';
        // Store it in the local storage
        localStorage.setItem('level', 'hard');
        localStorage.setItem('selectedChar', selectedChar);
    }
}



