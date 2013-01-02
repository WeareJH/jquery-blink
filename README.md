# jQuery Blink

A Simple and Lightweight jQuery blink plugin

## Usage

Assuming you have the following HTML:

```html
<div id="some-element">Hello World! I'm Blinking!</div>
```

You can blink it by using:

```jquery
$('#some-element').blink();
```

You can also override the default options/settings by sending an object:

```jquery
// This will blink #some-element 5 times, with each blink beeing a 300 milliseconds fade out/in.
$('#some-element').blink({
  'times': 5,
  'speed': 300
});
```