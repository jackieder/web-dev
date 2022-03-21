import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/Labs"
                         exact={true}
                         element={<Labs/>}/>
                  <Route path="/tuiter"
                         exact={true}
                         element={<Tuiter/>}/>
                  <Route path="/tuiter/home"
                         exact={true}
                         element={<HomeScreen/>}/>
                  <Route path="/tuiter/explore"
                         element={<ExploreScreen/>}/>
              </Routes>
          </div>
      </BrowserRouter>



  );
}
export default App;
