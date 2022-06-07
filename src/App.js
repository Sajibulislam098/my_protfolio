
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import ProjectsDetails from './components/ProjectsDetails/ProjectsDetails';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route  path="/home">
           <Home />
         </Route>
         <Route  path="/about">
           <About />
         </Route>
         <Route  path="/contact">
           <Contact />
         </Route>
         <Route  path="/projects">
           <Projects />
         </Route>
         <Route  path="/blogs">
           <Blogs />
         </Route>
         <Route  path="/projectDetail/:id">
           <ProjectsDetails />
         </Route>
         <Route  path="*">
           <NotFound />
         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
