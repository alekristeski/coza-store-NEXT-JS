import React from "react";
import { ProductInterface } from "../interface/Interface";
import ProductItem from "./ProductItem";

interface Props {
  randomRelatedProducts: ProductInterface[];
}
const RelatedProducts: React.FC<Props> = ({ randomRelatedProducts }) => {
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
        </div>

        <div className="wrap-slick2">
          <div className="d-flex">
            {randomRelatedProducts &&
              randomRelatedProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
