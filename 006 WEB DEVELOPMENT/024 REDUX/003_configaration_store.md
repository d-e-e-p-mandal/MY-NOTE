Create a file named `src/app/store.js`. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

```js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
```