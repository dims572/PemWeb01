// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
// jika di klik akan menjalankan fungsi computerChoice
a.addEventListener("click", (element) => {
    computerChoice(element);
})
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML =
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML

    // jika pilihan komputer sama dengan pilihan user (Draw)
    if(pilihanUser == pilihanComputer){
        alert("Draw")
    }

    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("You Win")
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("You Win")
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("You Win")
    }

    // jika pilihan komputer yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("Computer Win")
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("Computer Win")
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("Computer Win")
    }
}