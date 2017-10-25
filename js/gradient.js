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

console.log('(c)2017 - Estúdio Digital Bocca')
console.log('v2.5.0')

var typed = new Typed('#texto-principal', {
  strings: [
    'Estúdio Digital Bocca',
    'Implemente seu Gradient ^300 em CSS',
    'Código no GitHub'
  ],
  typeSpeed: 30,
  backSpeed: 20,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  startDelay: 1000,
  backDelay: 3000,
  loop: true
})
