/* creiamo 2 generatori di numeri random un per l user e un per il pc */
/* confronto i risutati ottenuti e inserisco il vincitore nell array */
let generaBtn = document.getElementById("submit");

generaBtn.addEventListener('click', function() {
    let randomUser = Math.floor(Math.random() * 6) + 1;
    let randomPc = Math.floor(Math.random() * 6) + 1;

    console.log(randomUser)
    console.log(randomPc)

    let numberUser = document.getElementById("numberUser")
    let numberPc = document.getElementById("numberPc")

    numberUser.innerHTML = `<div class="p-2 text-center"> ${randomUser}  </div>`;
    numberPc.innerHTML = `<div class="p-2 text-center"> ${randomPc}  </div>`;
})