import './App.css';//importing the styling of the page from the App CSS
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
//Import the content from the different files within the 'component folder
import home from './components/Home';
import skills from './components/Skills';
import profile from './components/Profile';
import contact from './components/Contact';
import education from './components/Education';
import experience from './components/Experience';

function App() {
  return (
    <Router>
      <>
      <Route exact path = '/' component ={home}/>
      <Switch>
        <Route path ="skills" component = {skills}/>
        <Route path ="profile" component = {profile}/>
        <Route path ="contact" component ={contact}/>
        <Route path ="education" component = {education}/>
        <Route path ="experience" component ={experience}/>

      </Switch>
      </>
    </Router>

   

   
  );
}

export default App;
