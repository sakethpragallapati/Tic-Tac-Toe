let boxes = Array.from(document.querySelectorAll(".box"));
let player = "player1";
let shouldContinue = true;
let indexArray = [["0", "0", "0"],
                  ["0", "0", "0"],
                  ["0", "0", "0"]];

while(shouldContinue){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function handleClick(e) {
            let choice = document.createElement("p");
            if (player === "player1") {
                choice.innerText = "X";
                choice.style.color = "red";
                player = "player2";
                let idValue = e.target.getAttribute("id");
                indexArray[Number(idValue.slice(0, 1))][Number(idValue.slice(1, 2))] = "X";
            } else if (player === "player2") {
                choice.innerText = "O";
                choice.style.color = "blue";
                player = "player1";
                let idValue = e.target.getAttribute("id");
                indexArray[Number(idValue.slice(0, 1))][Number(idValue.slice(1, 2))] = "O";
            }
            e.target.prepend(choice);
            e.target.removeEventListener("click", handleClick);
    
            checkWin();
        });
    }
    
    function checkWin() {
        for (let i = 0; i < 3; i++) {
            // Check rows
            if (indexArray[i][0] === indexArray[i][1] && indexArray[i][1] === indexArray[i][2] && indexArray[i][0] !== "0") {
                if (indexArray[i][0] === "X") {
                    player1Wins();
                } else {
                    player2Wins();
                }
                return;
            }
            // Check columns
            if (indexArray[0][i] === indexArray[1][i] && indexArray[1][i] === indexArray[2][i] && indexArray[0][i] !== "0") {
                if (indexArray[0][i] === "X") {
                    player1Wins();
                } else {
                    player2Wins();
                }
                return;
            }
        }
        // Check diagonals
        if (indexArray[0][0] === indexArray[1][1] && indexArray[1][1] === indexArray[2][2] && indexArray[0][0] !== "0") {
            if (indexArray[0][0] === "X") {
                player1Wins();
            } else {
                player2Wins();
            }
            return;
        }
        if (indexArray[0][2] === indexArray[1][1] && indexArray[1][1] === indexArray[2][0] && indexArray[0][2] !== "0") {
            if (indexArray[0][2] === "X") {
                player1Wins();
            } else {
                player2Wins();
            }
            return;
        }
    }
    
    function player1Wins() {
        let message = document.createElement("p");
        message.innerText = "Player 1 Wins";
        message.classList.add("message");
        document.querySelector("body").append(message);
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener("click", handleClick);
        }
        shouldContinue = false;
    }
    
    function player2Wins() {
        let message = document.createElement("p");
        message.innerText = "Player 2 Wins";
        message.classList.add("message");
        document.querySelector("body").append(message);
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener("click", handleClick);
        }
        shouldContinue = false;
    }
}