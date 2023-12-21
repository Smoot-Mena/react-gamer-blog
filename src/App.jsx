import './App.css';

import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer';
import Homepage from './PAGES/Homepage';

import Blog from './PAGES/Blog';
import Blogs from './COMPONENTS/Blogs';
import Systems from './COMPONENTS/Systems';
import System from './PAGES/System';

import { Routes, Route } from 'react-router-dom';


function App() {

//   {blogs.map((blog) => (
//     <main key={blog.id}>
//         <img className="game-pic" src={blog.image} alt={blog.title} />
//         <header className="game-header">
//             <h2>{blog.title}</h2>
//         </header>
//         <section className="author">
//             <p>Author: {blog.author} | <time>{blog.time}</time></p>
//             <span className="share-links">Share this story on:
//                 <a className="twitter" href="https://twitter.com">
//                     <img src="src/IMAGES/twitter-white.png" alt="twitter" />
//                 </a>
//                 <a className="linkedIn" href="https://linkedIn.com">
//                     <img src="src/IMAGES/linkedIn-white.png" alt="linkedIn" />
//                 </a>
//                 <a className="facebook" href="https://facebook.com">
//                     <img src="src/IMAGES/facebook-white.png" alt="facebook" />
//                 </a>
//             </span>
//         </section>
//         <article className="container">
//             <p className="first-paragraph">{blog["first-paragraph"]}</p>
//             <q className="quote"><em>{blog.quote}</em></q>
//             <p className="second-paragraph">{blog["second-paragraph"]}</p>
//             <p className="third-paragraph">{blog["third-paragraph"]}</p>
//             <p className="fourth-paragraph">{blog["fourth-paragraph"]}</p>
//         </article>
//     </main>
// ))}

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogs/' element={<Blogs />} />
        <Route path='/blogs/:blog' element={<Blog />} />
        <Route path='/systems/' element={<Systems />} />
        <Route path='/systems/:system' element={<System />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;