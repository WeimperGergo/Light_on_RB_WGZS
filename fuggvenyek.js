export function lighton() {
    // Kód ide 
    const MERET = 3;
    const JATEKTER = $("#jatekter");
    JATEKTER.html(jatekterLetrehozas(MERET));
    const jatekELEMEK = $("#jatekter gombok");
    listaGen(MERET);
    jatekterMegjelenites(JATEKTER, jatekELEMEK);
    jatekterElrendezes(MERET, JATEKTER);

    function jatekterLetrehozas(MERET) {
        let txt = `<div class="gombok"></div>`;
        for(let i = 0; i<MERET*MERET-1; i++){
            txt += `<div class="gombok"></div>`;
        }
        return txt;
        // RB
    }

    function jatekterElrendezes(MERET, JATEKTER) {
        let szoveg;
        for (let i = 0; i < MERET; i++) {
            szoveg += "1fr ";
        }
        JATEKTER.css("grid-template-columns", szoveg);
    }

    function jatekterMegjelenites(JATEKTER, jatekELEM){
        for (let i = 0; i < JATEKTER.length; i++) {
            if (JATEKTER.eq(i) === true) jatekELEM.eq(i).css("background-color", "green");
            else jatekELEM.eq(i).css("background-color", "yellow");
        }
    }

    // Ne pushold
    function listaGen(MERET) {
        // WG
        /* Megadott hosszig generál minden alkalommal egy I/H értéket 20% eséllyel */
        for (let i = 0; i < MERET*MERET; i++) {
            let rnd = rndGen(0, 100);
            if (rnd >= 20) JATEKTER[i] = true;
            else JATEKTER[i] = false;
            console.log(JATEKTER[i])
        }
    }

    function gombKezelo(LISTA) {
        // WG
        // Rá kell tenni az eseménykezelőt az adott gombra
        for (let i = 0; i < LISTA.length; i++) {
            if(LISTA[i] === true) LISTA[i] = false;
            else LISTA[i] = true;
        }
    }

    function rndGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
}