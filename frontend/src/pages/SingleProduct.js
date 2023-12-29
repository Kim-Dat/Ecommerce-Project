import React, { useEffect, useRef } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Container from "../components/Container";

import { useDispatch, useSelector } from "react-redux";
import { addToWishList, getProduct, getProducts, rating } from "../features/product/productSlice";
import { addToCart, getUserCart } from "../features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SingleProduct = () => {
    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false);
    const [popularProd, setPopularProd] = useState([]);
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState("");

    const commentRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();

    const ProdId = location.pathname.split("/")[2];
    const singleProduct = useSelector((state) => state?.product?.singleProduct);
    const productsState = useSelector((state) => state?.product?.products);
    const userCartState = useSelector((state) => state?.user?.cartProducts) || [];
    const ratedState = useSelector((state) => state?.product?.rated?.ratings) || [];
    const copyToClipboard = (text) => {
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };

    useEffect(() => {
        dispatch(getProduct(ProdId));
        dispatch(getUserCart());
        dispatch(getProducts());
    }, [ProdId]);

    useEffect(() => {
        for (let index = 0; index < userCartState.length; index++) {
            if (ProdId === userCartState[index].productId._id) {
                setAlreadyAdded(true);
            }
        }
    }, []);
    const handleAddToWishList = (id) => {
        dispatch(addToWishList(id));
    };
    const formattedAmount = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const uploadCart = () => {
        if (color === null) {
            toast.warn("please Choose Color", { autoClose: 2000 });
            return;
        } else {
            dispatch(
                addToCart({
                    productId: ProdId,
                    quantity: quantity,
                    color: color,
                    price: singleProduct?.price,
                })
            );
            dispatch(getUserCart());
        }
    };

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productsState.length; index++) {
            const element = productsState[index];
            if (element.tags === "popular") {
                data.push(element);
            }
            setPopularProd(data);
        }
    }, [productsState]);

    const addRatingToProduct = () => {
        if (star === 0) {
            toast.warn("Please add star rating", { autoClose: 500 });
        } else if (comment === "") {
            toast.warn("Please add comment rating", { autoClose: 500 });
        } else {
            dispatch(rating({ star: star, prodId: ProdId, comment: comment }));
            setTimeout(() => {
                dispatch(getProduct(ProdId));
                commentRef.current.value = "";
            }, 300);
        }
    };
    return (
        <>
            <BreadCrumb title={"Product Name"} />
            <Container class1={"main-product-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-5">
                        <div className="product-image-wrapper ">
                            <div className="main-product-image">
                                <img src={singleProduct?.images[0]?.url} />
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="main-product-details">
                            <div className="line-border-bottom">
                                <h3 className="title">{singleProduct?.title}</h3>
                            </div>
                            <div className="line-border-bottom">
                                <p className="price fs-2">{formattedAmount(singleProduct?.price)}</p>
                                <div className="d-flex align-items-center gap-2 py-2">
                                    <ReactStars count={5} size={24} value={singleProduct?.totalRating} activeColor="#ffd700" edit={false} />
                                    <p className="t-review">
                                        ({singleProduct?.ratings?.length} Reviews){singleProduct?.totalRating}
                                    </p>
                                </div>
                                <a className="review-btn" href="#review">
                                    {" "}
                                    Viết đánh giá
                                </a>
                            </div>
                            <div className="p-3">
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Thương hiệu :</h3>
                                    <p className="product-data">{singleProduct?.brand}</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Thể loại :</h3>
                                    <p className="product-data">{singleProduct?.category}</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Thông tin :</h3>
                                    <p className="product-data">{singleProduct?.tags}</p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Số lượng :</h3>
                                    <p className="product-data">{singleProduct?.quantity}</p>
                                </div>

                                {!alreadyAdded && (
                                    <>
                                        <div className="d-flex gap-3 flex-column  my-3">
                                            <h3 className="product-heading">Color :</h3>
                                            <Color setColor={setColor} data={singleProduct?.color} />
                                        </div>
                                    </>
                                )}
                                <div className="d-flex gap-3 flex-row align-items-center my-3">
                                    {!alreadyAdded && (
                                        <>
                                            <h3 className="product-heading fs-3" style={{ color: "#bf4800" }}>
                                                Số lượng muốn mua :
                                            </h3>
                                            <div className="ms-4 me-2">
                                                <input id="" className="form-control fs-3" type="number" min={1} max={10} style={{ width: "60px" }} name="" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                            </div>
                                        </>
                                    )}
                                    <div className="d-flex align-item-center gap-3">
                                        <button
                                            type="submit"
                                            className="button-small"
                                            onClick={() => {
                                                alreadyAdded ? navigate("/cart") : uploadCart();
                                            }}
                                        >
                                            {alreadyAdded ? "Đi tới giỏ hàng" : "Thêm vào giỏ hàng"}
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-5 my-4">
                                    <div>
                                        <button className="border-0 bg-transparent d-flex align-items-center" onClick={() => handleAddToWishList(ProdId)}>
                                            <FaRegHeart className="fs-2" />
                                            <span className="fs-4 ms-2"> Thêm yêu thích</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 flex-column my-3">
                                    <h3 className="product-heading">Shipping and Return :</h3>
                                    <p className="product-data ">
                                        Mua sắm miễn phí và trả hàng có sẵn trên tất cả các đơn đặt hàng
                                        <br />
                                        Tôi gửi tất cả chúng tôi đặt hàng trong nước trong vòng 3-5 ngày
                                    </p>
                                </div>
                                <div className="d-flex gap-3 align-items-center my-3">
                                    <h3 className="product-heading">Link hình ảnh sản phẩm:</h3>
                                    <a
                                        href="dangerouslySetInnerHTML"
                                        onClick={() => {
                                            copyToClipboard(singleProduct?.images[0]?.url);
                                        }}
                                    >
                                        Sao chép đường dẫn tại đây
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"description-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h4>Mô tả sản phẩm</h4>
                        <div className="bg-white p-4">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: singleProduct?.description || "",
                                }}
                            ></p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"reviews-wrapper home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Đánh giá sản phẩm </h3>
                        <div className="reviews-inner-wrapper">
                            <div className="reviews-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Đánh giá của khách hàng</h4>
                                    <div className="d-flex gap-3 align-items-center">
                                        <ReactStars count={5} size={24} value={3} activeColor="#ffd700" edit={false} />
                                        <p>Dựa trên {singleProduct?.ratings?.length} đánh giá</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-form py-4">
                                <h4>Đánh giá sản phẩm tại đây</h4>
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={star}
                                        activeColor="#ffd700"
                                        edit={true}
                                        onChange={(e) => {
                                            setStar(e);
                                        }}
                                    />
                                    <textarea
                                        ref={commentRef}
                                        name="comment"
                                        id="commentRating"
                                        className="w-100 form-control fs-4"
                                        rows={4}
                                        cols={30}
                                        placeholder="Vui lòng đánh giá tại đây..."
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                        }}
                                    ></textarea>
                                </div>
                                <div className="d-flex justify-content-end mt-3">
                                    <button onClick={addRatingToProduct} className="button-small border-0">
                                        Gửi đánh giá
                                    </button>
                                </div>
                            </div>
                            {singleProduct?.ratings?.map((item, index) => {
                                return (
                                    <div key={index} className="reviews mt-4 ">
                                        <div className="review py-3 border-bottom ">
                                            <div>
                                                <span className="fs-3">{`${item.postedBy.firstName} ${item.postedBy.lastName} ${item.star}`}</span>
                                                <ReactStars count={5} size={24} value={item.star} activeColor="#ffd700" edit={false} />
                                            </div>
                                            <p className="mt-3">{item.comment}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1={"popular-wrapper py-5 home-wrapper-2"}>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Sản phẩm phổ biến</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard data={popularProd} />
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
