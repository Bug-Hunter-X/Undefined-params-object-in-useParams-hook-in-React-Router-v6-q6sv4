```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is the source of the bug */}
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function User({params}){
  console.log(params)
  return <div>User {params.id}</div> 
}
export default App;
```