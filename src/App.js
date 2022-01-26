import React, { Component } from 'react';
import { Header, Home, Contact } from './components';
/* import  Home  from './features/home';
import Services from './features/servicesPgae';
import Contact from './features/contact';
import Portfolio from './features/portfolio'; */
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const HeaderWithRouter = withRouter(Header);
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage:0,
      scrollTop:0
    }
  }
  updateSelectedPage = (index)=>{
    this.setState({
      currentPage : index
    })
  }
  onScroll = (e)=>{
    const scrollTop =e.target.scrollTop;
    this.setState({
      scrollTop:scrollTop
    })
  }
  render(){
    return (
      <Router>
        <div
        className="App d-flex flex-column"
        onScroll = { this.onScroll }
        >
          <HeaderWithRouter scrollTop = { this.state.scrollTop } />
          <Switch>
            <Route path="/home"  component={ Home } />
            <Route path="/contact"  component={ Contact } />
           {/*<Route path="/services" component={ Services }/>
            
            <Route path="/portfolio"  component={ Portfolio } /> */}
            <Redirect to="/home" />
          </Switch>
        </div>    
      </Router>
    );
  }
}

export default App;
