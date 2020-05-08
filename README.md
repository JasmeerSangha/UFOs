# UFOs

## Overview
I have been requested to design a webapp that displays a dynamic table describing UFO sighting events in the US.

![picture alt](https://github.com/JasmeerSangha/UFOs/blob/master/webapp_preview.png "Preview Window")



## Resources
- Data Sources: data.js
- Software/Tools: VSCode
- Languages: Python3, Java Script (ES6), Html5, CSS
- Packages: Bootstrap4, D3

## Overview
This webapp impliments bootstrap4 and javascript components to create a front page focused on a dynamic table. The table has been designed to be filterable by all keys found in the [data.js](https://github.com/JasmeerSangha/UFOs/blob/master/static/js/data.js) file, namely:
-Date
-City
-State
-Country
-Shape

__Usage Note:__ The page has been designed to allow for any combination of filters to be applied to the data set. The filters will layer ontop one another; displaying the custom information the user is looking for. Filtering with no restrictions or refreshing the page will reset all filters and display the entire data set.

## Recommendations
The current version of the app looks at static data, found in [data.js](https://github.com/JasmeerSangha/UFOs/blob/master/static/js/data.js), rather than live data. As seen in previous projects such as the [Mars Project](https://github.com/JasmeerSangha/Mission-to-Mars), information can be scraped from online sources and added to the data set whenever the webapp is accessed, allowing for the most up to date findings.
