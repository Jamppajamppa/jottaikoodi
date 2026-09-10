class Tuote {
    constructor(nimi, hinta) {
        this.nimi = nimi;
        this.hinta = hinta;
    }
}

const tuotteet = [];

function lisaaTuote() {
    const nimi = document.getElementById("tuote").value.trim();
    const hinta = parseFloat(document.getElementById("hinta").value);

    if (!nimi || isNaN(hinta)) {
        document.querySelector("h2").innerHTML = "Syötä kelvollinen tuotteen nimi ja hinta.";
        return;
    }

    const uusiTuote = new Tuote(nimi, hinta);
    tuotteet.push(uusiTuote);

    document.getElementById("tuote").value = "";
    document.getElementById("hinta").value = "";

    naytaTuotteet();
}

function naytaTuotteet() {
    const lista = document.getElementById("tuotteet");
    lista.innerHTML = "";

    for (const tuote of tuotteet) {
        const item = document.createElement("li");
        item.textContent = `${tuote.nimi} - ${tuote.hinta.toFixed(2)} €`;
        lista.appendChild(item);
    }

    const yhteensa = tuotteet.reduce((sum, tuote) => sum + tuote.hinta, 0);
    document.getElementById("yhteensa").textContent = `Yhteensä: ${yhteensa.toFixed(2)} €`;
}