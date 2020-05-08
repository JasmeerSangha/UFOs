# UFOs

## Overview
I have been requested to design a webapp that displays a dynamic table describing UFO sighting events in the US.

![picture alt](https://github.com/JasmeerSangha/UFOs/blob/master/webapp_preview.png "Preview Window")



## Resources
- Data Sources: data.js
- Software/Tools: VSCode, bootstrap4
- Languages: javascript, html

## Overview
This webapp impliments bootstrap4 and javascript components to create a front page focused on a dynamic table. The table ahs been designed to be filterable by all keys found in the [data.js](https://github.com/JasmeerSangha/UFOs/blob/master/static/js/data.js) file.

`SELECT * INTO current_retiring_emp
FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY emp_no ORDER BY from_date DESC) AS title_count
	 From emp_title) withtitle_count
	 where title_count =1;`

The final task was to determine the number of potential mentors per title at the company:
| Title | Number of Employees |
|----------------------------------------|-------|
| Engineer |2711|
| Senior Engineer |13651|
| Manager |2|
| Assistant Engineer |251|
| Staff |2022|
| Senior Staff |12872|
| Technique Leader |1609|

## Conclusion

The company is going to lose a larger portion of its senior roles compared to the intermediate level. The mentorship program should be implimented as soon as possible as a new influx of fresh faces will only lead to a large inexpereinced workforce.
