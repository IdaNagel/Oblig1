let billetter = [];

function kjopBillett() {
    const film = document.getElementById("film").value;
    const santall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const stelefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    const antall = Number(santall);
    const telefonnr = Number(stelefonnr);

    if (isNaN(antall) || antall < 1) {
        document.getElementById("feilantall").innerHTML = "Må skrive noe inn i antall";
    }
    if (isNaN(telefonnr) || telefonnr < 1) {
        document.getElementById("feiltelefonnr").innerHTML = "Må skrive inn tall i telefonnummer"
    }
    if (fornavn.length == 0) {
        document.getElementById("feilfornavn").innerHTML = "Må skrive noe inn i fornavn";
    }
    if (etternavn.length == 0) {
        document.getElementById("feiletternavn").innerHTML = "Må skrive noe inn i etternavn";
    }
    if (epost.length == 0) {
        document.getElementById("feilepost").innerHTML = "Må skrive noe inn i epost";
    }
    else {
        const billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost

        }

        billetter.push(billett);
    }


    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" +
        "</tr>";
    for (let b of billetter) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr +
            "</td><td>" + b.epost + "</td>";
        ut += "</tr>";
    }

    document.getElementById("allebilletter").innerHTML = ut;

    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

}

function slettBilletter(){

}