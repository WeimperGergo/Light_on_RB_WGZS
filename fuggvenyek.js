export function lighton() {
    // Kód ide 
    const JATEKTER = $("#jatekter");

    function jatekterLetrehozas(meret) {
        let txt = "<div>";
        for(let i = 0; i<meret*meret; i++){
            txt += `<div class="gombok"></div>`;
        }
        txt += "</div>";
        return txt;
        // RB
    }

    function jatekterMegjelenites(){
        
        
        // RB
    }

    function listaGen(meret) {
        // WG
        for (let i = 0; i < meret*meret; i++) {
            let rnd = rndGen(0, 100);
            if (rnd >= 20) JATEKTER[i].html(true);
            else JATEKTER[i].html(false);
            console.log(JATEKTER[i])
        }
    }

    function gombKezelo(JATEKTER) {
        // WG
        for (let i = 0; i < JATEKTER.length; i++) {
            if(JATEKTER[i] === true) JATEKTER[i] = false;
            else JATEKTER[i] = true;
        }
    }

    function rndGen(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
}