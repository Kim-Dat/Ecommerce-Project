import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blog.blogs);
    useEffect(() => {
        dispatch(getBlogs());
    }, []);
    return (
        <>
            <BreadCrumb title={"Blogs"} />
            <Container class1={"blog-wrapper home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className=" fw-semibold">Mua sắm theo danh mục</h3>
                            <div className="p-3">
                                <ul className="fs-4">
                                    <li>
                                        <Link to={"/"} className="text-secondary-emphasis">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to={"/store"} className="text-secondary-emphasis">
                                            Cửa hàng
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <Link to={"/blogs"} className="text-secondary-emphasis">
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/contact"} className="text-secondary-emphasis">
                                            Liên hệ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row g-4">
                            {blogs &&
                                blogs?.map((item, index) => {
                                    return (
                                        <div key={index} className="col-6">
                                            <BlogCard id={item?._id} description={item?.description} image={item?.images[0]?.url} title={item?.title} date={moment(item.create_at).format("MMMM Do YYYY, h:mm:ss a")} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blogs;
