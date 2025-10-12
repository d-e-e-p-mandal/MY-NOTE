## Merger Params :

```js
//app.js
app.use("/listings/:id/reviews",listings); //parent route
```
**To send the parent route form one file to another file we use mergeParams inside the `express.Router()`.**


```js
// router file :
const router = express.Router({mergeParams: true});

```
