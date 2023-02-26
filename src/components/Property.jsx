import property1img from "../assets/images/property-1.jpg";
import property2img from "../assets/images/property-2.jpg";
import property3img from "../assets/images/property-3.jpg";
import property4img from "../assets/images/property-4.jpg";
import property5img from "../assets/images/property-5.jpg";
import property6img from "../assets/images/property-6.jpg";

const Property = () => {
  const divStyle = { "--width": "800", "--height": "533" };

  return (
    <section className="section property" aria-label="property" id="listing">
      <div className="container">
        <h2 className="h2 section-title">Featured Properties</h2>

        <p className="section-text">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>

        <ul className="property-list">
          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property1img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    10765 Hillshire Ave, Baton Rouge, LA 70810, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property2img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="59345 STONEWALL DR, Plaquemine, LA 70764, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    59345 STONEWALL DR, Plaquemine, LA 70764, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property3img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="3723 SANDBAR DR, Addis, LA 70710, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    3723 SANDBAR DR, Addis, LA 70710, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property4img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="LOT 21 ROYAL OAK DR, Prairieville, LA 70769, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    LOT 21 ROYAL OAK DR, Prairieville, LA 70769, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property5img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property-card">
              <figure className="card-banner img-holder" style={divStyle}>
                <img
                  src={property6img}
                  width="800"
                  height="533"
                  loading="lazy"
                  alt="5133 MCLAIN WAY, Baton Rouge, LA 70809, USA"
                  className="img-cover"
                />
              </figure>

              <button className="card-action-btn" aria-label="add to favourite">
                <ion-icon name="heart" aria-hidden="true"></ion-icon>
              </button>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    5133 MCLAIN WAY, Baton Rouge, LA 70809, USA
                  </a>
                </h3>

                <ul className="card-list">
                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="cube-outline"></ion-icon>
                    </div>

                    <span className="item-text">8000sqf</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="bed-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Beds</span>
                  </li>

                  <li className="card-item">
                    <div className="item-icon">
                      <ion-icon name="man-outline"></ion-icon>
                    </div>

                    <span className="item-text">4 Baths</span>
                  </li>
                </ul>

                <div className="card-meta">
                  <div>
                    <span className="meta-title">Price</span>

                    <span className="meta-text">$5000</span>
                  </div>

                  <div>
                    <span className="meta-title">Rating</span>

                    <span className="meta-text">
                      <div className="rating-wrapper">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <span>5.0(30)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Property;
