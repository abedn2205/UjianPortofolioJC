import logo from './logo.svg';
import './App.css';
import Resume from './component/Resume';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Home from './component/Home';

function App() {
  return (
   <div>
     <Home/>
     <div class="container">
      <div class="row">
        <div class="col"><Resume/></div>
      </div>
      <div class="row">
        <div class="col-6"> <Skills/></div>
        <div class="col-6"><Contact/></div>
      <div class="col-6"> <Portfolio/></div>
      </div>
     </div>
     <Blog/>
   </div>
  );
}

export default App;
