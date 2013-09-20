redactorjs-charmap
========================

Plugin for [Redactor](http://imperavi.com/redactor/) (WYSIWYG html editor) v9.0.3

Usage
------------------------
[Installation Redactor](http://imperavi.com/redactor/docs/)


Include the plugin files:

```html
<link rel="stylesheet" href="redactor/redactor.css" />
<!-- Plugin CSS -->
<link rel="stylesheet" href="redactor.charmap.css" />
<!-- ./Plugin CSS -->

<!-- Plugin JS -->
<script src="redactor.charmap.js"></script>
<!-- ./Plugin JS -->
<script src="redactor/redactor.min.js"></script>
```

Include plugin for redactor:
```javascript
$(document).ready(function () {
	$('#redactor').redactor({
		focus: true,
		plugins: ['charmap']
	});
});
```


License
-------
Copyright (c) 2013 Pakalo Evgeniy Licensed under the MIT license.

