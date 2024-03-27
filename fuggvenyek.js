export function lighton() {
    // Kód ide 
    const JATEKTER = $("#jatek");

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