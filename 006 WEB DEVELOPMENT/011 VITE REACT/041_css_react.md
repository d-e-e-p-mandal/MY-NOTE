
# React CSS :
In react if we don't import css file but import another in another file it works like globally. It may be the issue.
So we use : `fileName.module.css`

## fileName.module.CSS
import module css file and store in variable.

```js
    import style form fileName.module.css;

    //in component :
    className = {style.class}
```