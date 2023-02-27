import { capitalize } from "./utils";

const PageLink = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href} className="navbar-link" data-nav-link>
        {capitalize(text)}
      </a>
    </li>
  );
};
export default PageLink;
