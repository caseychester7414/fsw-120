import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
// import Footer from './Footer';
import Home from './Home';
// import About from './about';
import Service from './Service';

function App() {
    return (
        <div className='app-wrapper'>
            <Navbar />
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                {/* <Route path='/about' component={About}/> */}
                <Route path='/service' component={Service}/>
            </Switch>
            {/* <Footer /> */}
            
        </div>
    );
}
export default App;