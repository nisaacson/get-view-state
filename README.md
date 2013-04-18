# Get View State
Extract the view state value from an html page parsed with [cheerio](https://github.com/MatthewMueller/cheerio)
[![Build Status](https://travis-ci.org/nisaacson/get-view-state.png)](https://travis-ci.org/nisaacson/get-view-state)
# Installation

```bash
npm install -S get-view-state
```

# Usage

```js
var inspect = require('eyespect').inspector();
var cheerio = require('cheerio')
var getViewState = require('get-view-state')

// file path to a webpage with a view state element in the html
var filePath = path.join(__dirname, 'data/yesViewState.html') 
var html = fs.readFileSync(filePath, 'utf8')
var $ = cheerio.load(html)

// extract the value attribute from the view state element
var viewState = getViewState($)
inspect(viewState, 'extracted view state')
```
