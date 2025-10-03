Include Folder :
    we can devide ejs foder in different part and include it. It make more Readable

Example :
    <%- include("includes/head.ejs")%>


## EJS Mate :

#### Important package Used : `Ejs mate`

#### Installation :

    npm install ejs-mate --save

### middleware use :
```js 
const ejsMate = require(`ejs-mate`);
app.engine("ejs", ejsMate);

```

```html
<div class="container"><%- body %></div>
```

```html
<% layout("/layouts/boilerplate") %>
```

