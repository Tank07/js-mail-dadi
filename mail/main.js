    // Chiedi all’utente la sua email,
    // controlla che sia nella lista di chi può accedere,
    // stampa un messaggio appropriato sull’esito del controllo.
    // (non usare INCLUDES)    

    let email = prompt("Qual è la tua mail ?");
    console.log(email)
    let accesso = ["banana@hotmail","jabroni@outlook", "tanc@hotmail" ];
    console.log(accesso)

    if (email == accesso){
        document.getElementById("msg_appropriato").innerHTML = `<div class= "green">Accesso consentito tramite mail: <span class= "blue">${email}</span>  al server Boolean.</div>`;
    } else{
        document.getElementById("msg_appropriato").innerHTML = `<div class="red">Accesso non consentito tramite mail: <span class= "blue">${email}</span> al server Boolean, la SWAT è in viaggio verso casa sua.</div>`;
    }