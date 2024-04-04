export function lighton() {
    // Kód ide 
    let meret = 3; // Hányszor hányas

    const JATEKTER = $("#jatekter");
    const jatekterLISTA = []; // I/H értékkel teli lista
    
    JATEKTER.html(jatekterLetrehozas(meret));  

    const jatekELEMEK = $("#jatekter .gombok"); // Gombok listája
    const UJJATEK = $("#ujJatekGomb");

    ujJatekGomb();
    
    listaGen(meret);

    jatekterMegjelenites(jatekterLISTA, jatekELEMEK);

    vegeFigyelo(jatekterLISTA);


    function jatekterLetrehozas(meret) {
        let txt = "";
        for(let i = 0; i<meret*meret; i++){
            txt += `<div class="gombok"></div>`;
        }
        return txt;
        // RB
    }

    function jatekterMegjelenites(lista, jatekELEM){
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] == true) jatekELEM.eq(i).css("background-color", "yellow");
            else jatekELEM.eq(i).css("background-color", "green");
        }
    }

    function listaGen(meret) {
        // WG
        /* Megadott hosszig generál minden alkalommal egy I/H értéket 20% eséllyel */
        for (let i = 0; i < meret*meret; i++) {
            let rnd = rndGen(0, 100);
            if (rnd <= 10) jatekterLISTA[i] = true;
            else jatekterLISTA[i] = false;
        }
    }

    function gombKezelo(LISTA) {
        // WG
        // Rá kell tenni az eseménykezelőt az adott gombra
        let meret = $(":root");
        for (let i = 0; i < LISTA.length; i++) {
            if(LISTA[i] === true) LISTA[i] = false;
            else LISTA[i] = true;
        }
        
    }

    function jatekVege(lista){
        let vege = false;
        let talaltLampat = false;
        let i = 0;
        while (i < lista.length) {
            if(lista[i] === true) talaltLampat = true;
            else if (i+1 == lista.length && talaltLampat === false) vege = true;
            i++;
        }
        if (vege === true) {
            alert("Hurrá, meghosszabítottad a Föld életét!");
        }
    }

    function vegeFigyelo(lista){
        $(window).on("load", function(){
            jatekVege(lista)
        });
    }

    function ujJatekGomb(){
        UJJATEK.on("click", function(){
            location.reload()
        })
    }
    
    function rndGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }    

}