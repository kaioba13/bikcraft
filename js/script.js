import initLinkMenu from "./modules/link-menu.js";
import checkUrl from "./modules/url.js";
import initPerguntas from "./modules/accordion-perguntas.js"
import initGaleria from "./modules/galeria.js"


initLinkMenu()
checkUrl()
initPerguntas()
initGaleria()

if(window.SimpleAnime) {
  new SimpleAnime();
}
