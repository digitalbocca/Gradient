# GRADIENT
Uma Simples Implementa&ccedil;&atilde;o de Fundo **[Degrad&ecirc;](https://pt.wikipedia.org/wiki/Degrad%C3%AA)**

#### Exemplo:

http://estudiodigitalbocca.com.br/labs/Gradient

#### Como Usar:

Declare uma class contendo o background na cor escolhida.
N&atilde;o se esque&ccedil;a de deixar um fallback para browsers antigos.

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

#### Referências

Site onde escolho as Paletas de Gradient:
Paletas de Gradiente por: http://uigradients.com

O selo que fica no canto superior direito com o link do reposit&oacute;rio &eacute;:
GitHub Corners por: http://tholman.com/github-corners/

A anima&ccedil;&atilde;o do texto &eacute; feita com TypedJS:
TypedJS por: http://www.mattboldt.com/demos/typed-js/

> Este c&oacute;digo &eacute; apenas para fins did&aacute;ticos e n&atilde;o deve ser usado em produ&ccedil;&atilde;o.

> O c&oacute;digo CSS n&atilde;o segue nenhum padr&atilde;o, &eacute; apenas para simular o funcionamento.

> O objetivo &eacute; sugerir formas de usar gradient em páginas na pr&aacute;tica.

> Obrigado.
