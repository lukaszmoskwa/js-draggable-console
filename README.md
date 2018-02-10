# js-draggable-console

## What?

This is a simple script that will display a draggable circle on your web page. When you click it, it will display a small window
with a console. Used for debug purpose.

## Why? 

There is no point in having 2 consoles (the browser one and this one together). But in some cases you cannot see immediately what is going on or what errors are being displayed, because you are on mobile. If you are using Cordova or Phonegap it could be usefull to see a browser-like console.

## Requirements

```javascript
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
```

## How?

Just download the script you can find in the ./js/ folder and include it in your website.

To print anything on your console, you can use 

```javascript
JDC.log("content");
JDC.warn("content");
JDC.error("content");
JDC.info("content");
```
or just keep using 

```javascript
console.log("content");
console.warn("content");
console.error("content");
```

It is also possible to write directly in the input some JS code and execute it.

## Screenshot

![](https://i.imgur.com/bhn3Yfx.png)

## License

Created for a learning purpose, free to use anywhere.

## TODO

Clear console with a command
Handle errors
