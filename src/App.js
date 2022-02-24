import './App.css';
import Header from '../src/header/header'
import Body from './body/body';
import Footer from './footer/footer';
import React from 'react';
class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./js/main.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render(){ 
    return( 
  <div className = "App" >
    <Header/>
    <Body / >
    <Footer / >
     </div>
  );
}
}

export default App;