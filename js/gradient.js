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
 *
 * Dependências de Desenvolvimento:
 * cross-var-no-babel por: https://www.npmjs.com/package/cross-var-no-babel
 */

console.log('%c (c)2017 - Estúdio Digital Bocca ', 'background-color:#e67e22; color:#fff;')
console.log('%c EDB Labs - Gradient %c v2.6.0', 'background-color:#e67e22; color:#fff;', 'color:#e67e22;')

const typed = new Typed('#texto-principal', {
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
