# Once
#### A little snippet to fire an event...once

## Example usage
```javascript
  var element = document.getElementById('header');
  var once = new Once();
  once.listenOnce('click', element, function() { return console.log('you are using once.js') });
```