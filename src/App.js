import React from 'react';
import {Login} from './Component/Login/LoginComponent';
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return(
      <React.Fragment>
        <Login/>
      </React.Fragment>
    );
  }
}

export default App;
