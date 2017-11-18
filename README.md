# GRADIENT #
## v2.6.0 ##

Uma Simples Implementação de Fundo **[Degradê](https://pt.wikipedia.org/wiki/Degrad%C3%AA)**

[![forthebadge](http://forthebadge.com/images/badges/uses-badges.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/contains-technical-debt.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)](http://forthebadge.com)

## Exemplo: ##

https://digitalbocca.github.io/Gradient/

## Como Usar: ##

Declare uma class contendo o background na cor escolhida.
Não se esqueça de deixar um fallback para browsers antigos.

```css
.edb-gradient{
  /**
   * Fallback para browser antigos que não suportam essa funcionalidade
   * Deve ser declarado primeiro, pois se o browser entender a
   * próxima linha ele sobrescreve a propriedade background.
   */
  background: #FF512F;
  /**
   * Chrome 10-25
   * Safari 5.1-6
   */
  background: -webkit-linear-gradient(to left, #FF512F , #F09819);
  /**
   * W3C
   * IE 10+/ Edge
   * Firefox 16+
   * Chrome 26+
   * Opera 12+
   * Safari 7+
   */
  background: linear-gradient(to left, #FF512F , #F09819);
}
```

Use sua class no elemento escolhido.

```html
<body class="edb-gradient">
  <!--
    Neste caso estou usando no body,
    mas pode ser usado em outro elemento.
  -->
</body>
```

## Mudanças ##

- Veja no arquivo CHANGELOG.md.

## Referências ##

Site onde escolho as Paletas de Gradient:
Paletas de Gradiente por: http://uigradients.com

Outro ótimo site para montar sua Paleta:
Grabient: https://www.grabient.com/

O selo que fica no canto superior direito com o link do repositório é:
GitHub Corners por: http://tholman.com/github-corners/

A animação do texto é feita com TypedJS:
TypedJS por: http://www.mattboldt.com/demos/typed-js/

## Licença ##

MIT

> Este código tem somente finalidade didática e não deve ser usado em produção.

> Os código não seguem nenhuma padronização, servindo apenas para simular o funcionamento.

> O objetivo é sugerir formas de usar gradient em páginas HTML na prática.

> Envie sua sugestão ou correção.

> Obrigado.
