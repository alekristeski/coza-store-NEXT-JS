import React from "react";
import { BlogInterface } from "../interface/Interface";
interface Props {
  blog: BlogInterface;
}
const BlogItem: React.FC<Props> = ({ blog }) => {
  return (
    <>
      {blog && (
        <a key={blog.id} className="p-b-63 d-block">
          <span className="hov-img0 how-pos5-parent">
            <img src={blog.img} alt={blog.title} />
          </span>
          <div className="p-t-32">
            <h4 className="p-b-15">
              <span className="ltext-108 cl2 hov-cl1 trans-04">
                {blog.title}
              </span>
            </h4>
            <p className="stext-117 cl6">{blog.excerpt}</p>
            <div className="flex-w flex-sb-m p-t-18">
              <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                <span>
                  <span className="cl4">By</span> {blog.author}
                  <span className="cl12 m-l-4 m-r-6">|</span>
                </span>
                <span>{blog.category}</span>
              </span>
              <span className="stext-101 cl2 trans-04 m-tb-10">
                <a href={`/blog/${blog.id}`}> Continue Reading</a>

                <i className="fa fa-long-arrow-right m-l-9"></i>
              </span>
            </div>
          </div>
        </a>
      )}
    </>
  );
};

export default BlogItem;
