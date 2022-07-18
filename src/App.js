import './App.css';

import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import From from './Components/From';
import Products from './Components/Products';
import EditInfo from './Components/EditInfo';

function App() {
  return (
    <div>

<Header></Header>
      <Routes>
        <Route path="/" element={<From></From>} />
        <Route path='editInfo/:id' element={<EditInfo></EditInfo>}></Route>
        <Route path="/products" element={<Products></Products>} />
      </Routes>
  
    </div>
  );
}

export default App;
