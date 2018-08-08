import React, { Component } from 'react';
import moment from 'moment';
import FullCalendar from 'fullcalendar-reactwrapper';


class Calender extends Component {
      constructor(props) {
          super(props);
          this.state = {
    events:[
                {
                    title: 'All Day Event',
                    start: '2017-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2017-05-07',
                    end: '2017-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2017-05-11',
                    end: '2017-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2017-05-12T10:30:00',
                    end: '2017-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2017-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2017-05-28'
                }
            ],
          }
      }

  render() {
    return (

        <div className="row">
  				 	<div className="col-md-12 p-0">
  					  	<div className="main-elements">
  							    <div className="row ">
                           <div className="col-md-2"> </div>
                           <div className="col-md-10  pt-4 pl-7">
                             <h2 className="font-weight-bold dash-head">Sales Calendar</h2>
											       <div className="table-responsive table-bg">

                                   <span className="d-flex justify-content-between align-items-center table-heading">
                                      <h4>Recent Orders</h4>
                                      <button className="repeat-btn"><i className="fa fa-repeat"></i></button>
                                   </span>

                                    <table className="table px-3">
            													<thead>
            														<tr>
            															<th scope="col">Name</th>
            															<th scope="col">Event Name</th>
            															<th scope="col">PAX</th>
            															<th scope="col">Day and Date</th>
            															<th scope="col">Time</th>
            															<th scope="col">Label</th>
            														</tr>
            													</thead>
            													<tbody>
            														<tr>
            															<td><strong>Winsenn Tendra</strong>
            																<span className="d-block span">just now</span>
            															</td>
            															<td>Yoga class in singapore</td>
            															<td>3 adults,1 child</td>
            															<td>Mon, 25 Aug 2018</td>
            															<td>07:00 AM</td>
            															<td><button className="table-btn">Paid</button></td>
            														</tr>
            														<tr>
            															<td><strong>Winsenn Tendra</strong>
            																<span className="d-block span">just now</span>
            															</td>
            															<td>Yoga class in singapore</td>
            															<td>3 adults,1 child</td>
            															<td>Mon, 25 Aug 2018</td>
            															<td>07:00 AM</td>
            															<td><button className="table-btn btn-purple">Paid</button></td>
            														</tr>
            														<tr>
            															<td><strong>Winsenn Tendra</strong>
            																<span className="d-block span">just now</span>
            															</td>
            															<td>Yoga class in singapore</td>
            															<td>3 adults,1 child</td>
            															<td>Mon, 25 Aug 2018</td>
            															<td>07:00 AM</td>
            															<td><button className="table-btn btn-red">Paid</button></td>
            														</tr>
            													</tbody>
            												</table>
            													<span>
            														<button className="w-100 showmore-btn">show More</button>
            													</span>
										        	</div>
                          </div>
                      </div>
                         <div className="row ">
                             <div className="col-md-2"> </div>
                             <div className="col-md-10  pt-4 pl-7">
                              <div className="selection-select">
                                   <div className="btn-group">
                                         <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                           <i className="fa fa-filter"></i>
                                         </button>
                                         <div className="dropdown-menu dropdown-menu-right">
                                           <button className="dropdown-item" type="button">Action</button>
                                           <button className="dropdown-item" type="button">Another action</button>
                                           <button className="dropdown-item" type="button">Something else here</button>
                                         </div>
                                  </div>
                              </div>
                                <div className="select-outer">
                                      <select id="mounth">
                                              <option value="hide"> September</option>
                                              <option value="january" rel="icon-temperature">January</option>
                                              <option value="february">February</option>
                                     </select>

                                </div>

                             <FullCalendar
                                    header = {{
                                       left: 'prev,next today myCustomButton',
                                       center: 'title',
                                       right: 'month,basicWeek,basicDay'
                                   }}
                                   defaultDate={'2018-09-12'}
                                   navLinks= {true} // can click day/week names to navigate views
                                   editable= {true}
                                   eventLimit= {true} // allow "more" link when too many events
                                   events = {this.state.events}
                               />
                             </div>
                        </div>
                   </div>
                </div>
            </div>


    );
  }
}

export default Calender;
