// import './App.css';
// import Home from './component1/Home';
// import Navbar from './component1/Navbar';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Card from './component1/Card';
// import Notfound from './component1/Notfound';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar />
//         {/* <Card/> */}
//         <Routes>
//           <Route path="/card" exact element={<Card />} />
//           <Route path="/not-found" element={<Notfound />} />
//           <Route path="/" exact element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from 'react'
 import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Page/Navbar';
import Home from './Cart/Home'
import Cart from './Cart/Cart'

function App(){
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
