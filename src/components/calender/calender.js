import React, { Component } from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';


class Calender extends Component {
      constructor(props) {
          super(props);
          this.state = {
            date: "May",
            events:[
                        {
                            title: 'Long Event',
                            start: '2017-05-07',
                        },
                        {
                            title: 'New Event',
                            start: '2017-05-08',
                        },
                        {
                            title: 'New Event Test',
                            start: '2017-05-09',
                        }
                    ],
                    filter: [
                              {
                                title: 'Long Event',
                              },
                              {
                                title: 'New Event',
                              },
                              {
                                 title: 'New Event Test',
                              }
                    ]
          };
          localStorage.setItem('events', JSON.stringify(this.state.events));
          this.filter = this.filter.bind(this);
      }


   filter(e){
     const value = e.target.id
     const event = JSON.parse(localStorage.getItem("events"));
     const el = event.find((element) => {
            return element.title === value;
       })
     const   events = [{title: el.title,start: el.start }]
     this.setState({events})
  }

  render() {

    const event = this.state.events;
    const filter = this.state.filter;
    const date = this.state.date;

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


                                         {
                                            filter.map(ev =>{
                                              return (
                                                <button className="dropdown-item"
                                                 type="button"
                                                  key={ev.title}
                                                  id = {ev.title}
                                                  onClick={this.filter} >
                                                  {ev.title}
                                                 </button>

                                                  );
                                                })
                                          }
                                         </div>
                                  </div>
                              </div>
                                <div className="select-outer">
                                      <select id="mounth">
                                              <option value="hide"> {date}</option>
                                     </select>
                                </div>

                             <FullCalendar
                                    header = {{
                                       left: 'prev,next today myCustomButton',
                                       center: 'title',
                                       right: 'month,basicWeek,basicDay'
                                   }}
                                    defaultDate={'2017-05-07'}
                                    navLinks= {true} // can click day/week names to navigate views
                                    editable= {true}
                                    events = {event}
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
