let billeter = [];

function kjopBillett(){
    const film = document.getElementById("film").value;
    const santall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const stelefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const antall = Number(santall);
    const telefonnr = Number (stelefonnr);

    if (isNaN(antall) || antall<1){
        document.getElementById("feilantall").innerHTML = "Skriv inn antall over 0";
    }
    if (isNaN(telefonnr) || telefonnr<1){
        document.getElementById("feiltelefonnr").innerHTML = "Bruk bare tall til å skrive telefonnummer"
    }
    if (fornavn.value.length==0){
        document.getElementById("feilfornavn").innerHTML = "Skriv inn fornavn";
    }
    if (etternavn.value.length==0){
        document.getElementById("feiletternavn").innerHTML = "Skriv inn etternavn";
    }
    if (epost.value.length==0){
        document.getElementById("feilepost").innerHTML = "Skriv inn epost";
    }

    const billett = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost

    }



}