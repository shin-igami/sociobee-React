import './App.css';
import Main from './components/main';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Demo from './components/demo';
import BlogState from './context/blogState';
import Editor from './components/editor/editor';
import YourBlog from './components/Your Blog/YourBlog'
import Update from './components/Update/Update';
import SpecificBlog from './components/Specific Blog/SpecificBlog';
function App() {
  return (
    <BlogState>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route exact path="/" element={<Main/>}/>
     <Route exact path ="/login" element={<Login/>}/>
     <Route exact path ="/success" element={<Demo/>}/>
     <Route exact path ="/editor" element={<Editor/>}/>
     <Route exact path ="/yourblogs" element={<YourBlog/>}/>
     <Route exact path ="/updateblog" element={<Update/>}/>
     <Route  path ="/blog" element={<SpecificBlog/>}/>
   </Routes>
   </BrowserRouter>
   </BlogState>
  );
}

export default App;
