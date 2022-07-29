export default function checkUrl() {
  const parametros = new URLSearchParams(location.search)

  function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
      elemento.checked = true
    }
    console.log(elemento)
  }

  parametros.forEach(ativarProduto)
}