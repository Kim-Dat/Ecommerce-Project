import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import ReactStars from "react-rating-stars-component";

import mainBanner from "../images/main-banner.jpg";
import catBanner1 from "../images/catbanner-01.jpg";
import catBanner2 from "../images/catbanner-02.jpg";
import catBanner3 from "../images/catbanner-03.jpg";
import catBanner4 from "../images/catbanner-04.jpg";
import { services, categories, marques } from "../utils/Data";
import Container from "../components/Container";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blog/blogSlice";
import { getProduct, getProducts } from "../features/product/productSlice";
const Home = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state) => state.blog);
    const products = useSelector((state) => state.product.products.products) || [];
    
    const formattedAmount = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };
    useEffect(() => {
        dispatch(getBlogs());
        dispatch(getProducts());
    }, []);
    return (
        <>
            <Container class1={"home-wrapper-1 py-5"}>
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="w-100 rounded-3 overflow-hidden">
                            <img src={mainBanner} className="img-fluid " alt="mainBanner" />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row flex-nowrap">
                            <div className=" col-4">
                                <img src={catBanner1} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                            <div className=" col-4">
                                <img src={catBanner2} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                            <div className=" col-4 ">
                                <img src={catBanner3} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                        </div>
                        <div className="row flex-nowrap mt-4">
                            <div className=" col-4">
                                <img src={catBanner4} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                            <div className=" col-4">
                                <img src={catBanner4} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                            <div className=" col-4">
                                <img src={catBanner4} className="img-fluid rounded-3" alt="mainBanner" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {services?.map((service, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center">
                                        <img src={service.image} style={{ width: "35px", height: "30px" }} className="fs-2" alt="services" />
                                        <div className="ps-3">
                                            <h5 className="fs-3 fw-semibold">{service.title}</h5>
                                            <p className="fs-5 text-secondary-emphasis fst-normal mt-2">{service.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"home-wrapper-2 py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                            {categories?.map((category, index) => {
                                return (
                                    <div key={index} className="d-flex align-items-center">
                                        <div>
                                            <h3 className="fw-semibold fs-3">{category.title}</h3>
                                            <p className="fs-4">{category.tagline}</p>
                                        </div>
                                        <img src={category.image} alt="watch" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"featured-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-heading">Bộ sưu tập nổi bật</h3>
                    </div>
                    <div className="row">
                        {products?.map((item, index) => {
                            if (item?.tags === "featured" && index < 7) {
                                return (
                                    <div key={index} className="col-3">
                                        <Link to={`/product/${item?._id}`} className="product-card position-relative">
                                            <div className="product-img">
                                                <img src={item?.images[0]?.url} alt="product image" />
                                            </div>
                                            <div className="product-details">
                                                <h6 className="fs-3 py-3">{item?.brand}</h6>
                                                <div className="product-title">
                                                    <h5 className="lh-sm">{item?.title}</h5>
                                                </div>
                                                <ReactStars count={5} size={24} value={+item?.totalrating} activeColor="#ffd700" edit={false} />
                                                <p
                                                    className={"desc fs-4"}
                                                    dangerouslySetInnerHTML={{
                                                        __html: item?.description,
                                                    }}
                                                ></p>
                                                <p className="price">{formattedAmount(item?.price)}</p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </Container>
            <Container class1={"famous-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Màn hình lớn</h5>
                                <h6 className="text-white">Đồng hồ thông minh</h6>
                                <p className="text-white mt-3">Từ 100 hoặc 500 / tháng cho 24 tháng. *</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-5.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Màn hình Studio</h5>
                                <h6 className="text-white">Độ sáng 600 nits.</h6>
                                <p className="text-white mt-3">Màn hình Retina 27 inch 5K</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-1.jpeg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">điện thoại thông minh</h5>
                                <h6 className="text-white">Iphone 15 Pro</h6>
                                <p className="text-white mt-3">Màu xám. Từ 200 hoặc 300 / tháng. trong 24 tháng. *</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-2.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card">
                            <div className="famous-content">
                                <h5 className="text-white">Loa gia đình</h5>
                                <h6 className="text-white">Room-filling sound.</h6>
                                <p className="text-white mt-3">Từ 90 hoặc 120 / tháng cho 24 tháng. *</p>
                            </div>
                            <div className="famous-img">
                                <img src="/images/famous-3.jpg" alt="famous" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"special-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-heading">Bộ sưu tập đặc biệt</h3>
                    </div>
                </div>
                <div className="row">
                    {products?.map((item, index) => {
                        if (item?.tags === "special" && index < 7) {
                            return <SpecialProduct key={index} title={item?.title} brand={item?.brand} totalRating={item?.totalrating} price={item?.price} quantity={item?.quantity} sold={item?.sold} img={item?.images[0]?.url} />;
                        }
                    })}
                </div>
            </Container>
            <Container class1={"popular-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-heading">Sản phẩm phổ biến</h3>
                    </div>
                </div>
                <div className="row">
                    {products?.map((item, index) => {
                        if (item?.tags === "popular" && index < 7) {
                            return (
                                <div key={index} className="col-3">
                                    <Link to={`/product/${item?._id}`} className="product-card position-relative">
                                        <div className="product-img">
                                            <img src={item?.images[0].url} alt="product image" />
                                        </div>
                                        <div className="product-details">
                                            <h6 className="fs-3 py-3">{item?.brand}</h6>
                                            <div className="product-title">
                                                <h5 className="lh-sm">{item?.title}</h5>
                                            </div>
                                            <ReactStars count={5} size={24} value={+item?.totalrating} activeColor="#ffd700" edit={false} />
                                            <p
                                                className={"desc"}
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.description,
                                                }}
                                            ></p>
                                            <p className="price">{formattedAmount(item?.price)}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        }
                    })}
                </div>
            </Container>
            <Container class1={"marque-wrapper py-5"}>
                <div className="row">
                    <div className="col-12">
                        <div className="marque-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                {marques?.map((marque, index) => {
                                    return (
                                        <div key={index} className="mx-4 w-25">
                                            <img src={marque.image} alt="brand" />
                                        </div>
                                    );
                                })}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"blog-wrapper py-5 home-wrapper-2"}>
                <div className="row g-4">
                    {blogs?.map((item, index) => {
                        if (index < 4) {
                            return (
                                <div key={index} className="col-3">
                                    <BlogCard id={item?._id} description={item?.description} image={item?.images[0].url} title={item?.title} date={moment(item.create_at).format("MMMM Do YYYY, h:mm:ss a")} />
                                </div>
                            );
                        }
                    })}
                </div>
            </Container>
        </>
    );
};

export default Home;
