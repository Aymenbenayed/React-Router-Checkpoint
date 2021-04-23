import './App.css';
import MovieApp from './Components/MovieApp';
import Descriptions from './Components/Descriptions';


import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact path="/" component={MovieApp}/> 
        <Route  path="/Descriptions/:Id" component={Descriptions}/> 
      </Switch> 
      {/* <MovieApp/> */}
    </div>
  );
}

export default App;
