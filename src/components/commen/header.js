import React, { Component } from 'react';

class Header extends Component {

  render() {

    return (

          <div className="row">
              <div className="col-md-2 p-0">
                  <div className="sidebar text-center">
                         <div className="navbar-brand">
                           Dashboard
                         </div>
                         <ul className="list-unstyled">
                               <li className="sidebar-items active"><a href=""><i className="fa fa-dashboard mr-3 fa-2x"></i>Dashboard</a></li>
                               <li className="sidebar-items"><a href=""><i className="fa fa-umbrella mr-3 fa-2x"></i>Products</a></li>
                               <li className="sidebar-items"><a href=""><i className="fa fa-calendar mr-3 fa-2x"></i>Sales Calender</a></li>
                               <li className="sidebar-items"><a href=""><i className="fa fa-signal mr-3 fa-2x"></i>Income</a></li>
                          </ul>
                   </div>
               </div>


               <div className="col-md-10">
          						<div className="navbar">
                  						       	<ul className="list-unstyled nav">
                                								<li className="nav-link custom-nav">
                                                      <a>
                                                            <i className="fa fa-bell"></i><span className="counter">12</span>
                                      								</a>
                                                </li>
                                								<li className="nav-link custom-nav">
                                                       <a>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18"><path d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"/></svg>
                                                       </a>
                                                  </li>
                  						        	</ul>
          						                	<ul className="list-unstyled nav">
                                    								<li className="nav-link custom-nav">
                                                          <span className="text-muted">Hello,</span>
                                                          <span className="font-weight-bold">User</span>
                                                    </li>
                                    								<li className="nav-item avatar dropdown custom-nav">
                                    									<a className="nav-link dropdown-toggle waves-effect waves-light custom-link" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    										<img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0" alt="avatar image" />
                                    									</a>
                                    									<div className="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                                    										<a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                                    										<a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                                    										<a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                                    									</div>
                                    								</li>
          					                   		</ul>
          						</div>
                	</div>



          </div>

    );
  }

}

export default Header;
