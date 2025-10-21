## create file : .env

```.env
SECRET=MYSECRETCODE
```

#### Installation to connect with env
```bash
npm i dotenv
```


```js
if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
console.log(process.env);
console.log(process.env.SECRET);
```