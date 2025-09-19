## Creating the Model and Schema :

We create Model in different folder for handle complex system.

#### chat will have :
(_id, from, to, message, created_at)

id -> string
from -> string
to -> string
message -> string
created_at -> date



#### Require models in js
    Example :
```js
const Chat = require("./models/chat.js");


let chat1 = newChat({
    from : "neha",
    to : "priya",
    message : "send me your exam sheets",
    created_at : new Date()
});
```