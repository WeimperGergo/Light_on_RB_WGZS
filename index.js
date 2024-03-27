import {jatekterLetrehozas, listaGen} from "./fuggvenyek.js";

const GOMBOK = listaGen(3);
const JATEKTER = $("#jatekter")
JATEKTER.html(jatekter(GOMBOK))

lighton()