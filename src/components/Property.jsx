const divStyle = { "--width": "800", "--height": "533" };
const starIcon = <ion-icon name="star"></ion-icon>;

const displayStarIcon = (rating) => {
  let starIconArr = [];
  const ratingParsed = Number(rating) - 1;
  for (let i = 1; i <= ratingParsed; i++) {
    starIconArr.push(starIcon);
  }
  return starIconArr.map((icon) => icon);
};

const Property = (props) => {
  //   console.log(props);
  const { imgUrl, address, size, bedsQty, bathsQty, price, rating, ratingQty } =
    props;

  return (
    <li>
      <div className="property-card">
        <figure className="card-banner img-holder" style={divStyle}>
          <img
            src={imgUrl}
            width="800"
            height="533"
            loading="lazy"
            alt={address}
            className="img-cover"
          />
        </figure>

        <button className="card-action-btn" aria-label="add to favourite">
          <ion-icon name="heart" aria-hidden="true"></ion-icon>
        </button>

        <div className="card-content">
          <h3 className="h3">
            <a href="#" className="card-title">
              {address}
            </a>
          </h3>

          <ul className="card-list">
            <li className="card-item">
              <div className="item-icon">
                <ion-icon name="cube-outline"></ion-icon>
              </div>

              <span className="item-text">{size}sqf</span>
            </li>

            <li className="card-item">
              <div className="item-icon">
                <ion-icon name="bed-outline"></ion-icon>
              </div>

              <span className="item-text">{bedsQty} Beds</span>
            </li>

            <li className="card-item">
              <div className="item-icon">
                <ion-icon name="man-outline"></ion-icon>
              </div>

              <span className="item-text">{bathsQty} Baths</span>
            </li>
          </ul>

          <div className="card-meta">
            <div>
              <span className="meta-title">Price</span>

              <span className="meta-text">${price}</span>
            </div>

            <div>
              <span className="meta-title">Rating</span>

              <span className="meta-text">
                <div className="rating-wrapper">
                  {starIcon}
                  {displayStarIcon(rating)}
                </div>

                <span>
                  {rating}({ratingQty})
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Property;
