import React, { Component } from 'react';
import Calender from './components/calender/calender';
import Header from './components/commen/header';

class App extends Component {

  render() {
    return (

      <main role="main" className="App">
            <div className="container-fluid">
               <Header />
               <Calender />
            </div>
      </main>

    );
  }
}

export default App;
