import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = (props) => {
    const { title } = props;
    return (
        <Container class1={"breadcrumb mb-0 py-4"}>
            <div className="row">
                <div className="col-12">
                    <div className="text-center">
                        <Link to={"/"} className="text-dark">
                            Trang chủ &nbsp;
                        </Link>
                        / <span className="fs-3 fw-medium">{title}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BreadCrumb;
