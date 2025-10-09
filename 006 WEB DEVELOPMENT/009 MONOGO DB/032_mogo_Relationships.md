# Mongo Relationships :

1. One to one 
2. One to many
3. Many to many

## 1. One to one 

## 2. One to Many :

#### Approach 1 : One to Few (x < 100)
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

#### Approach 2 : (100 < x < 1000)
    Store a reference to the child document inside parent.

>Type 1 : Store Reference Id 
>Type 2 : Store total Object, but by default reference Id store in Database.

```js
    {
        _id: ObjectId("651d223314f1e136d6766e14"),
        name: 'Rahul kumar',
        orders:[
            objectId("651d1e5a06e366283d3ae002"),
            objectId("651d1e5a06e366283d3ae003"),
        ]
        __v: 0
    }

```

#### Approach 3 : One to Squillions (x > 1000)
    Store a reference to the parent document inside child. (Opposite of approach 2)


```js
{
    _id: ObjectId("651d27deaadf315deo8b7fa9"),
    content: 'Hellow World',
    likes: 7,
    user: ObjectId("651d27deaadf315de08b7fa8"),
    --v:0
},

{
    _id: ObjectId("651d27deaadf315deo8b7fb8"),
    content: 'Bye Bye',
    likes: 23,
    user: ObjectId("651d27deaadf315de08b7fc9"),
    --v:0
}
```


## 3. Many to many 
