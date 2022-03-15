    // Chiedi all’utente la sua email,
    // controlla che sia nella lista di chi può accedere,
    // stampa un messaggio appropriato sull’esito del controllo.
    // (non usare INCLUDES)    

    let email = prompt("Qual è la tua mail ?");
    console.log(`email = ${email}`)
    let arrayAccesso = [`banana@hotmail`,`jabroni@outlook`, `tanc@hotmail`];
    console.log(arrayAccesso)
    let mailOk = false

    for( i=0; i < arrayAccesso.length; i++ ){

        if( email == arrayAccesso[i]){
            console.log(email , arrayAccesso[i])
            mailOk = true
        }
    }
        
         if ( email == arrayAccesso[i] ){
             console.log(email , arrayAccesso[i])
             document.getElementById("msg_appropriato").innerHTML = `<div class= "green">Accesso consentito tramite mail: <span class= "blue">"${email}"</span>  al server Boolean.</div>`;
            
         } else {
             console.log(email , arrayAccesso[i])
             document.getElementById("msg_inappropriato").innerHTML = `<div class="red">Accesso non consentito tramite mail: <span class= "blue">"${email}"</span> al server Boolean, la SWAT è in viaggio verso casa sua.</div>`;          
         }
      