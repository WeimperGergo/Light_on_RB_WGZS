export function lighton() {
    // Kód ide 
    let meret = 3; // Hányszor hányas
    const JATEKTER = $("#jatekter");
    const jatekterLISTA = []; // I/H értékkel teli lista
    
    JATEKTER.html(jatekterLetrehozas(meret));   
    const jatekELEMEK = $("#jatekter .gombok"); // Gombok listája
    const UJJATEK = $("#ujJatekGomb")
        UJJATEK.on("click", function(){
        location.reload()
    })

    listaGen(meret);
    jatekterMegjelenites(jatekterLISTA, jatekELEMEK);
    // jatekVege(jatekterLISTA);
    vegeFigyelo(jatekterLISTA);

    function jatekterLetrehozas(meret) {
        let txt = `<div class="gombok"></div>`;
        for(let i = 0; i<meret*meret-1; i++){
            txt += `<div class="gombok"></div>`;
        }
        return txt;
        // RB
    }


    function jatekterMegjelenites(lista, jatekELEM){
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] == true) jatekELEM.eq(i).css("background-color", "green");
            else jatekELEM.eq(i).css("background-color", "yellow");
        }
    }

    function listaGen(meret) {
        // WG
        /* Megadott hosszig generál minden alkalommal egy I/H értéket 20% eséllyel */
        for (let i = 0; i < meret*meret; i++) {
            let rnd = rndGen(0, 100);
            if (rnd <= 50) jatekterLISTA[i] = true;
            else jatekterLISTA[i] = false;
            // console.log(JATEKTER[i])
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
            if(lista[i] === true){
                talaltLampat = true;
                console.log(i + ". elem");
            }
            else if (i == lista.length){
                vege = true;
                console.log(i + ". elem");
            }
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

    function rndGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function ujJatekGomb(){
        
    }
}