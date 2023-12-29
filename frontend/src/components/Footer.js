import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex align-items-center gap-4 ">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="text-white mb-0">Đăng ký nhận bản tin</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="Enter Your Email Address..." aria-label="Enter Your Email Address..." aria-describedby="basic-addon2" />
                                <span className="input-group-text px-5 fs-3" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4 fs-3">Liên hệ với tôi :</h4>
                            <div>
                                <address className="text-white fs-4">Địa chỉ: 52/255 Nguyễn Khang, Yên Hòa, Cầu Giấy , Hà Nội</address>
                                <a href="tel:0867604223" className="mt-4 d-block mb-1 text-white fs-4">
                                    Điện thoại :0867604223
                                </a>
                                <a href="mailto:Nguyenkimdat13092003@gmail.com" className="mt-4 d-block mb-2 text-white fs-4">
                                    Email: Nguyenkimdat13092003@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-5 mt-5">
                                    <a href="" className="text-white">
                                        <BsFacebook className="fs-2 " />
                                    </a>
                                    <a href="" className="text-white">
                                        <BsInstagram className="fs-2  " />
                                    </a>
                                    <a href="" className="text-white">
                                        <BsGithub className="fs-2 " />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4 fs-3">Thông tin</h4>
                            <div className="footer-links d-flex flex-column fs-4">
                                <Link to={"/privacy-policy"} className="text-white py-3 mb-1">
                                    Chính sách bảo mật
                                </Link>
                                <Link to={"/refund-policy"} className="text-white py-3 mb-1">
                                    Chính sách hoàn tiền
                                </Link>
                                <Link to={"/shipping-policy"} className="text-white py-3 mb-1">
                                    chính sách vận chuyển
                                </Link>
                                <Link to={"/term-conditions"} className="text-white py-3 mb-1">
                                    Điều khoản và điều kiện
                                </Link>
                                <Link to={"/blogs"} className="text-white py-3 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4 fs-3">Tài khoản</h4>
                            <div className="footer-links d-flex flex-column fs-4">
                                <Link className="text-white py-3 mb-1">Của tôi</Link>
                                <Link className="text-white py-3 mb-1">Câu hỏi thường gặp</Link>
                                <Link className="text-white py-3 mb-1">Liên hệ</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4 fs-3">Liên kết nhanh</h4>
                            <div className="footer-links d-flex flex-column fs-4">
                                <Link className="text-white py-3 mb-1">Laptops</Link>
                                <Link className="text-white py-3 mb-1">HeadPhone</Link>
                                <Link className="text-white py-3 mb-1">Tablet</Link>
                                <Link className="text-white py-3 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white mb-0 fs-5">&copy; {new Date().getFullYear()} ; Powered by Developer's corner</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
