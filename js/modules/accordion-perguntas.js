export default function initPerguntas() {

  const perguntas = document.querySelectorAll('.perguntas button')


  function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
  }

  function eventosPergunta (pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
  }

  perguntas.forEach(eventosPergunta)

}