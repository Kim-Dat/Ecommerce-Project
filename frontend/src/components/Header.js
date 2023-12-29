import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const Header = () => {
    const [totalAmount, setTotalAmount] = useState(null);
    const [quantityProductCart, setQuantityProductCart] = useState(0);
    const [paginate, setPaginate] = useState(true);
    const userCartState = useSelector((state) => state?.user?.cartProducts);
    const userState = useSelector((state) => state?.user);
    const productState = useSelector((state) => state?.product?.products);
    const [productOpt, setProductOpt] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let sum = 0;
        const cartLength = userCartState?.length;
        for (let index = 0; index < cartLength; index++) {
            sum += Number(userCartState[index]?.price * userCartState[index]?.quantity);
        }
        setTotalAmount(sum);
        setQuantityProductCart(cartLength);
    }, [userCartState]);

    useEffect(() => {
        let data = [];
        for (let index = 0; index < productState.length; index++) {
            const element = productState[index];
            data.push({ id: index, prod: element?._id, name: element?.title });
        }
        setProductOpt(data);
    }, [productState]);
    const formattedAmount = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white fs-5">Miễn phí vận chuyển cho đơn hàng trên 149.000 vnd</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white fs-5">
                                Hotline:
                                <a className="text-white ms-3" href="tel: 0867604223">
                                    0867604223
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1>
                                <Link to={"/"} className="text-white">
                                    Dev/at.
                                </Link>
                            </h1>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <Typeahead
                                    id="pagination-example"
                                    onPaginate={() => console.log("Results paginated")}
                                    onChange={(selected) => {
                                        navigate(`/product/${selected[0]?.prod}`);
                                    }}
                                    minLength={2}
                                    options={productOpt}
                                    paginate={paginate}
                                    labelKey={"name"}
                                    placeholder="Tìm kiếm sản phẩm..."
                                    clearButton
                                />
                                <span className="input-group-text px-5" id="basic-addon2">
                                    <BsSearch className="fs-4" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex justify-content-end align-items-center">
                                <div className={"ms-5"}>
                                    <Link to={"/wishlist"} className="d-flex align-items-center gap-2 text-white fs-5">
                                        <img src={wishlist} alt="wishlist" />
                                        <p className="mb-0">
                                            Sản phẩm <br /> Yêu thích
                                        </p>
                                    </Link>
                                </div>
                                <div className={"ms-5"}>
                                    <Link to={!!userState.user ? "/my-profile" : "/login"} className="d-flex align-items-center gap-2 text-white fs-5">
                                        <img src={user} alt="user" />
                                        {!!userState.user ? (
                                            <p className="mb-0">
                                                Xin chào <br /> {`${userState.user.firstName} ${userState.user.lastName}`}
                                            </p>
                                        ) : (
                                            <p className="mb-0">
                                                Đăng nhập <br /> Tài khoản của bạn
                                            </p>
                                        )}
                                    </Link>
                                </div>
                                <div className={"ms-5"}>
                                    <Link to={"/cart"} className="d-flex align-items-center gap-2 text-white">
                                        <img src={cart} alt="cart" />
                                        <div className="d-flex flex-column gap-3">
                                            <span className="badge bg-white text-dark fs-6">{quantityProductCart}</span>
                                            <span className="mb-0">{formattedAmount(totalAmount)}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-3 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={menu} alt="menu" />
                                            <span>Danh mục cửa hàng</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to={"/"}>
                                                    Trang chủ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to={""}>
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to={""}>
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links ms-5">
                                    <div className="d-flex align-items-center gap-5">
                                        <NavLink to={"/"}>Trang chủ</NavLink>
                                        <NavLink to={"/store"}>Cửa hàng</NavLink>
                                        {!!userState.user ? <NavLink to={"/my-orders"}>Đơn hàng của tôi</NavLink> : null}

                                        <NavLink to={"/blogs"}>Blogs</NavLink>
                                        <NavLink to={"/contact"}>Liên hệ</NavLink>

                                        {!!userState.user ? (
                                            <button onClick={() => handleLogout()} className="border border-0 fs-4 text-white bg-transparent text-uppercase">
                                                Đăng xuất
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
