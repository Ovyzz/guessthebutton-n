const random = Math.floor(Math.random() * 300 + 1);

function generatesButtons() {

    const numberOfButtons = document.getElementById("numberButtons").value;
    for(let i = 1; i <= numberOfButtons; ++i) {
        document.getElementById("generates").innerHTML += "<button id = \"btn"+ i +"\" type=\"button\" class=\"btn btn-outline-primary btn-lg\" onclick=\"return checkWinner(this.id)\">"+ i +"</button>";
        if (i % 20 == 0) {
            document.getElementById("generates").innerHTML += "<br>"
        }
    }
}

function checkWinner(x) {
    if (x === "btn" + random) {
        document.getElementById("alert").innerHTML = "<div class=\"alert alert-success\" role=\"alert\">You won!</div>";
    } else {
        document.getElementById("alert").innerHTML = "<div class=\"alert alert-danger\" role=\"alert\">You lose :(</div>";
    }
}


function reset() {
    location.reload();
    return false;
}