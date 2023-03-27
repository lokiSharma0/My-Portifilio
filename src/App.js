import './App.css';
import  {Header} from './Components/header/Header'
import {Nav} from './Components/nav/Nav'
import {About} from './Components/about/About'
import {Experience} from './Components/experience/Experience'
import {Portifilio} from './Components/portifilio/Portifilio'
import {Contact} from './Components/contact/Contact'
import {Footer} from './Components/footer/Footer'
function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portifilio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
