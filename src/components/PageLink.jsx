const PageLink = ( props ) => {

    const {href, text } = props;
  return (
    <li>
      <a href={href} className="navbar-link" data-nav-link>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
