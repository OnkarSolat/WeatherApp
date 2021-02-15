# @mapbox/query-selector-contains-node

Check whether a DOM node is contained by any other node on the page matching a selector, or matches the selector itself.

## Installation

```
npm install @mapbox/query-selector-contains-node
```

This package provides a CommonJS module, so you'll need to be using a bundler (Webpack, Rollup, Browserify, etc.).

## API

### querySelectorContainsElement

`querySelectorContainsElement(selector, node)`

Returns `true` if any of the `node`'s ancestors match the `selector`.
Also returns `true` if the `node` itself matches the `selector`.
Otherwise, returns `false`.

#### selector

Type: `string`.
**Required.**

A CSS selector suitable for [`document.querySelectorAll()`].

#### node

Type: `Node`.
**Required.**

## Example

Given the following HTML:

```html
<div>
  <div id="one" foo>
    <div>
      <div id="two"></div>
    </div>
  </div>
  <div id="three"></div>
</div>
```

Then:

```js
querySelectorContainsElement('[foo]', document.getElementById('one')); // true
querySelectorContainsElement('[foo]', document.getElementById('two')); // true
querySelectorContainsElement('[foo]', document.getElementById('three')); // false
```

## Browser support

Browser support is determined by support for [`document.querySelectorAll()`].
So: IE 8 with caveats, otherwise IE 9+.

[`document.querySelectorAll()`]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
