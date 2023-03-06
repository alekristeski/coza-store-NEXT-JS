import React from "react";
import Link from "next/link";
import { ProductInterface } from "../interface/Interface";

interface Props {
  product: ProductInterface;
}

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      {product && (
        <Link
          className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
          href={`/shop/${product.id}`}
        >
          <a>
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src={product.img} alt={product.title} />
                <div className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                  View Details
                </div>
              </div>

              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                  <div className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                    {product.title}
                  </div>

                  <span className="stext-105 cl3">{product.price}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default ProductItem;
