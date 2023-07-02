import logo from './logo.svg';
import './App.css';
import React from 'react';
import GeoLocation from "./GeoLocation";

 class App extends React.Component {
   render() {
     return (
         <div className={"App"}>
             <header className={"App-header"}>
                 <img src={logo} className={"App-logo"} alt={"logo"} />
                 <GeoLocation />
             </header>
         </div>
     )
   }
 }

export default App;
