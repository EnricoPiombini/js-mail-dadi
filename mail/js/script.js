//CREO L'ARRAY CON ALL'INTERNO LA LISTA DELLE MAIL
let mailList = ["marco@gmail.com", "enrico@gmail.com", "giulia@gmail.com"];
console.log(mailList);
let mailTrovata = -1;

// CREO IL CICLO FOR
for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === "marco@gmail.com") {
        mailTrovata = i;
        console.log(mailList[i]);
    }
}
 // VERIFICO SE LA MAIL RISULTA PRESENTE
if(mailTrovata < 0){
    console.log ("L'elemento non è presente nell'array");
} else{
    console.log("L'elemento cercato si trova all' indice " + mailTrovata);
}