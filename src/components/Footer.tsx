import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '@/styles/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section: Newsletter Subscription and Links */}
      <div className="footer-top">
        {/* Logo and Newsletter */}
        <div className="footer-newsletter">
          <h1 className="footer-logo">The Perfume</h1>
          <p className="newsletter-title">Subscribe to Our Newsletter:</p>
          <p className="newsletter-description">Receive Updates on New Arrivals and Special Promotions!</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email here"
              className="newsletter-input"
            />
            <button className="newsletter-submit">Submit</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon facebook" />
            <FaTwitter className="icon twitter" />
            <FaLinkedin className="icon linkedin" />
            <FaInstagram className="icon instagram" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div>
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-list">
              <li>Fashion</li>
              <li>Sports</li>
              <li>Indoor</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Shopping</h3>
            <ul className="footer-list">
              <li>Payments</li>
              <li>Delivery options</li>
              <li>Buyer protection</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Customer care</h3>
            <ul className="footer-list">
              <li>Help center</li>
              <li>Terms & Conditions</li>
              <li>Privacy policy</li>
              <li>Returns & refund</li>
              <li>Survey & feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-heading">Pages</h3>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        © 2023 Local Face Inc. All rights reserved
      </div>
    </footer>
  );
}
