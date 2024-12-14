import './App.css';

import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer';
import Homepage from './PAGES/Homepage';

import Blog from './PAGES/Blog';
import Blogs from './COMPONENTS/Blogs';
import Systems from './COMPONENTS/Systems';
import System from './PAGES/System';

import { Routes, Route } from 'react-router-dom';

import systems from "./api/systemData.json";


function App() {

  return (
    <>
      <Navbar systems={systems} />

      <Routes>
        <Route path='/' element={<Homepage systemData={systems} />} />
        <Route path='/blogs/' element={<Blogs />} />
        <Route path='/blogs/:blog' element={<Blog />} />
        <Route path='/systems/' element={<Systems systems={systems}/>} />
        <Route path='/systems/:system' element={<System />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;