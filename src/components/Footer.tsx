import config from '../config';
import Icon from './Icon';

// TODO(step 4): styling.
export default function Footer() {
  return (
    <footer>
      <ul>
        {config.socialLinks.map(({ name, url, icon }) => (
          <li key={url}>
            <a href={url}>
              <Icon name={icon} />
              <span className="sr-only">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <p>&copy; Jeff Umbricht</p>
    </footer>
  );
}
