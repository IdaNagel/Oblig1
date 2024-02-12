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
        document.getElementById("feilantall").innerHTML = "Må skrive noe inn i antall";
    }
    if (isNaN(telefonnr) || telefonnr<1){
        document.getElementById("feiltelefonnr").innerHTML = "Må skrive inn tall i telefonnummer"
    }
    if (fornavn.length==0){
        document.getElementById("feilfornavn").innerHTML = "Må skrive noe inn i fornavn";
    }
    if (etternavn.length==0){
        document.getElementById("feiletternavn").innerHTML = "Må skrive noe inn i etternavn";
    }
    if (epost.length==0){
        document.getElementById("feilepost").innerHTML = "Må skrive noe inn i epost";
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