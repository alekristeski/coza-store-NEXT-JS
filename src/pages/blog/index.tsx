import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import BlogItem from "../../components/BlogItem";
import PageTitle from "../../components/PageTitle";
import { BlogInterface } from "../../interface/Interface";

interface Props {
  blogs: BlogInterface[];
}

const Blog: NextPage<Props> = ({ blogs }) => {
  const { push, query } = useRouter();
  const [filter, setFilter] = useState<string>("");

  const checkSubString = (n: number, name: string) => {
    return (
      typeof query.category_like === "string" &&
      query.category_like?.substring(0, n) === name
    );
  };
  const pushProps = (name: string) => {
    return push({ query: { category_like: name } });
  };

  return (
    <>
      <Head>
        <title>Store - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="blog" />

      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {blogs &&
                  blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)}
                {blogs?.length === 0 && (
                  <p>There are no results with your search.</p>
                )}
              </div>
            </div>
            <div className="col-md-4 col-lg-3 p-b-80">
              <div className="side-menu">
                <form
                  className="bor17 of-hidden pos-relative"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (checkSubString(7, "fashion")) {
                      pushProps(`fashion&q=${filter}`);
                    } else if (checkSubString(6, "beauty")) {
                      pushProps(`beauty&q=${filter}`);
                    } else if (checkSubString(11, "streetstyle")) {
                      pushProps(`streetstyle&q=${filter}`);
                    } else if (checkSubString(9, "lifestyle")) {
                      pushProps(`lifestyle&q=${filter}`);
                    } else if (checkSubString(3, "diy")) {
                      pushProps(`diy&q=${filter}`);
                    } else {
                      push({ query: { all_blogs: `${filter}` } });
                    }
                    setFilter("");
                  }}
                >
                  <input
                    className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />

                  <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search"></i>
                  </button>
                </form>

                <div className="p-t-55">
                  <h4 className="mtext-112 cl2 p-b-33">Categories</h4>

                  <ul>
                    <li className="bor18">
                      <button
                        className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                          checkSubString(7, "fashion") && "how-active1"
                        }`}
                        onClick={() => pushProps("fashion")}
                      >
                        Fashion
                      </button>
                    </li>

                    <li className="bor18">
                      <button
                        className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                          checkSubString(6, "beauty") && "how-active1"
                        }`}
                        onClick={() => pushProps("beauty")}
                      >
                        Beauty
                      </button>
                    </li>

                    <li className="bor18">
                      <button
                        className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                          checkSubString(11, "streetstyle") && "how-active1"
                        }`}
                        onClick={() => pushProps("streetstyle")}
                      >
                        Street Style
                      </button>
                    </li>

                    <li className="bor18">
                      <button
                        className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                          checkSubString(9, "lifestyle") && "how-active1"
                        }`}
                        onClick={() => pushProps("lifestyle")}
                      >
                        Life Style
                      </button>
                    </li>

                    <li className="bor18">
                      <button
                        className={`dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4 ${
                          checkSubString(3, "diy") && "how-active1"
                        }`}
                        onClick={() => pushProps("diy")}
                      >
                        DIY & Crafts
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const categoryLike = query.category_like;
  const allBlogs = query.all_blogs;
  let blogRes,
    blogs: BlogInterface[] | null = null;

  blogRes = await fetch(
    `http://localhost:5001/blogs${
      categoryLike ? `?category_like=${categoryLike}` : ""
    }${allBlogs ? `?&q=${allBlogs}` : ""}`
  );

  blogs = await blogRes.json();

  return {
    props: {
      blogs,
    },
  };
};
export default Blog;
