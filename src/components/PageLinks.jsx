import { pageLinks } from "../../data";
import PageLink from "./PageLink";

const PageLinks = () => {
  return (
    <ul className="navbar-list">
      {pageLinks.map((pageLink) => (
        <PageLink key={pageLink.id} {...pageLink} />
      ))}
    </ul>
  );
};
export default PageLinks;
