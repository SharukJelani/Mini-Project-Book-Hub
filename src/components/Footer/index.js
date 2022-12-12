import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import BookHubThemeContext from '../../context/BookHubThemeContext'
import './index.css'

const Footer = () => (
  <BookHubThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textColor = !isDarkTheme ? 'light-theme-text' : 'dark-theme-text'

      return (
        <div className="footer-container">
          <div className="responsive-footer">
            <button type="button" className="footer-buttons">
              <FaGoogle className={textColor} size={20} />
            </button>

            <button type="button" className="footer-buttons">
              <FaTwitter className={textColor} size={20} />
            </button>
            <button type="button" className="footer-buttons">
              <a href="https://www.instagram.com/sharukh.jelani/" target="/">
                <FaInstagram className={textColor} size={20} />
              </a>
            </button>

            <button type="button" className="footer-buttons">
              <FaYoutube className={textColor} size={20} />
            </button>
          </div>
          <p className={`contact-us-heading ${textColor}`}>Contact us</p>
        </div>
      )
    }}
  </BookHubThemeContext.Consumer>
)
export default Footer
