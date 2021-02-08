import logo from './logo.svg';
import './App.css';
import Resume from './component/Resume';
import Skills from './component/Skills';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

function App() {
  return (
   <div>
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
   </div>
  );
}

export default App;
