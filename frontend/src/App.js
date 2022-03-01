// //import logo from './logo.svg';
// import './App.css';
// import Nav from './components/Nav';
// import Home from './components/Home';
// import Tweet from './components/Tweet';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//           <Nav />
//           <Routes>
//             <Route path="/" exact component={Home} />
//             <Route path="/tweets" exact component={Tweet} />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import * as React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Layout  from './components/Layout';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Tweet from './components/Tweet';

// const App = () => {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path='/' element={<Home />} />
//         <Route path="home" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="*" element={<p>There's nothing here: 404!</p>} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tweet" element={<Tweet />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}