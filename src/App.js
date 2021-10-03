import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/courses'>
          <Courses></Courses>
        </Route>
      </Switch>
  </BrowserRouter>
    
    </div>
  );
}

export default App;
