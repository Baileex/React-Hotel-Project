import React, { Component } from "react";

class Hotel extends Component {
  render() {
    return (
      <article className="hotel">
        <div className="img-container">
          <img
            width="200"
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="hotel"
          />
          <div className="hotel-info">
            <h3>Name :</h3>
            <h4>
              Rating :
              <div class="star-rating" title="50%">
                <div class="back-stars">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>

                  <div class="front-stars">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </h4>

            <h5>
              Facilities :
              <span>
                <i className="fas fa-caret-square-down"></i>
              </span>
              <ul>
                <li>1</li>
              </ul>
            </h5>
          </div>
        </div>
      </article>
    );
  }
}

export default Hotel;
