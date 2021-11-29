
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


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
       </Switch>
     </Router>
    </div>
  );
}

export default App;
