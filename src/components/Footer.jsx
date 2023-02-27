const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <ion-icon name="business-outline"></ion-icon> Realvine
            </a>

            <p className="footer-text">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
            </p>
          </div>

          <ul className="footer-list">
            <p className="footer-list-title">Company</p>
            <li>
              <a href="#about" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">About us</span>
              </a>
            </li>

            <li>
              <a href="#service" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Services</span>
              </a>
            </li>

            <li>
              <a href="#listing" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Pricing</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Blog</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Login</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <p className="footer-list-title">Useful Links</p>
            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Terms of Services</span>
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Privacy Policy</span>
              </a>
            </li>

            <li>
              <a href="#listing" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Listing</span>
              </a>
            </li>

            <li>
              <a href="#contact" className="footer-link">
                <ion-icon name="chevron-forward"></ion-icon>

                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Details</p>
            </li>

            <li className="footer-item">
              <ion-icon name="location-outline"></ion-icon>

              <address className="address">
                C/54 Northwest Freeway, <br />
                Suite 558,
                <br />
                Houston, USA 485
                <a href="#" className="address-link">
                  View on Google map
                </a>
              </address>
            </li>

            <li className="footer-item">
              <ion-icon name="mail-outline"></ion-icon>

              <a href="mailto:contact@example.com" className="footer-link">
                contact@example.com
              </a>
            </li>

            <li className="footer-item">
              <ion-icon name="call-outline"></ion-icon>

              <a href="tel:+152534468854" className="footer-link">
                +152 534-468-854
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 Realvine. All Right Reserved by{" "}
            <a href="#" className="copyright-link">
              codewithsadee
            </a>
            .
          </p>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
