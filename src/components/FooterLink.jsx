import { capitalize } from "./utils";

const FooterLink = (props) => {
  const { href, text } = props;

  return (
    <li>
      <a href={href} className="footer-link">
        <ion-icon name="chevron-forward"></ion-icon>
        <span className="span">{capitalize(text)}</span>
      </a>
    </li>
  );
};
export default FooterLink;
