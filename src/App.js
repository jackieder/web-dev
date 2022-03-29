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
import ProfileScreen from "./components/tuiter/ProfileScreen";
import EditProfileScreen from "./components/tuiter/EditProfileScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        element={<Labs/>}/>
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="profile/edit"
                                   element={<EditProfileScreen/>}/>
                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}
                        </Route>
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>


    );
}

export default App;
