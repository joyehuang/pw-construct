import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <div className="corner-accent top-left">
        <div className="gradient-strip"></div>
      </div>
      <div className="corner-accent bottom-right">
        <div className="gradient-strip"></div>  
      </div>
      <nav className="nav-icons">
        <a href="mailto:your.email@example.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/joyehuang" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/de-shiou-huang-4246202a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>
      <main>{children}</main>
    </div>
  );
}