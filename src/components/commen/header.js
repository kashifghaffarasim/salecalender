import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (


      <header className="header">
          <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                    <div class="navbar-header">
                          <button type="button" class="navbar-toggle navbar-toggle-sidebar collapsed">
                          MENU
                          </button>
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand" href="#">
                            Administrator
                          </a>
                    </div>
                </div>
          </nav>
      </header>



    );
  }

}

export default Header;
