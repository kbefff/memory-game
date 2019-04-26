import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App  = () => 
  // eslint-disable-next-line no-unused-expressions
  <Router>
    <div>
      <Navbar />
      <Wrapper>
          {/* <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/discover' component={Discover} />
          <Route exact path='/search' component={Search} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router> 


export default App;
