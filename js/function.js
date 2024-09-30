function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const diceImage = document.querySelector("#dice img");
    diceImage.src = `./kuvat/${randomNumber}noppa.png`;
}
document.querySelector("#dice img").addEventListener("click", rollDice);