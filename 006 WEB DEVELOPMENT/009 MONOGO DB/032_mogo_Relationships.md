# Mongo Relationships :

1. One to one 
2. One to many
3. Many to many


### One to Many :

#### Approach 1 : One to Few 
    Store the child doucument inside the parent.
    Example : Store address inside the user schema.

```js
    {
        _id: ObjectId("651d1b116976164a9cbf5520"),
        username: 'sherlockholmes',
        address: [
            { location: '221B Baker Street', city: 'London' },
            { location: 'P36 DownTown', city: 'London'}
        ],
        --v: 1
    },
```