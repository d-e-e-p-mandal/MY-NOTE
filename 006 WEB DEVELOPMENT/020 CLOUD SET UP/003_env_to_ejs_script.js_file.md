
### .env
```.env
MAPBOX_TOKEN=your_mapbox_token_here
```

### app.js server
```js 
require('dotenv').config();
app.locals.MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
```

### ejs
```html
<script>
  const mapToken = "<%= MAPBOX_TOKEN %>";
</script>
<script src="/js/script.js"></script>
```

### script.js
```js
mapboxgl.accessToken = mapToken; // use the token here
```