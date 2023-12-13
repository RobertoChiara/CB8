import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__A">
        <h3>Contacts</h3>
        <ul>
          <li>Support</li>
          <li>Report a problem</li>
          <li>Call Jeff Bezos</li>
        </ul>
      </div>
      <div className="footer__A">
        <h3>Terms and privacy policy</h3>
        <ul>
          <li>Cookie policy</li>
          <li>We don&apos;t care about your privacy</li>
          <li>Alexa listen everything you say</li>
        </ul>
      </div>
      <div className="footer__A">
        <h3>Socials</h3>
        <ul>
          <img
            src="https://img.icons8.com/material/24/facebook-new.png"
            alt="Facebook"
          />
          <img
            src="https://img.icons8.com/material/24/instagram-new--v1.png"
            alt="Instagram"
          />
          <img
            src="https://img.icons8.com/material/24/twitter--v2.png"
            alt="Twitter"
          />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
