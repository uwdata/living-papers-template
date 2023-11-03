---
title: Living Papers Documentation
author:
  - name: The Living Papers Team
    org: University of Washington
keywords: [all, about, my, article]
---

::: abstract
Documentation of [Living Papers](https://github.com/uwdata/living-papers)
:::

# Text

Basic text formatting includes:

::: table {#textformat}
| Syntax | Value       |
| :----- | ----------- |
| \_italics_ | _italics_ |
| \**bold**  | **bold** |
| \*\**italics and bold***    | ***italics and bold*** |
| super\^script^ | super^script^ |
| sub\~script~ | sub~script~ |
| \~\~strikethrough~~ | ~~strikethrough~~ |
| \[Hyperlinks\](_your link_) | [Hyperlinks](https://github.com/uwdata/living-papers) |
| \[styled spans]{.underline .smaller} | [styled spans]{.underline .smaller} |

| Text
:::

For lists:
```
- A
- B
- C
```

results in

- A
- B
- C

# Code and Math

Living Papers supports inline code and [TeX syntax](https://en.wikibooks.org/wiki/LaTeX/Mathematics) for math

::: table {#codeformat}
| Syntax | Value       |
| :----- | ----------- |
| \$x = \\pi$ | $x = \pi$ |
| \`x = Math.PI\` | `x = Math.PI` |
| \`x = Math.PI\`{.js} | `x = Math.PI`{.js} |

| Math and code
:::

For `math`` blocks: 

~~~ math
-b \pm \sqrt{b^2 - 4ac} \over 2a
~~~

is achieved with

```
~~~ math
-b \pm \sqrt{b^2 - 4ac} \over 2a
~~~
```



# Tables 

The syntax for tables in Living Papers follow a similar format as tables in Markdown

```
::: table {#tablename}
| Symbol | Value       |
| :----- | ----------- |
| A | B |
| C  | D |

| Table caption
:::
```

results in 

::: table {#tablename}
| Symbol | Value       |
| :----- | ----------- |
| A | B |
| C  | D |

| Table caption
:::

<!--
Captions are distinguished from figure/table content using a preceding pipe (`|`) character.
To avoid confusion, table content and captions must be separated by an empty line.
-->

# Figures

Like tables, for figures place content within `:::`-fenced `figure` blocks:

```
::: figure {#figure .center}
![An illustration of the Golden Ratio](https://upload.wikimedia.org/wikipedia/commons/4/44/Golden_ratio_line.svg)
| A depiction of the Golden Ratio ($\phi$).
:::
```

results in 

::: figure {#figure .center}
![An illustration of the Golden Ratio](https://upload.wikimedia.org/wikipedia/commons/4/44/Golden_ratio_line.svg)
| A depiction of the Golden Ratio ($\phi$).
:::

# Citations

Citations can be defined in [BibTeX](https://en.wikipedia.org/wiki/BibTeX) format, either in an external file (listed under the `references` key of the article metadata) or included anywhere in the document in a `bibliography` block:

For BibTeX, 
``` {.smaller}
~~~ bibliography
@inproceedings{conlen2021,
  title={Idyll Studio: A structured editor for authoring interactive \& data-driven articles},
  author={Conlen, Matthew and Vo, Megan and Tan, Alan and Heer, Jeffrey},
  booktitle={The 34th Annual ACM Symposium on User Interface Software and Technology},
  pages={1--12},
  year={2021}
}
~~~
```

Citation information can be automatically retrieved using a unique DOI or Semantic Scholar ID:

::: table {#tablename}
| Type | Syntax       | Value       |
| :----- | ----------- | ----------- |
| BibTeX | ```@conlen2021``` |[ @conlen2021] |
| DOI | ```[@doi:10.1145/3242587.3242600]``` | [@doi:10.1145/3242587.3242600]|
| Semantic Scholar ID | ```[@s2id:4fca64e6dc4e803d3ed904c04c6845a9e6adc53e]``` | [@s2id:4fca64e6dc4e803d3ed904c04c6845a9e6adc53e]|
| List of Citations | ```[@doi:10.1145/3242587.3242600; @doi:10.1109/TVCG.2016.2599030]``` | [@doi:10.1145/3242587.3242600; @doi:10.1109/TVCG.2016.2599030] |

| Citations
:::

Citations are also _interactive_: click/tap a citation to view a pop-up with more information.

~~~ bibliography
@inproceedings{conlen2021,
  title={Idyll Studio: A structured editor for authoring interactive \& data-driven articles},
  author={Conlen, Matthew and Vo, Megan and Tan, Alan and Heer, Jeffrey},
  booktitle={The 34th Annual ACM Symposium on User Interface Software and Technology},
  pages={1--12},
  year={2021}
}
~~~


# Cross-References and Notes

Similar to citations, cross-references are also _interactive_

::: table {#cr}
| Type | Syntax       | Value       |
| :----- | ----------- | ----------- |
| Tables | `@tbl:tablename` | @tbl:tablename |
| Figures | `@fig:figure` | @fig:figure|
| Notes | `^[Notes]` | ^[Notes] |

| Cross-References
:::

# Interactive Figures

Living Papers support *interactive* content using JavaScript code blocks and an extensible component system, all connected via a shared reactive runtime.
The runtime automatically re-evaluates page content in response to interactive updates.

Living Papers uses the same JavaScript dialect as [Observable notebooks](https://observablehq.com/@observablehq/a-taste-of-observable).
We can define variables, add input widgets, and generate figures (e.g., using [Vega-Lite](https://observablehq.com/@observablehq/vega-lite) or [Observable Plot](https://observablehq.com/@observablehq/plot)) just as we would in a notebook.
We can also directly import content from public Observable notebooks, like this [D3](https://d3js.org/)-based [line chart of unemployment rates by U.S. county](https://observablehq.com/@d3/multi-line-chart):


``` js
chartWidth = 775
---
import { chart as d3LineChart } with { chartWidth as width }
from '@d3/multi-line-chart'
---
d3LineChart
```

which was achieved with the code:
```
``` js
chartWidth = 775
---
import { chart as d3LineChart } with { chartWidth as width }
from '@d3/multi-line-chart'
---
d3LineChart
```
```
