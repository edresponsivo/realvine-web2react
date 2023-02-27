import { pageLinks } from "../../data";
import PageLink from "./PageLink";

const PageLinks = () => {
  return (
    <ul className="navbar-list">
      {pageLinks.map((pageLink) => {
        const { id, href, text } = pageLink;
        return <PageLink key={id} {...pageLink} />;
      })}
    </ul>
  );
};
export default PageLinks;
