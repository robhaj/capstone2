# Untitled

## Summary

My plan is to create an app that makes it easier to contribute to open source projects and issues at a beginner and intermediate level. Using several API calls I can return the raw code from any javascript file in a repo with an open issue. Using an Abstract Syntax Tree and a TreeWalker conforming to Mozilla's JS Parser API I can grade the complexity of the code using the following methods:

- Lines of code

- Number of parameters from the function signature

- Cyclomatic complexity: Defined by Thomas J. McCabe in 1976, this is a count of the number of distinct paths through a block of code.

- Cyclomatic complexity density: A modification of the CC metric re-expressed as a percentage of the logical lines of code.

- Halstead metrics: Defined by Maurice Halstead in 1977, these metrics are calculated from the numbers of operators and operands in each function.

- Maintainability index: Defined by Paul Oman & Jack Hagemeister in 1991, this is a logarithmic scale from negative infinity to 171, calculated from the logical lines of code, the cyclomatix complexity and the Halstead effort.

- Dependencies: A count of the calls to CommonJS and AMD require.

- First-order density: The percentage of all possible internal dependencies that are actually realized in the project.

- Change cost: The percentage of modules affected, on average, when one module in the project is changed.

- Core size: The percentage of modules that are both widely depended on and themselves depend on other modules.

## Technologies
- Node.js
- React FrontEnd
- Firebase backend
- Gulp
- Jasmine testing
- Sass
- Bootstrap

### APIs

- GitHub (Search/Code/Repo)
- [Escomplex](https://github.com/jared-stilwell/escomplex)
- [Mozilla JS Parser](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)

## MVP

  MVP will consist of being able to view recent open issues from the GitHub API, where the repo is written in primarily javascript, and be able to filter by complexity using escomplex.  

## Additional features

- Polished UI
- Responsive UI
- Automatic Pull Requests to add a license        through the GitHub API
