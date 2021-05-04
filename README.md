<p align="center">
  <img src="https://estudiodigitalbocca.com.br/edb-logo.svg" width="200px">
  <p align="center">Ultima Atualização na v3.15.1</p>
  <h1 align="center">Gradient</h1>
  <h4 align="center">
    Uma Simples Implementação de Fundo 
    <a href="https://pt.wikipedia.org/wiki/Degrad%C3%AA">Degradê</a>
  </h4>
  <p align="center">
    <img src="https://badgen.net/badge/version/v3.15.1/orange">
    <a href="https://codeclimate.com/github/digitalbocca/Gradient/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/5cf26d23900dfd1dc8a6/maintainability"> 
    </a>
    <a href="https://standardjs.com/">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg"> 
    </a>
    <p align="center">
      <a href="https://github.com/standard/standard">
        <img src="https://cdn.rawgit.com/standard/standard/master/badge.svg"> 
      </a>
    </p>
    <p align="center">
      <a href="http://forthebadge.com">
        <img src="https://forthebadge.com/images/badges/built-by-developers.svg"> 
      </a>
    </p>
  </p>
  <p align="center">(c)2020-2021 Estúdio Digital Bocca</p>
</p>

---

# Gradient - README

---

## EXEMPLO

<https://digitalbocca.github.io/Gradient/>

## COMO USAR

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

## REGISTRO DE ALTERAÇÕES

Veja no arquivo [CHANGELOG](CHANGELOG.md).

## REFERÊNCIAS

Site onde escolho as Paletas de Gradient:
Paletas de Gradiente por: <http://uigradients.com>

Outro ótimo site para montar sua Paleta:
Grabient: <https://www.grabient.com/>

O selo que fica no canto superior direito com o link do repositório é:
GitHub Corners por: <http://tholman.com/github-corners/>

A animação do texto é feita com TypedJS:
TypedJS por: <http://www.mattboldt.com/demos/typed-js/>

## LICENÇA

MIT

> Este código tem somente finalidade didática e não deve ser usado em produção.
>
> O código não seguem nenhuma padronização, servindo apenas para simular o funcionamento.
>
> O objetivo é sugerir formas de usar gradient em páginas HTML na prática.
>
> Envie sua sugestão ou correção.
>
> Obrigado.
