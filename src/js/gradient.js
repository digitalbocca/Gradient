'use strict'

/**
 *
 *                         88  88
 *                         88  88
 *                         88  88
 *     ,adPPYba,   ,adPPYb,88  88,dPPYba,
 *    a8P_____88  a8"    `Y88  88P'    "8a
 *    8PP"""""""  8b       88  88       d8
 *    "8b,   ,aa  "8a,   ,d88  88b,   ,a8"
 *     `"Ybbd8"'   `"8bbdP"Y8  8Y"Ybbd8"'
 *
 *
 *     (c)2017-2021 Estúdio Digital Bocca
 *
 *
 *
 *
 *
 *
 * gradient.sass - Parte do Projeto digitalbocca/Gradient
 * https://github.com/digitalbocca/Gradient
 *
 * Exemplo da implementação:
 * https://digitalbocca.github.io/Gradient/
 *
 * Ferramentas:
 *
 * ASCII ART: http://patorjk.com/software/taag/#p=display&f=Univers&t=edb
 * Paletas de Gradiente por: http://uigradients.com
 * GitHub Corners por: http://tholman.com/github-corners/
 * TypedJS por: http://www.mattboldt.com/demos/typed-js/
 *
 * Dependências de Desenvolvimento:
 * Verifique em devDependencies no package.json
 *
 */

import Typed from 'typed.js'

console.log('%c (c)2021 - Estúdio Digital Bocca ', 'background-color:#e67e22; color:#fff;')
console.log('%c EDB Labs - Gradient %c v3.15.1', 'background-color:#e67e22; color:#fff;', 'color:#e67e22;')

window.typed = new Typed('#texto-principal', {
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
