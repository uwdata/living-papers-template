---
title: Living Papers Documentation
author:
  - name: The Living Papers Team
    org: University of Washington
keywords: [all, about, my, article]
---

This is documentation of [Living Papers](https://github.com/uwdata/living-papers), a toolkit for authoring interactive scholarly documents. Users use a markdown source to create web pages or research papers with various output types available such as PDF and LaTeX. 

# Text

Basic text formatting is similar to Markdown and includes:

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

Living Papers supports inline code from different coding languaes. [TeX syntax](https://en.wikibooks.org/wiki/LaTeX/Mathematics) for math is also supported to writing equations.

::: table {#codeformat}
| Syntax | Value       |
| :----- | ----------- |
| \$x = \\pi$ | $x = \pi$ |
| \`x = Math.PI\` | `x = Math.PI` |
| \`x = Math.PI\`{.js} | `x = Math.PI`{.js} |

| Math and code
:::

For `math` blocks: 

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

The syntax for tables in Living Papers follow a similar format as tables in Markdown. However, the table syntax must be fenced with `:::` blocks, which is syntax for a Living Papers specific block. You may also provide a name for the content within the blocks, which makes cross-referencing possible.

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

Like tables, figures must be placed within `:::`-fenced `figure` blocks.

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

Citations can be defined in [BibTeX](https://en.wikipedia.org/wiki/BibTeX) format, either in an external file (listed under the `references` key of the article metadata) or included anywhere in the document in a `bibliography` block. An example of a bibliography block for BibTeX is shown below.

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

~~~ bibliography
@inproceedings{conlen2021,
  title={Idyll Studio: A structured editor for authoring interactive \& data-driven articles},
  author={Conlen, Matthew and Vo, Megan and Tan, Alan and Heer, Jeffrey},
  booktitle={The 34th Annual ACM Symposium on User Interface Software and Technology},
  pages={1--12},
  year={2021}
}
~~~

Citation information for inline references can be automatically retrieved using a unique DOI or Semantic Scholar ID:

::: table {#tablename}
| Type | Syntax       | Value       |
| :----- | ----------- | ----------- |
| BibTeX | ```@conlen2021``` |[ @conlen2021] |
| DOI | ```[@doi:10.1145/3242587.3242600]``` | [@doi:10.1145/3242587.3242600]|
| Semantic Scholar ID | ```[@s2id:4fca64e6dc4e803d3ed904c04c6845a9e6adc53e]``` | [@s2id:4fca64e6dc4e803d3ed904c04c6845a9e6adc53e]|
| List of Citations | ```[@doi:10.1145/3242587.3242600; @doi:10.1109/TVCG.2016.2599030]``` | [@doi:10.1145/3242587.3242600; @doi:10.1109/TVCG.2016.2599030] |

| Citations
:::

Citations are also interactive: clicking on a citation will allow you to view a pop-up with more information such as the title, authors, and a TLDR.



# Cross-References and Notes

Similar to citations, cross-references are also interactive: clicking on a cross-reference will allow you to view a pop-up with a minimized view of the referenced content.

::: table {#cr}
| Type | Syntax       | Value       |
| :----- | ----------- | ----------- |
| Tables | `@tbl:tablename` | @tbl:tablename |
| Figures | `@fig:figure` | @fig:figure|
| Notes | `^[Notes]` | ^[Notes] |

| Cross-References
:::

# Dynamic Content

Living Papers suppors interactive content using JavaScript code blocks and an extensible component system, all connected via a shared reactive runtime. The runtime automatically re-evaluates page content in response to interactive updates.

Living Papers uses the same JavaScript dialect as [Observable notebooks](https://observablehq.com/@observablehq/a-taste-of-observable).
We can define variables, add input widgets, and generate figures (e.g., using [Vega-Lite](https://observablehq.com/@observablehq/vega-lite) or [Observable Plot](https://observablehq.com/@observablehq/plot)) just as we would in a notebook.

Here we can define two variables `x` and `y`.
```
~~~ js
x = 0
---
y = 15
~~~

```
~~~ js {hide=true}
x = 0
---
y = 15
~~~

Using these variables, we can then define an interactive slider using the Observable Inputs component:
```
~~~ js 
viewof slider = Inputs.range([x, y], { value: 5, step: 1, label: 'Slider' })
~~~
```

~~~ js 
viewof slider = Inputs.range([x, y], { value: 5, step: 1, label: 'Slider' })
~~~



We can directly access the value of the slider as well:

```
~~~ js 
'Slider value: ' + slider
~~~
```

~~~ js 
'Slider value: ' + slider
~~~



We can also directly import content from public Observable notebooks, like this [D3](https://d3js.org/)-based [line chart of unemployment rates by U.S. county](https://observablehq.com/@d3/multi-line-chart). Using the code
```
~~~ js
chartWidth = 775
---
import { chart as d3LineChart } with { chartWidth as width }
from '@d3/multi-line-chart'
---
d3LineChart
~~~
```

we get

``` js
chartWidth = 775
---
import { chart as d3LineChart } with { chartWidth as width }
from '@d3/multi-line-chart'
---
d3LineChart
```

# Setting Up Living Papers

To get started with Living Papers yourself, the [Living Papers template](https://github.com/uwdata/living-papers-template/) is a great starting point. Simply copy the repository and mkae edits in the `index.md` file to create your own interactive documents. Any external files such as figures and datasets should go in the `assets` folder. 

Living Papers requires installing [`Node.js >= v17.17` and `npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [`pandoc >= 2.18`](https://pandoc.org/installing.html). Other optional software packages such as for R will require installation as well. (TeX Live)[https://www.tug.org/texlive/] is needed for publishing LaTeX/PDF output.

A workflow for setting up Living Papers will involve:

1. Cloning or copying the contents of the [template repository](https://github.com/uwdata/living-papers-template/)

2. Installing all the required packages

3. Running `npm i` to install JavaScript dependencies

4. Editing `index.md` to create your own content!

# Command Line Tools

You can run commands in the terminal to help you in managing your Living Papers document

::: table {#cl}
| Command | Output      |
| :--------- | ----------- | 
| `npm run build` | Compiles the article to a web page located in the `build` directory | 
| `npm run watch` | Launches a local web server and displays the web page in the browser. Automatically recompile `index.md` when changes are made| 
| `npm run deploy` | Publishes the article to [GitHub pages](https://pages.github.com/) by copying the content of the `build` folder to GitHub page| 

| Commands
:::
