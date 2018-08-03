import React, { Component } from 'react';
import ShowMore from 'react-show-more';


class Element extends Component {
      constructor(props) {
          super(props);
          this.state = {
                   cars: [
                   { "name" : "Audi", "country" : "Germany"},
                   { "name" : "BMW", "country" : "Germany" },
                   { "name" : "Chevrolet", "country" : "USA" },
                   { "name" : "Citroen", "country" : "France" },
                   { "name" : "Hyundai", "country" : "South Korea" },
                   { "name" : "Mercedes-Benz", "country" : "Germany" },
                   { "name" : "Renault", "country" : "France" },
                   { "name" : "Seat", "country" : "Spain" },
                   { "name" : "Hyundai", "country" : "South Korea" },
                   { "name" : "Mercedes-Benz", "country" : "Germany" },
                   { "name" : "Renault", "country" : "France" },
                   { "name" : "Seat", "country" : "Spain" },
                 ],
                 itemsToShow: 3,
                 expanded: false
              }

            this.showMore = this.showMore.bind(this);
      }

      showMore() {
               this.state.itemsToShow === 3 ? (
               this.setState({ itemsToShow: this.state.cars.length, expanded: true })
             ) : (
               this.setState({ itemsToShow: 3, expanded: false })
             )
      }

  render() {
    return (

      <div className="row">
        <div className="col-md-12">

              <ul>
               {this.state.cars.slice(0, this.state.itemsToShow).map((car, i) =>
                <li key={i}>{car.name} - {car.country}</li>
               )}
              </ul>

            <p>
              <a className="btn btn-primary" onClick={this.showMore}>
                   {this.state.expanded ? (
                      <span>Show less</span>
                    ) : (
                      <span>Show more</span>
                    )
                   }
                  </a>
            </p>


         </div>

       </div>

    );
  }
}

export default Element;
