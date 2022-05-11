# localstorage-with-proxy

## Usage

```html
<script src="storage.js"></script>

<button id="button">Counter++</button>

<script>
  button.addEventListener('click', function() {
    if (!storage.name) storage.name = {};
    if (!storage.name.counter) storage.name.counter = 0;
    storage.name.counter++;
  })
</script>
```

##### Check localStorage to see the result live
