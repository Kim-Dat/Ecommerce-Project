import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { getWishList } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../features/product/productSlice";
import { Empty } from "antd";
const WishList = () => {
    const dispatch = useDispatch();
    const wishListState = useSelector(
        (state) => state.user?.wishlist?.wishlists
    );
    console.log(wishListState)
    useEffect(() => {
        dispatch(getWishList());
    }, []);

    const formattedAmount = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };
    const removeWishList = (e) => {
        dispatch(addToWishList(e));
        setTimeout(() => {
            dispatch(getWishList());
        }, 300);
    };
    return (
        <>
            <BreadCrumb title={"Wishlist"} />
            <Container class1={"wishlist-wrapper home-wrapper-2 py-5"}>
                <div className="row">
                    {wishListState?.length === 0 ? (
                        <Empty />
                    ) : (
                        wishListState?.map((item, index) => {
                            return (
                                <div key={index} className="col-3">
                                    <div className="wishlist-cart position-relative">
                                        <img
                                            onClick={() =>
                                                removeWishList(item._id)
                                            }
                                            src="/images/cross.svg"
                                            className="position-absolute cross img-fluid"
                                            alt="cross"
                                        />
                                        <div className="wishlist-cart-img">
                                            <img
                                                src={item.images[0].url}
                                                className="img-fluid w-100"
                                                alt="watch"
                                            />
                                        </div>
                                        <div className="py-3 px-2">
                                            <h5 className="title">
                                                {item.title}
                                            </h5>
                                            <h6 className="price my-4">
                                                {formattedAmount(item.price)}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </Container>
        </>
    );
};

export default WishList;
