import React, { Component } from "react";
import StarRating from "./StarRating";

class Hotel extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState(currentState => {
      return { showInfo: !currentState.showInfo };
    });
  };

  render() {
    const { hotel } = this.props;
    return (
      <article className="hotel">
        <div className="img-container">
          <img width="200" src={hotel.img} alt="hotel" />
          <div className="hotel-info">
            <h3 className="hotel-name">Name : {hotel.name}</h3>
            <h4>
              Rating :
              <StarRating rating={hotel.starRating} />
            </h4>

            <h5>
              Facilities :
              <span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down"></i>
              </span>
              <ul className="facility">
                {this.state.showInfo &&
                  hotel.facilities.map(facility => {
                    return <li >{facility}</li>;
                  })}
              </ul>
            </h5>
          </div>
        </div>
      </article>
    );
  }
}

export default Hotel;
