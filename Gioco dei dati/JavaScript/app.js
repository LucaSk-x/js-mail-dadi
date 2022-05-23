/* creare un array con la lista delle e-mail valide */
/* creare in html un imput dove inserire l email */
/* prendere la value dall input e confrontarla con un if */
/* stampare il risultato */


/* lista e-mail valide */
let mailList = ['lucask1@gmail.com', 'lucask2@gmail.com', 'lucask3@gmail.com', 'lucask4@gmail.com', 'lucask5@gmail.com',];

/* lista e-mail visitatori */
let mailVisiter = [];

let text = ""

let submitbtn = document.getElementById("submit");

submitbtn.addEventListener('click', function() {
    
    let inputMail = document.getElementById("mailInput")
    let mail = inputMail.value

    for (let i = 0; i < mailList.length; i++) {
        let currentMailList = mailList[i]
        
        if (mail == currentMailList) {
            text = "Access allowed"
        } else {
            text = "Access denied"
        }
        console.log(mail)
        console.log(currentMailList)
    }

    let messageUser = alert(text)


});