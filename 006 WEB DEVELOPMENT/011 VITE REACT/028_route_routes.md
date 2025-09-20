Route :

If you want to redirct don't use nav section

npm install react-router-dom
// "dependencies": {
//   "react-router-dom": "^6.x.x", // the exact version may vary
//   ...
// }
``` js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Unit1 from './Component/Unit1';
import Unit2 from './Component/Unit2';
import Unit3 from './Component/Unit3';

function OperatingSystem() {
  return (
    <BrowserRouter>
      <div>
        <h1>Operating System</h1>

        {/* Navigation Links : If you want to redirct don't use nav section */}
        <nav>
          <Link to="/">Unit 1</Link> |{" "}
          <Link to="/unit2">Unit 2</Link> |{" "}
          <Link to="/unit3">Unit 3</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Unit1 />} />
          <Route path="/unit2" element={<Unit2 />} />
          <Route path="/unit3" element={<Unit3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default OperatingSystem;
```

## Use : Susspense
#### Loading : 

