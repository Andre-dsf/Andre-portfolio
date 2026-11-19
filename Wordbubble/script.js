let score = 0;
let lives = 3;
let bubbleTimer;

function updateDisplay() {
document.getElementById("score").textContent = "Punkte: " + score;
document.getElementById("lives").textContent = "Leben: " + lives;
}

updateDisplay();
 document.getElementById("game-title").textContent = "Wordbubble ist bereit!"

   const words = ["Quelle", "Fluss", "Flut", "Welle", "Oase", "See", "Azul", "Felix", "Tropfen", "Wasserfall", "Bach",
    "Regen", "Pfütze"]

function createBubble() {const bubble = document.createElement("div");
     bubble.className = "bubble";

     const randomIndex = Math.floor(Math.random() * words.length);
     bubble.textContent = words[randomIndex];

     const randomLeft = Math.floor(Math.random() * 500);
     bubble.style.left = randomLeft + "px";
    
    
    
     document.getElementById("game-area").appendChild(bubble);
     
 function removeBubble() {
    bubble.remove();

    if(lives>0){
        lives = lives - 1;
        updateDisplay();

        if(lives === 0){
            clearInterval(bubbleTimer);
            document.getElementById("game-area").innerHTML = "";
            document.getElementById("game-title").textContent = "Game Over!";
 }
 }
}
 bubble.addEventListener("animationend", removeBubble);
}    

function startGame() {
    document.getElementById("game-title").textContent = "Wordbubble läuft!";

    createBubble();
    
    bubbleTimer = setInterval(createBubble, 2000);
    document.getElementById("start-button").disabled = true;
}

document.getElementById("start-button").addEventListener("click", startGame);

function CheckInput() {
    const input = document.getElementById("word-input");
    const bubbles = document.querySelectorAll(".bubble");
    for (const bubble of bubbles) {
        if (bubble.textContent.toLowerCase() === input.value.toLowerCase()) {
            bubble.remove();
            score = score + 1;
            updateDisplay();
            input.value = "";
        }

    }

}
document.getElementById("word-input").addEventListener("input", CheckInput);