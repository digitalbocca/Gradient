/**
 * (c)2017 - Estúdio Digital Bocca
 *
 * gradient.js - Parte do Projeto digitalbocca/Gradient
 * https://github.com/digitalbocca/Gradient
 *
 * Exemplo: https://estudiodigitalbocca.com.br/labs/Gradient
 *
 * Dependências:
 *
 * Paletas de Gradiente por: http://uigradients.com
 * GitHub Corners por: http://tholman.com/github-corners/
 * TypedJS por: http://www.mattboldt.com/demos/typed-js/
 */

$(document).ready(function () {
  console.log('(c)2017 - Estúdio Digital Bocca')
  $(function () {
    $('#texto-principal').typed({
      strings: [
        'Estúdio Digital Bocca',
        'Implemente seu Gradient em CSS',
        'Código no GitHub'
      ],
      typeSpeed: 0,
      backSpeed: 0,
      startDelay: 1000,
      backDelay: 4000,
      loop: true
    })
  })
})
