export function lighton() {
    // Kód ide 
    const JATEKTER = $("#jatek");

    function jatekterLetrehozas(meret) {
        let txt = "<div>"
        for(let i = 0; i<meret*meret; i++){
            txt += `<div class="gombok"></div>`
        }
        txt += "</div>"
        return txt
    }

    function listaGen(meret) {
        for (let i = 0; i < meret; i++) {
            // JATEKTER.append( elem )
            // WG
        }
    }

    function gombKezelo(JATEKTER) {
        // WG
        for (let i = 0; i < JATEKTER.length; i++) {
            if(JATEKTER[i] === true) JATEKTER[i] = false;
            else JATEKTER[i] = true
        }
    }
}