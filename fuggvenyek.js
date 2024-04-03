export function lighton() {
    // Kód ide 
    const MERET = 3; // Hányszor hányas
    const JATEKTER = $("#jatekter");
    const jatekterLISTA = []; 
    // I/H értékkel teli lista
    JATEKTER.html(jatekterLetrehozas(MERET));
    const jatekELEMEK = $("#jatekter .gombok"); // Gombok listája
    listaGen(MERET);
    jatekterMegjelenites(jatekterLISTA, jatekELEMEK);
    jatekterElrendezes(MERET, jatekterLISTA);

    function jatekterLetrehozas(MERET) {
        let txt = `<div class="gombok"></div>`;
        for(let i = 0; i<MERET*MERET-1; i++){
            txt += `<div class="gombok"></div>`;
        }
        return txt;
        // RB
    }

    function jatekterElrendezes(MERET, JATEKTER) {
        let szoveg = "";
        for (let i = 0; i < MERET-1; i++) {
            szoveg += "1fr ";
        }
        szoveg += "1fr";
        JATEKTER.css("grid-template-columns", szoveg);
    }

    function jatekterMegjelenites(lista, jatekELEM){
        for (let i = 0; i < jatekELEM.length; i++) {
            if (lista[i] == true) jatekELEM.eq(i).css("background-color", "green");
            else jatekELEM.eq(i).css("background-color", "yellow");
        }
    }

    function listaGen(MERET) {
        // WG
        /* Megadott hosszig generál minden alkalommal egy I/H értéket 20% eséllyel */
        for (let i = 0; i < MERET*MERET; i++) {
            let rnd = rndGen(0, 100);
            if (rnd <= 20) jatekterLISTA[i] = true;
            else jatekterLISTA[i] = false;
            // console.log(JATEKTER[i])
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