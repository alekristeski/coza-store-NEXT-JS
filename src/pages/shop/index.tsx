import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductInterface } from "../../interface/Interface";

interface Props {
  categoryData: ProductInterface[];
}

const Shop: NextPage<Props> = ({ categoryData }) => {
  const { push, query } = useRouter();
  const [filter, setFilter] = useState<string>("");

  const checkSubString = (n: number, name: string) => {
    return (
      typeof query.gender_like === "string" &&
      query.gender_like?.substring(0, n) === name
    );
  };

  const pushPropsGenderLike = (name: string) => {
    return push({ query: { gender_like: name } });
  };
  const pushPropsQ = (name: string) => {
    return push({ query: { q: name } });
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  query.all === "" && "how-active1"
                }`}
                data-filter="*"
                onClick={() => push({ query: { all: "" } })}
              >
                All Products
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  checkSubString(5, "women") && "how-active1"
                }`}
                data-filter=".women"
                onClick={() => pushPropsGenderLike("women")}
              >
                Women
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  checkSubString(3, "man") && "how-active1"
                }`}
                data-filter=".men"
                onClick={() => pushPropsGenderLike("man")}
              >
                Men
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  query.q === "belt" && "how-active1"
                }`}
                data-filter=".bag"
                onClick={() => pushPropsQ("belt")}
              >
                Belt
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  query.q === "shoes" && "how-active1"
                }`}
                data-filter=".shoes"
                onClick={() => pushPropsQ("shoes")}
              >
                Shoes
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5   ${
                  query.q === "watch" && "how-active1"
                }`}
                data-filter=".watches"
                onClick={() => pushPropsQ("watch")}
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div
                className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search"
                onClick={() => {
                  if (checkSubString(3, "man")) {
                    pushPropsGenderLike(`man&q=${filter}`);
                  } else if (checkSubString(5, "women")) {
                    pushPropsGenderLike(`women&q=${filter}`);
                  } else {
                    push({ query: { all: `${filter}` } });
                  }
                  setFilter("");
                }}
              >
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>
            <div className="panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>

                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row isotope-grid">
            {categoryData &&
              categoryData.map((allProduct) => {
                return (
                  <div
                    key={allProduct.id}
                    className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
                  >
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                        <img src={allProduct.img} alt={allProduct.title} />
                        <a
                          href={`/shop/${allProduct.id}`}
                          className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        >
                          View Details
                        </a>
                      </div>

                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <a
                            href="product-detail.html"
                            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                          >
                            {allProduct.title}
                          </a>

                          <span className="stext-105 cl3">
                            {allProduct.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
                      <a
                        href="#"
                        className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
                      >
                        1
                      </a>

                      <a
                        href="#"
                        className="flex-c-m how-pagination1 trans-04 m-all-7"
                      >
                        2
                      </a>

                      <a
                        href="#"
                        className="flex-c-m how-pagination1 trans-04 m-all-7"
                      >
                        3
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const genderLike = query.gender_like;
  const category = query.q;
  const allProducts = query.all;

  let categoryRes,
    categoryData: ProductInterface[] | null = null;

  categoryRes = await fetch(
    `http://localhost:5001/products${
      genderLike ? `?gender_like=${genderLike}` : ""
    }${category ? `?q=${category}` : ""}${
      allProducts ? `?q=${allProducts}` : ""
    }`,
  );

  categoryData = await categoryRes.json();

  return {
    props: {
      categoryData,
    },
  };
};
export default Shop;
