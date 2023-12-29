import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";
const CompareProduct = () => {
    return (
        <>
            <BreadCrumb title={"CompareProducts"} />
            <Container class1={"compare-product-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-cart position-relative">
                            <img src="/images/cross.svg" className="position-absolute cross img-fluid" alt="cross" />
                            <div className="product-cart-img">
                                <img src="/images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-detail">
                                <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-fi+3G Tablet </h5>
                                <h6 className="price my-4">$5555</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Brand:</h5>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Type:</h5>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-5">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
