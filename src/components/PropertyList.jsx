import { propertyLista } from "../../data";

import Property from "./Property";

const PropertyList = () => {
  return (
    <section className="section property" aria-label="property" id="listing">
      <div className="container">
        <h2 className="h2 section-title">Featured Properties</h2>

        <p className="section-text">
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>

        <ul className="property-list">
          {propertyLista.map((property) => (
            <Property key={property.id} {...property} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default PropertyList;
