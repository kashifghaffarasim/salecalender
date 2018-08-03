import React, { Component } from 'react';
import Calender from './components/calender/calender';
import Element from './components/products/showmore';

class App extends Component {
      constructor(props) {
          super(props);

      }

  render() {
    return (
      <div className="App">
          <div className="row">
             <div className="col-md-12 text-center">
                <Element />
            </div>
          </div>
         <div className="row">
            <div className="col-md-2" ></div>
             <div className="col-md-8" >
                  <Calender />
              </div>
                <div className="col-md-2" ></div>
          </div>

      </div>
    );
  }
}

export default App;
