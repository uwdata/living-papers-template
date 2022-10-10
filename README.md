# living-papers-template

A [Living Papers](https://github.com/uwdata/living-papers/) article starter template.
Copy this repository and edit to make your own article.

This template is set up to produce a web-based article from a Markdown source file named `index.md`. Any figures, datasets, and other external files should be placed in the `assets` folder.

View the published sample article content at [https://uwdata.github.io/living-papers-template/](https://uwdata.github.io/living-papers-template/).

For more usage examples, see the [example articles](https://github.com/uwdata/living-papers/tree/main/examples) in the main Living Papers repository.

## Instructions

### Pre-Requisites

Before working with Living Papers, set up your local environment:

1. Install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you don't have them already. We recommend using a node version manager like [nvm](https://github.com/nvm-sh/nvm). Node v16.17 or higher is recommended.
2. Install [pandoc >= 2.18](https://pandoc.org/installing.html). You should be able to run `pandoc` from the command line.
  - On Ubuntu, `apt` doesn't have the latest version. You can either go through pandoc's listed installation process or use [conda](https://docs.conda.io/en/latest/miniconda.html) (`conda install pandoc`).
3. Install other software packages as needed:
  - To use R code blocks, install [R](https://cloud.r-project.org/) along with the `knitr` package and other libraries you wish to use. For example,
  if you want to use tidyverse libraries and SVG graphics output:
    - `install.packages(c("knitr", "tidyverse", "svglite"))`
  - To publish LaTeX / PDF output,  install a TeX distribution such as [TeX Live](https://www.tug.org/texlive/). You should be able to run `pdflatex` and `bibtex` from the command line.

### Article Setup

- Clone or copy the content of this repository. For example, click the green "Code" button on GitHub, select "Download ZIP", and unpack into a new working folder.
- Run `npm i` in your working folder to install all JavaScript dependencies.
- Now you're ready to start writing!

### Article Development

- Run `npm run build` to compile your article to a web page. The output will be written to the `build` directory.
- Run `npm run watch` to "watch" your source `index.md` file and automatically recompile it when it changes. This command will also launch a local web server, open your browser, and automatically update the web page view upon updates. Use Control-C to stop watching and shut down the local server.
- Once your article is ready -- and if you are working in your own dedicated GitHub repo -- run `npm run deploy` to publish your article to [GitHub pages](https://pages.github.com/). This action copies the content of the `build` folder to your GitHub pages branch.
